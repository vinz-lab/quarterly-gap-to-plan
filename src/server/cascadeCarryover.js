import { GlideRecord } from "@servicenow/glide";

var TRACKING_TABLE = "x_snc_quarterly_ga_quarter_tracking";
var QUARTER_TABLE = "x_snc_quarterly_ga_quarter";
var NEXT_QUARTER = { q1: "q2", q2: "q3", q3: "q4" };

export function cascadeCarryover(current) {
  var quarterId = current.getValue("quarter");
  if (!quarterId) return;

  var quarterGr = new GlideRecord(QUARTER_TABLE);
  if (!quarterGr.get(quarterId)) return;

  var quarterNumber = quarterGr.getValue("quarter_number");
  var fiscalYear = quarterGr.getValue("fiscal_year");
  var nextQuarterNumber = NEXT_QUARTER[quarterNumber];
  if (!nextQuarterNumber || !fiscalYear) return;

  var nextTracking = new GlideRecord(TRACKING_TABLE);
  nextTracking.addQuery("quarter.fiscal_year", fiscalYear);
  nextTracking.addQuery("quarter.quarter_number", nextQuarterNumber);
  nextTracking.query();
  while (nextTracking.next()) {
    nextTracking.update();
  }
}
