import { GlideRecord, GlideAggregate, gs } from "@servicenow/glide";

var OPTY_TABLE = "sn_opty_mgmt_core_opportunity";
var TRACKING_TABLE = "x_snc_quarterly_ga_quarter_tracking";
var QUARTER_TABLE = "x_snc_quarterly_ga_quarter";
var NNACV_FIELD = "x_snc_quarterly_ga_nnacv";
var DATE_FIELD = "estimated_closed_date";
var PILLAR_FIELD = "x_snc_quarterly_ga_is_pillar";
var LOG_SOURCE = "calculateQuarterTrackingMetrics";

var BUILD_CATEGORY_NAMES_RAW = "Closed,Commit,Submit,Expect";
var UPSIDE_CATEGORY_NAME_RAW = "Upside";
var PRIOR_QUARTER = { q1: null, q2: "q1", q3: "q2", q4: "q3" };

var QUARTER_RANGES = {
  q1: { startMonth: 1, startDay: 1, endMonth: 3, endDay: 31 },
  q2: { startMonth: 4, startDay: 1, endMonth: 6, endDay: 30 },
  q3: { startMonth: 7, startDay: 1, endMonth: 9, endDay: 30 },
  q4: { startMonth: 10, startDay: 1, endMonth: 12, endDay: 31 },
};

function pad2(n) {
  return n < 10 ? "0" + n : "" + n;
}

function expandCasings(csv) {
  var parts = String(csv).split(",");
  var out = [];
  for (var i = 0; i < parts.length; i++) {
    var v = parts[i];
    out.push(v);
    out.push(v.toLowerCase());
    out.push(v.toUpperCase());
  }
  return out.join(",");
}

var BUILD_CATEGORY_NAMES = expandCasings(BUILD_CATEGORY_NAMES_RAW);
var UPSIDE_CATEGORY_NAMES = expandCasings(UPSIDE_CATEGORY_NAME_RAW);

function quarterDateRange(quarterNumber, fiscalYear) {
  if (!quarterNumber || !fiscalYear) return null;
  var r = QUARTER_RANGES[String(quarterNumber).toLowerCase()];
  if (!r) return null;
  return {
    start: fiscalYear + "-" + pad2(r.startMonth) + "-" + pad2(r.startDay),
    end: fiscalYear + "-" + pad2(r.endMonth) + "-" + pad2(r.endDay),
  };
}

function findQuarterRecord(quarterNumber, fiscalYear) {
  if (!quarterNumber || !fiscalYear) return null;
  var qnLower = String(quarterNumber).toLowerCase();
  var qnUpper = qnLower.toUpperCase();
  var fyRaw = String(fiscalYear).trim();
  var fyNoPrefix = fyRaw.replace(/^FY/i, "");
  var fy4 = fyNoPrefix.length === 2 ? "20" + fyNoPrefix : fyNoPrefix;
  var fy2 = fy4.length === 4 ? fy4.substring(2) : fyNoPrefix;

  var gr = new GlideRecord(QUARTER_TABLE);
  var qn = gr.addQuery("quarter_number", qnLower);
  if (qnLower !== qnUpper) qn.addOrCondition("quarter_number", qnUpper);
  var fy = gr.addQuery("fiscal_year", fy4);
  fy.addOrCondition("fiscal_year", "FY" + fy4);
  fy.addOrCondition("fiscal_year", fy2);
  fy.addOrCondition("fiscal_year", fyRaw);
  gr.setLimit(1);
  gr.query();
  return gr.next() ? gr : null;
}

function sumNnacvForRange(range, extraFilter) {
  var ga = new GlideAggregate(OPTY_TABLE);
  ga.addAggregate("SUM", NNACV_FIELD);
  ga.addQuery(DATE_FIELD, ">=", range.start);
  ga.addQuery(DATE_FIELD, "<=", range.end);
  if (extraFilter) extraFilter(ga);
  ga.query();
  if (ga.next()) {
    return parseFloat(ga.getAggregate("SUM", NNACV_FIELD)) || 0;
  }
  return 0;
}

export function calculateQuarterTrackingMetrics(current) {
  gs.info(LOG_SOURCE + ": entered");
  try {
    var trackingId = current.getUniqueValue();
    var quarterId = current.getValue("quarter");
    gs.info(
      LOG_SOURCE +
        ": tracking sys_id=" +
        trackingId +
        " quarter ref=" +
        quarterId
    );

    var pillarBuild = 0;
    var pillarUpside = 0;
    var totalUpside = 0;
    var carryover = 0;

    if (!quarterId) {
      gs.info(LOG_SOURCE + ": tracking has no quarter ref");
    } else {
      var quarterGr = new GlideRecord(QUARTER_TABLE);
      if (!quarterGr.get(quarterId)) {
        gs.info(LOG_SOURCE + ": quarter ref did not resolve: " + quarterId);
      } else {
        var quarterNumber = String(
          quarterGr.getValue("quarter_number") || ""
        ).toLowerCase();
        var fiscalYear = quarterGr.getValue("fiscal_year");
        var range = quarterDateRange(quarterNumber, fiscalYear);

        if (range) {
          pillarBuild = sumNnacvForRange(range, function (ga) {
            ga.addQuery("forecast_category.name", "IN", BUILD_CATEGORY_NAMES);
          });
          pillarUpside = sumNnacvForRange(range, function (ga) {
            ga.addQuery("forecast_category.name", "IN", UPSIDE_CATEGORY_NAMES);
            ga.addQuery(PILLAR_FIELD, true);
          });
          totalUpside = sumNnacvForRange(range, function (ga) {
            ga.addQuery("forecast_category.name", "IN", UPSIDE_CATEGORY_NAMES);
          });
          gs.info(
            LOG_SOURCE +
              ": " +
              quarterNumber +
              "/" +
              fiscalYear +
              " range " +
              range.start +
              ".." +
              range.end +
              " pillarBuild=" +
              pillarBuild +
              " pillarUpside=" +
              pillarUpside +
              " totalUpside=" +
              totalUpside
          );
        } else {
          gs.info(
            LOG_SOURCE +
              ": no date range for " +
              quarterNumber +
              "/" +
              fiscalYear
          );
        }

        var priorQuarterNumber = PRIOR_QUARTER[quarterNumber];
        if (priorQuarterNumber && fiscalYear) {
          var priorQuarter = findQuarterRecord(priorQuarterNumber, fiscalYear);
          if (priorQuarter) {
            var priorTracking = new GlideRecord(TRACKING_TABLE);
            priorTracking.addQuery("quarter", priorQuarter.getUniqueValue());
            priorTracking.setLimit(1);
            priorTracking.query();
            if (priorTracking.next()) {
              carryover =
                parseFloat(priorTracking.getValue("build_to_target_gap")) || 0;
            }
          }
        }
      }
    }

    current.setValue("total_pillar_build", pillarBuild);
    current.setValue("total_pillar_upside", pillarUpside);
    current.setValue("total_upside", totalUpside);
    current.setValue("gap_carryover", carryover);

    var target = parseFloat(current.getValue("target")) || 0;
    var newTarget = target + carryover;
    current.setValue("new_target", newTarget);

    var pctBuild = 0;
    var coverage = 0;
    if (newTarget !== 0) {
      pctBuild = (pillarBuild / newTarget) * 100;
      coverage = ((pillarBuild + pillarUpside) / newTarget) * 100;
    }
    current.setValue("pct_build_to_new_target", pctBuild);
    current.setValue("target_coverage_pct", coverage);

    var buildToTargetGap = newTarget - pillarBuild;
    current.setValue("build_to_target_gap", buildToTargetGap);
    current.setValue("variance_to_gap", pillarUpside - buildToTargetGap);

    gs.info(
      LOG_SOURCE +
        ": wrote target=" +
        target +
        " carryover=" +
        carryover +
        " newTarget=" +
        newTarget +
        " pillarBuild=" +
        pillarBuild +
        " pillarUpside=" +
        pillarUpside +
        " pctBuild=" +
        pctBuild +
        " coverage=" +
        coverage +
        " buildToTargetGap=" +
        buildToTargetGap
    );
  } catch (e) {
    gs.error(
      LOG_SOURCE + ": exception: " + e + " stack: " + (e.stack || "no stack")
    );
    throw e;
  }
}
