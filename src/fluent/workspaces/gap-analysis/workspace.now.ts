import { Workspace, Acl } from "@servicenow/sdk/core";
import { gapAnalysisListConfig } from "./list-menu.now";

// Create the Workspace
export const gapAnalysisWorkspace = Workspace({
  $id: Now.ID["gap_analysis_workspace"],
  title: "Quarterly Gap Analysis",
  path: "gap-analysis",
  tables: [
    "x_snc_quarterly_ga_quarter",
    "x_snc_quarterly_ga_quarter_tracking",
    "x_snc_quarterly_ga_opportunity",
    "x_snc_quarterly_ga_account",
  ],
  listConfig: gapAnalysisListConfig,
});

// Secure the workspace route with ACL
Acl({
  $id: Now.ID["gap_analysis_workspace_acl"],
  localOrExisting: "Existing",
  type: "ux_route",
  operation: "read",
  roles: ["x_snc_quarterly_ga.user", "x_snc_quarterly_ga.admin"],
  name: "now.gap-analysis.*",
});
