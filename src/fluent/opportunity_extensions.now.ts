import {
  Table,
  ReferenceColumn,
  ChoiceColumn,
  BooleanColumn,
  DecimalColumn,
} from "@servicenow/sdk/core";

// Add cross-scope columns to the existing CRM Sales Opportunity table.
// `actions` is required so the deployed dictionary record permits cross-scope
// writes from this scope — without it, update_access is emitted as false and
// the assign-quarter BR is rejected at runtime regardless of caller_access.
export const sn_opty_mgmt_core_opportunity = Table({
  name: "sn_opty_mgmt_core_opportunity" as any,
  actions: ["create", "read", "update", "delete"],
  accessibleFrom: "public",
  allowWebServiceAccess: true,
  schema: {
    x_snc_quarterly_ga_quarter: ReferenceColumn({
      label: "Quarter",
      referenceTable: "x_snc_quarterly_ga_quarter",
    }),
    x_snc_quarterly_ga_risk: ChoiceColumn({
      label: "Risk",
      dropdown: "dropdown_with_none",
      choices: {
        low: { label: "Low", sequence: 0 },
        medium: { label: "Medium", sequence: 1 },
        high: { label: "High", sequence: 2 },
        critical: { label: "Critical", sequence: 3 },
      },
    }),
    x_snc_quarterly_ga_nnacv: DecimalColumn({
      label: "NNACV",
    }),
    x_snc_quarterly_ga_is_pillar: BooleanColumn({
      label: "Pillar UPSIDE",
      default: false,
    }),
  },
});
