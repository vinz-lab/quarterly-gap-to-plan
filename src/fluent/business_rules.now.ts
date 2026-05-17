import { BusinessRule } from "@servicenow/sdk/core";
import { calculateQuarterTrackingMetrics } from "../server/calculateQuarterTrackingMetrics.js";
import { syncQuarterTrackingFromOpportunity } from "../server/syncQuarterTrackingFromOpportunity.js";
import { cascadeCarryover } from "../server/cascadeCarryover.js";

export const calculateQuarterMetrics = BusinessRule({
  $id: Now.ID[0],
  name: "Calculate Quarter Tracking Metrics",
  table: "x_snc_quarterly_ga_quarter_tracking",
  when: "before",
  action: ["insert", "update"],
  order: 100,
  active: true,
  description:
    "Aggregates BUILD/UPSIDE from opportunities, pulls carryover from prior quarter, and computes derived tracking fields.",
  script: calculateQuarterTrackingMetrics,
});

export const syncOptyToTracking = BusinessRule({
  $id: Now.ID["sync_opty_to_tracking_br"],
  name: "Sync Quarter Tracking From Opportunity",
  table: "sn_opty_mgmt_core_opportunity" as any,
  when: "after",
  action: ["insert", "update", "delete"],
  order: 100,
  active: true,
  filterCondition:
    "x_snc_quarterly_ga_quarterCHANGES^ORforecast_categoryCHANGES^ORx_snc_quarterly_ga_nnacvCHANGES^ORx_snc_quarterly_ga_is_pillarCHANGES",
  description:
    "Re-aggregates Quarter Tracking when an opportunity's quarter/NNACV/forecast/pillar flag changes or it is deleted.",
  script: syncQuarterTrackingFromOpportunity,
});

export const cascadeCarryoverBr = BusinessRule({
  $id: Now.ID["cascade_carryover_br"],
  name: "Cascade Gap Carryover To Next Quarter",
  table: "x_snc_quarterly_ga_quarter_tracking",
  when: "after",
  action: ["update"],
  order: 200,
  active: true,
  filterCondition: "build_to_target_gapVALCHANGES",
  description:
    "When this quarter's Build to Target Gap changes, refreshes the next quarter's tracking so its Gap Carryover stays in sync.",
  script: cascadeCarryover,
});
