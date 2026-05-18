import { BusinessRule } from "@servicenow/sdk/core";
import { assignOpportunityQuarter } from "../server/assignOpportunityQuarter.js";

// ============================================================
// INLINE SHARED LOGIC
// ============================================================
// The two BRs below use string-form scripts (not module imports) because
// module-loaded BR scripts have been silently failing on this instance.
// Inlining the calculation guarantees the math runs.

const REFRESH_TRACKING_FOR_QUARTER = `
function pad2(n) { return n < 10 ? '0' + n : '' + n; }
var QUARTER_RANGES = {
  q1: { startMonth: 1, startDay: 1, endMonth: 3, endDay: 31 },
  q2: { startMonth: 4, startDay: 1, endMonth: 6, endDay: 30 },
  q3: { startMonth: 7, startDay: 1, endMonth: 9, endDay: 30 },
  q4: { startMonth: 10, startDay: 1, endMonth: 12, endDay: 31 }
};
// Names of forecast_category records on the instance (case-insensitive match).
var BUILD_CATEGORY_NAMES = ['Commit', 'Closed', 'Expect', 'Submitted'];
var UPSIDE_CATEGORY_NAMES = ['Commit', 'Closed', 'Expect', 'Submitted', 'Upside'];

function dateRange(qn, fy) {
  var r = QUARTER_RANGES[String(qn || '').toLowerCase()];
  if (!r || !fy) return null;
  return {
    start: fy + '-' + pad2(r.startMonth) + '-' + pad2(r.startDay) + ' 00:00:00',
    endInclusive: fy + '-' + pad2(r.endMonth) + '-' + pad2(r.endDay) + ' 23:59:59'
  };
}

function quarterFromDate(dateValue) {
  if (!dateValue) return null;
  var gdt = new GlideDateTime(dateValue);
  var month = gdt.getMonthLocalTime();
  var year = '' + gdt.getYearLocalTime();
  return { qn: 'q' + (Math.floor((month - 1) / 3) + 1), fy: year };
}

// Resolve forecast_category sys_ids by exact (case-insensitive) name.
function categoryRecordsByNames(namesArray) {
  var ids = [], names = [];
  var fc = new GlideRecord('sn_sales_forecast_category');
  var enc = '';
  for (var i = 0; i < namesArray.length; i++) {
    if (i > 0) enc += '^OR';
    enc += 'name=' + namesArray[i];
  }
  fc.addEncodedQuery(enc);
  fc.query();
  while (fc.next()) {
    ids.push(fc.getUniqueValue());
    names.push(fc.getValue('name'));
  }
  return { ids: ids.join(','), names: names.join('|') };
}

// Iterate opportunities via GlideRecord and sum NNACV explicitly in JS.
// More verbose than GlideAggregate but logs every contributing opportunity,
// avoiding any IN-list aggregation quirks.
function sumNnacv(label, range, filterFn) {
  var gr = new GlideRecord('sn_opty_mgmt_core_opportunity');
  gr.addQuery('estimated_closed_date', '>=', range.start);
  gr.addQuery('estimated_closed_date', '<=', range.endInclusive);
  if (filterFn) filterFn(gr);
  gr.query();
  var sum = 0, count = 0;
  while (gr.next()) {
    var v = parseFloat(gr.getValue('x_snc_quarterly_ga_nnacv')) || 0;
    sum += v;
    count++;
    gs.info('  ' + label + ' opty=' + gr.getValue('number') +
      ' fc=' + gr.getValue('forecast_category') +
      ' pillar=' + gr.getValue('x_snc_quarterly_ga_is_pillar') +
      ' nnacv=' + v + ' date=' + gr.getValue('estimated_closed_date'));
  }
  gs.info('  ' + label + ' TOTAL sum=' + sum + ' count=' + count);
  return sum;
}

// Build an OR-encoded query of forecast_category = <sys_id> across all matched
// category ids. Using addEncodedQuery (not addQuery IN) eliminates ambiguity
// in how IN-with-CSV is parsed against reference fields.
function applyCategoryFilter(gr, idsCsv) {
  if (!idsCsv) return;
  var parts = idsCsv.split(',');
  var enc = '';
  for (var i = 0; i < parts.length; i++) {
    if (i > 0) enc += '^OR';
    enc += 'forecast_category=' + parts[i];
  }
  gr.addEncodedQuery(enc);
}

function aggregateForQuarter(qn, fy) {
  var range = dateRange(qn, fy);
  if (!range) return null;
  var build = categoryRecordsByNames(BUILD_CATEGORY_NAMES);
  var upside = categoryRecordsByNames(UPSIDE_CATEGORY_NAMES);
  gs.info('aggregate ' + qn + '/' + fy + ' range=' + range.start + '..' + range.endInclusive +
    ' buildCats=[' + build.names + '] upsideCats=[' + upside.names + ']');
  var pillarBuild = build.ids ? sumNnacv('BUILD', range, function (gr) {
    applyCategoryFilter(gr, build.ids);
    gr.addQuery('x_snc_quarterly_ga_is_pillar', true);
  }) : 0;
  var pillarUpside = upside.ids ? sumNnacv('UPSIDE', range, function (gr) {
    applyCategoryFilter(gr, upside.ids);
  }) : 0;
  gs.info('aggregate ' + qn + '/' + fy + ' pillarBuild=' + pillarBuild + ' pillarUpside=' + pillarUpside);
  return {
    pillarBuild: pillarBuild,
    pillarUpside: pillarUpside
  };
}

function applyMetrics(trackingGr, metrics) {
  var target = parseFloat(trackingGr.getValue('target')) || 0;
  var carryover = parseFloat(trackingGr.getValue('gap_carryover')) || 0;
  var newTarget = target + carryover;
  var pct = newTarget !== 0 ? (metrics.pillarBuild / newTarget) * 100 : 0;
  var coverage = newTarget !== 0 ? ((metrics.pillarBuild + metrics.pillarUpside) / newTarget) * 100 : 0;
  var btg = newTarget - metrics.pillarBuild;
  trackingGr.setValue('total_pillar_build', metrics.pillarBuild);
  trackingGr.setValue('total_pillar_upside', metrics.pillarUpside);
  trackingGr.setValue('new_target', newTarget);
  trackingGr.setValue('pct_build_to_new_target', pct);
  trackingGr.setValue('target_coverage_pct', coverage);
  trackingGr.setValue('build_to_target_gap', btg);
  trackingGr.setValue('variance_to_gap', metrics.pillarUpside - btg);
  return {
    target: target, carryover: carryover, newTarget: newTarget,
    pct: pct, coverage: coverage, btg: btg
  };
}
`;

// BR script: on opportunity insert/update/delete, find the affected quarter(s)
// and recompute the matching tracking record(s).
const SYNC_OPTY_SCRIPT = `
${REFRESH_TRACKING_FOR_QUARTER}

(function execute(current, previous) {
  var LOG = 'OptyToTracking';
  try {
    var seen = {};
    var dates = [];
    if (current) {
      var d1 = current.getValue('estimated_closed_date');
      if (d1) dates.push(d1);
    }
    if (previous) {
      var d2 = previous.getValue('estimated_closed_date');
      if (d2 && d2 !== (current ? current.getValue('estimated_closed_date') : null)) dates.push(d2);
    }
    if (dates.length === 0) {
      gs.info(LOG + ': skip (no estimated_closed_date)');
      return;
    }
    for (var i = 0; i < dates.length; i++) {
      var q = quarterFromDate(dates[i]);
      if (!q) continue;
      var key = q.qn + '/' + q.fy;
      if (seen[key]) continue;
      seen[key] = true;

      var qrec = new GlideRecord('x_snc_quarterly_ga_quarter');
      qrec.addQuery('quarter_number', q.qn);
      qrec.addQuery('fiscal_year', q.fy);
      qrec.setLimit(1);
      qrec.query();
      if (!qrec.next()) {
        gs.info(LOG + ': no Quarter record for ' + key);
        continue;
      }

      var metrics = aggregateForQuarter(q.qn, q.fy);
      if (!metrics) continue;

      var tracking = new GlideRecord('x_snc_quarterly_ga_quarter_tracking');
      tracking.addQuery('quarter', qrec.getUniqueValue());
      tracking.query();
      var n = 0;
      while (tracking.next()) {
        var w = applyMetrics(tracking, metrics);
        tracking.update();
        n++;
        gs.info(LOG + ': wrote tracking=' + tracking.getUniqueValue() + ' ' + key +
          ' build=' + metrics.pillarBuild + ' pillarUpside=' + metrics.pillarUpside +
          ' newTarget=' + w.newTarget + ' pct=' + w.pct + ' coverage=' + w.coverage);
      }
      if (n === 0) gs.info(LOG + ': no tracking record for ' + key);
    }
  } catch (e) {
    gs.error(LOG + ': exception: ' + e + ' stack: ' + (e.stack || 'none'));
    throw e;
  }
})(current, previous);
`;

// BR script: on tracking insert/update, re-aggregate the same quarter's opportunities
// so the user editing target/notes also gets fresh BUILD/UPSIDE numbers.
const CALC_TRACKING_SCRIPT = `
${REFRESH_TRACKING_FOR_QUARTER}

(function execute(current) {
  var LOG = 'CalcTracking';
  try {
    gs.info(LOG + ': entered tracking=' + current.getUniqueValue());
    var quarterId = current.getValue('quarter');
    if (!quarterId) {
      gs.info(LOG + ': no quarter ref, skipping');
      return;
    }
    var qrec = new GlideRecord('x_snc_quarterly_ga_quarter');
    if (!qrec.get(quarterId)) {
      gs.info(LOG + ': quarter ref did not resolve');
      return;
    }
    var qn = String(qrec.getValue('quarter_number') || '').toLowerCase();
    var fy = qrec.getValue('fiscal_year');
    var metrics = aggregateForQuarter(qn, fy);
    if (!metrics) {
      gs.info(LOG + ': no metrics computable for ' + qn + '/' + fy);
      return;
    }
    var w = applyMetrics(current, metrics);
    gs.info(LOG + ': ' + qn + '/' + fy + ' build=' + metrics.pillarBuild +
      ' pillarUpside=' + metrics.pillarUpside +
      ' newTarget=' + w.newTarget + ' pct=' + w.pct + ' coverage=' + w.coverage);
  } catch (e) {
    gs.error(LOG + ': exception: ' + e + ' stack: ' + (e.stack || 'none'));
    throw e;
  }
})(current);
`;

// ============================================================
// BUSINESS RULES
// ============================================================

export const calculateQuarterMetrics = BusinessRule({
  $id: Now.ID[0],
  name: "Calculate Quarter Tracking Metrics",
  table: "x_snc_quarterly_ga_quarter_tracking",
  when: "before",
  action: ["insert", "update"],
  order: 100,
  active: true,
  description:
    "Re-aggregates BUILD/UPSIDE from opportunities and writes the derived tracking fields. Runs on every tracking insert/update (including programmatic .update() from the sync BR and the Recalculate UI Actions).",
  script: CALC_TRACKING_SCRIPT,
});

export const syncOptyToTracking = BusinessRule({
  $id: Now.ID["sync_opty_to_tracking_br"],
  name: "Sync Quarter Tracking From Opportunity",
  table: "sn_opty_mgmt_core_opportunity" as any,
  when: "after",
  action: ["insert", "update", "delete"],
  order: 100,
  active: true,
  description:
    "On every opportunity insert/update/delete, derives the affected quarter(s) from estimated_closed_date, aggregates BUILD/Pillar UPSIDE/Total UPSIDE, and writes all derived metrics to the matching Quarter Tracking record.",
  script: SYNC_OPTY_SCRIPT,
});

export const assignOptyQuarter = BusinessRule({
  $id: Now.ID["assign_opty_quarter_br"],
  name: "Assign Opportunity Quarter From Estimated Close Date",
  table: "sn_opty_mgmt_core_opportunity" as any,
  when: "before",
  action: ["insert", "update"],
  order: 100,
  active: true,
  description:
    "Derives the calendar quarter from estimated_closed_date and sets the Quarter reference. Tolerant of quarter_number / fiscal_year casing variants. No-ops on empty date or no matching Quarter.",
  script: assignOpportunityQuarter,
});
