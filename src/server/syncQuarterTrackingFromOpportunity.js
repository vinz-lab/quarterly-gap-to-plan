import { GlideRecord, gs } from "@servicenow/glide";
import {
  quarterAndYearFromDate,
  findQuarterRecord,
} from "./quarterUtils.js";
import { calculateQuarterTrackingMetrics } from "./calculateQuarterTrackingMetrics.js";

var QUARTER_TABLE = "x_snc_quarterly_ga_quarter";
var TRACKING_TABLE = "x_snc_quarterly_ga_quarter_tracking";
var DATE_FIELD = "estimated_closed_date";
var LOG_SOURCE = "syncQuarterTrackingFromOpportunity";

function currentFiscalYear() {
  var gr = new GlideRecord(QUARTER_TABLE);
  gr.addQuery("active", true);
  gr.setLimit(1);
  gr.query();
  return gr.next() ? gr.getValue("fiscal_year") : "";
}

function updateTrackingForQuarter(quarterNumber, fiscalYear) {
  var quarterGr = findQuarterRecord(quarterNumber, fiscalYear);
  if (!quarterGr) {
    gs.info(
      LOG_SOURCE +
        ": no Quarter record for " +
        quarterNumber +
        "/" +
        fiscalYear
    );
    return 0;
  }
  var tracking = new GlideRecord(TRACKING_TABLE);
  tracking.addQuery("quarter", quarterGr.getUniqueValue());
  tracking.query();
  var count = 0;
  while (tracking.next()) {
    calculateQuarterTrackingMetrics(tracking);
    tracking.update();
    count++;
  }
  gs.info(
    LOG_SOURCE +
      ": refreshed " +
      count +
      " tracking record(s) for " +
      quarterNumber +
      "/" +
      fiscalYear
  );
  return count;
}

export function syncQuarterTrackingFromOpportunity(current, previous) {
  /** @type {Record<string, boolean>} */
  var seen = {};
  var candidates = [];
  if (current) candidates.push(current.getValue(DATE_FIELD));
  if (previous) candidates.push(previous.getValue(DATE_FIELD));

  var hasAny = false;
  for (var c = 0; c < candidates.length; c++) {
    if (candidates[c]) {
      hasAny = true;
      break;
    }
  }
  if (!hasAny) {
    gs.info(
      LOG_SOURCE + ": skipped, no estimated_closed_date in current/previous"
    );
    return;
  }

  var currentFy = currentFiscalYear();
  if (!currentFy) {
    gs.info(LOG_SOURCE + ": no active Quarter found, skipping");
    return;
  }

  for (var i = 0; i < candidates.length; i++) {
    var q = quarterAndYearFromDate(candidates[i]);
    if (!q) continue;
    if (q.fiscalYear !== currentFy) {
      gs.info(
        LOG_SOURCE +
          ": skipped " +
          q.quarterNumber +
          "/" +
          q.fiscalYear +
          " (not current FY=" +
          currentFy +
          ")"
      );
      continue;
    }
    var key = q.quarterNumber + "/" + q.fiscalYear;
    if (seen[key]) continue;
    seen[key] = true;
    updateTrackingForQuarter(q.quarterNumber, q.fiscalYear);
  }
}
