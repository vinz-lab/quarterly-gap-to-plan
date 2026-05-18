import { GlideRecord, GlideDateTime } from "@servicenow/glide";

var QUARTER_TABLE = "x_snc_quarterly_ga_quarter";

var QUARTER_RANGES = {
  q1: { startMonth: 1, startDay: 1, endMonth: 3, endDay: 31 },
  q2: { startMonth: 4, startDay: 1, endMonth: 6, endDay: 30 },
  q3: { startMonth: 7, startDay: 1, endMonth: 9, endDay: 30 },
  q4: { startMonth: 10, startDay: 1, endMonth: 12, endDay: 31 },
};

function pad2(n) {
  return n < 10 ? "0" + n : "" + n;
}

export function quarterAndYearFromDate(dateValue) {
  if (!dateValue) return null;
  var gdt = new GlideDateTime(dateValue);
  var month = gdt.getMonthLocalTime(); // 1-12
  var year = "" + gdt.getYearLocalTime();
  var qn = "q" + (Math.floor((month - 1) / 3) + 1);
  return { quarterNumber: qn, fiscalYear: year };
}

export function quarterDateRange(quarterNumber, fiscalYear) {
  if (!quarterNumber || !fiscalYear) return null;
  var key = String(quarterNumber).toLowerCase();
  var r = QUARTER_RANGES[key];
  if (!r) return null;
  return {
    start: fiscalYear + "-" + pad2(r.startMonth) + "-" + pad2(r.startDay),
    end: fiscalYear + "-" + pad2(r.endMonth) + "-" + pad2(r.endDay),
  };
}

export function findQuarterRecord(quarterNumber, fiscalYear) {
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
