import { gs } from "@servicenow/glide";
import {
  quarterAndYearFromDate,
  findQuarterRecord,
} from "./quarterUtils.js";

var DATE_FIELD = "estimated_closed_date";
var QUARTER_REF_FIELD = "x_snc_quarterly_ga_quarter";
var LOG_SOURCE = "assignOpportunityQuarter";

export function assignOpportunityQuarter(current) {
  var q = quarterAndYearFromDate(current.getValue(DATE_FIELD));
  if (!q) return;
  var qr = findQuarterRecord(q.quarterNumber, q.fiscalYear);
  if (!qr) {
    gs.info(
      LOG_SOURCE +
        ": no Quarter for " +
        q.quarterNumber +
        "/" +
        q.fiscalYear
    );
    return;
  }
  var target = qr.getUniqueValue();
  if (current.getValue(QUARTER_REF_FIELD) !== target) {
    current.setValue(QUARTER_REF_FIELD, target);
  }
}
