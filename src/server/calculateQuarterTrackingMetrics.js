import { GlideRecord, GlideAggregate } from "@servicenow/glide";

var OPTY_TABLE = "sn_opty_mgmt_core_opportunity";
var TRACKING_TABLE = "x_snc_quarterly_ga_quarter_tracking";
var QUARTER_TABLE = "x_snc_quarterly_ga_quarter";
var NNACV_FIELD = "x_snc_quarterly_ga_nnacv";
var QUARTER_REF_FIELD = "x_snc_quarterly_ga_quarter";
var PILLAR_FIELD = "x_snc_quarterly_ga_is_pillar";

// Forecast category names per Gap to Plan projection template.
// BUILD = solid pipeline (Closed/Commit/Submit/Expect). UPSIDE = stretch deals.
// Verify these match sn_sales_forecast_category records on the target instance.
var BUILD_CATEGORY_NAMES = "Closed,Commit,Submit,Expect";
var UPSIDE_CATEGORY_NAME = "Upside";

var PRIOR_QUARTER = { q2: "q1", q3: "q2", q4: "q3" };

function sumNnacvForQuarter(quarterId, extraFilter) {
  var ga = new GlideAggregate(OPTY_TABLE);
  ga.addAggregate("SUM", NNACV_FIELD);
  ga.addQuery(QUARTER_REF_FIELD, quarterId);
  if (extraFilter) extraFilter(ga);
  ga.query();
  if (ga.next()) {
    return parseFloat(ga.getAggregate("SUM", NNACV_FIELD)) || 0;
  }
  return 0;
}

export function calculateQuarterTrackingMetrics(current) {
  var quarterId = current.getValue("quarter");

  var pillarBuild = 0;
  var pillarUpside = 0;
  var totalUpside = 0;
  var carryover = 0;

  if (quarterId) {
    pillarBuild = sumNnacvForQuarter(quarterId, function (ga) {
      ga.addQuery("forecast_category.name", "IN", BUILD_CATEGORY_NAMES);
    });
    pillarUpside = sumNnacvForQuarter(quarterId, function (ga) {
      ga.addQuery("forecast_category.name", UPSIDE_CATEGORY_NAME);
      ga.addQuery(PILLAR_FIELD, true);
    });
    totalUpside = sumNnacvForQuarter(quarterId, function (ga) {
      ga.addQuery("forecast_category.name", UPSIDE_CATEGORY_NAME);
    });

    var quarterGr = new GlideRecord(QUARTER_TABLE);
    if (quarterGr.get(quarterId)) {
      var quarterNumber = quarterGr.getValue("quarter_number");
      var fiscalYear = quarterGr.getValue("fiscal_year");
      var priorQuarterNumber = PRIOR_QUARTER[quarterNumber];
      if (priorQuarterNumber && fiscalYear) {
        var priorTracking = new GlideRecord(TRACKING_TABLE);
        priorTracking.addQuery("quarter.fiscal_year", fiscalYear);
        priorTracking.addQuery("quarter.quarter_number", priorQuarterNumber);
        priorTracking.setLimit(1);
        priorTracking.query();
        if (priorTracking.next()) {
          carryover =
            parseFloat(priorTracking.getValue("build_to_target_gap")) || 0;
        }
      }
    }
  }

  current.total_pillar_build = pillarBuild;
  current.total_pillar_upside = pillarUpside;
  current.total_upside = totalUpside;
  current.gap_carryover = carryover;

  var target = parseFloat(current.target) || 0;
  var newTarget = target + carryover;
  current.new_target = newTarget;

  if (newTarget !== 0) {
    current.pct_build_to_new_target = (pillarBuild / newTarget) * 100;
    current.target_coverage_pct = ((pillarBuild + pillarUpside) / newTarget) * 100;
  } else {
    current.pct_build_to_new_target = 0;
    current.target_coverage_pct = 0;
  }

  var buildToTargetGap = newTarget - pillarBuild;
  current.build_to_target_gap = buildToTargetGap;
  current.variance_to_gap = pillarUpside - buildToTargetGap;
}
