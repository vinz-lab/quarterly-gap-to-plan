import { GlideRecord } from "@servicenow/glide";

var TRACKING_TABLE = "x_snc_quarterly_ga_quarter_tracking";
var QUARTER_REF_FIELD = "x_snc_quarterly_ga_quarter";

function retouchTrackingForQuarter(quarterId) {
  if (!quarterId) return;
  var tracking = new GlideRecord(TRACKING_TABLE);
  tracking.addQuery("quarter", quarterId);
  tracking.query();
  while (tracking.next()) {
    tracking.update();
  }
}

export function syncQuarterTrackingFromOpportunity(current, previous) {
  var quarterIds = {};
  if (current) {
    var currentQuarter = current.getValue(QUARTER_REF_FIELD);
    if (currentQuarter) quarterIds[currentQuarter] = true;
  }
  if (previous) {
    var previousQuarter = previous.getValue(QUARTER_REF_FIELD);
    if (previousQuarter) quarterIds[previousQuarter] = true;
  }
  for (var id in quarterIds) {
    retouchTrackingForQuarter(id);
  }
}
