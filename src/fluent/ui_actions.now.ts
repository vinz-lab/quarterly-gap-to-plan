import { UiAction } from "@servicenow/sdk/core";

// Form button on Quarter Tracking that runs the calculation function
// directly, then saves. Does not rely on the Calculate BR firing.
export const recalculateTrackingMetrics = UiAction({
  $id: Now.ID["recalc_tracking_ui_action"],
  table: "x_snc_quarterly_ga_quarter_tracking",
  name: "Recalculate",
  actionName: "recalculate_tracking_metrics",
  active: true,
  hint: "Re-aggregate BUILD / UPSIDE / carryover from current opportunities.",
  showInsert: false,
  showUpdate: true,
  order: 100,
  form: {
    showButton: true,
    style: "primary",
  },
  workspace: {
    isConfigurableWorkspace: true,
    showFormButtonV2: true,
  },
  script: `var calc = require('x_snc_quarterly_ga/x-snc-quarterly-gap-to-plan-monitor/1.0.0/src/server/calculateQuarterTrackingMetrics.js');
calc.calculateQuarterTrackingMetrics(current);
current.update();
gs.addInfoMessage('Quarter Tracking metrics recalculated.');`,
});

// List banner button on Quarter Tracking — iterates every tracking record
// and runs the calculation function directly on each before saving.
export const recalculateAllTrackingMetrics = UiAction({
  $id: Now.ID["recalc_all_tracking_ui_action"],
  table: "x_snc_quarterly_ga_quarter_tracking",
  name: "Recalculate All",
  actionName: "recalculate_all_tracking_metrics",
  active: true,
  hint: "Re-aggregate BUILD / UPSIDE / carryover for every Quarter Tracking record.",
  order: 100,
  list: {
    showBannerButton: true,
    showButton: true,
    style: "primary",
  },
  workspace: {
    isConfigurableWorkspace: true,
  },
  script: `var calc = require('x_snc_quarterly_ga/x-snc-quarterly-gap-to-plan-monitor/1.0.0/src/server/calculateQuarterTrackingMetrics.js');
var gr = new GlideRecord('x_snc_quarterly_ga_quarter_tracking');
gr.query();
var count = 0;
while (gr.next()) {
  calc.calculateQuarterTrackingMetrics(gr);
  gr.update();
  count++;
}
gs.addInfoMessage('Recalculated ' + count + ' Quarter Tracking record(s).');`,
});
