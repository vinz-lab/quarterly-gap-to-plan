import { BusinessRule } from "@servicenow/sdk/core";
import { calculateQuarterTrackingMetrics } from "../server/calculateQuarterTrackingMetrics.js";

export const calculateQuarterMetrics = BusinessRule({
  $id: Now.ID[0],
  name: "Calculate Quarter Tracking Metrics",
  table: "x_snc_quarterly_ga_quarter_tracking",
  when: "before",
  action: ["insert", "update"],
  order: 100,
  active: true,
  description:
    "Auto-calculates New Target, % BUILD to New Target, Build to Target Gap, and Variance to Gap based on user-entered values.",
  script: calculateQuarterTrackingMetrics,
});
