import {
  Table,
  StringColumn,
  ReferenceColumn,
  DecimalColumn,
  DateTimeColumn,
  ChoiceColumn,
  BooleanColumn,
} from "@servicenow/sdk/core";

// Local opportunity table — replaces the previous cross-scope extension of
// sn_opty_mgmt_core_opportunity. All gap-to-plan logic operates on this table.
export const x_snc_quarterly_ga_opportunity = Table({
  name: "x_snc_quarterly_ga_opportunity",
  label: "Opportunity",
  display: "number",
  accessible_from: "public",
  allow_web_service_access: true,
  actions: ["create", "read", "update", "delete"],
  auto_number: {
    prefix: "OPTY",
    number: 1000,
    number_of_digits: 7,
  },
  schema: {
    account: ReferenceColumn({
      label: "Account",
      referenceTable: "x_snc_quarterly_ga_account",
      mandatory: true,
    }),
    short_description: StringColumn({
      label: "Description",
      maxLength: 255,
    }),
    assigned_to: ReferenceColumn({
      label: "Sales Rep",
      referenceTable: "sys_user",
    }),
    nnacv: DecimalColumn({
      label: "NNACV",
      default: 0,
    }),
    estimated_closed_date: DateTimeColumn({
      label: "Estimated Close Date",
    }),
    forecast_category: ChoiceColumn({
      label: "Forecast Category",
      dropdown: "dropdown_with_none",
      choices: {
        closed: { label: "Closed", sequence: 0 },
        commit: { label: "Commit", sequence: 1 },
        expect: { label: "Expect", sequence: 2 },
        submitted: { label: "Submitted", sequence: 3 },
        upside: { label: "Upside", sequence: 4 },
        pipeline: { label: "Pipeline", sequence: 5 },
        omitted: { label: "Omitted", sequence: 6 },
      },
    }),
    is_pillar: BooleanColumn({
      label: "Pillar UPSIDE",
      default: false,
    }),
    risk: ChoiceColumn({
      label: "Risk",
      dropdown: "dropdown_with_none",
      choices: {
        low: { label: "Low", sequence: 0 },
        medium: { label: "Medium", sequence: 1 },
        high: { label: "High", sequence: 2 },
        critical: { label: "Critical", sequence: 3 },
      },
    }),
    quarter: ReferenceColumn({
      label: "Quarter",
      referenceTable: "x_snc_quarterly_ga_quarter",
    }),
    external_opty_id: StringColumn({
      label: "External Opportunity ID",
      maxLength: 100,
    }),
    partner_name: StringColumn({
      label: "Partner Name",
      maxLength: 200,
    }),
    renewal_amount: DecimalColumn({
      label: "Renewal Amount",
      default: 0,
    }),
  },
});
