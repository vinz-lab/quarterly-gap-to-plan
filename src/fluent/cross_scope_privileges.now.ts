import { CrossScopePrivilege } from "@servicenow/sdk/core";

// Required so this scope's Business Rules can read CRM Opportunity rows
// when aggregating BUILD / UPSIDE / Pillar UPSIDE into Quarter Tracking.
export const readOpportunityPrivilege = CrossScopePrivilege({
  $id: Now.ID["xsp_read_opportunity"],
  operation: "read",
  status: "allowed",
  targetType: "sys_db_object",
  targetName: "sn_opty_mgmt_core_opportunity",
  targetScope: "sn_opty_mgmt_core",
});
