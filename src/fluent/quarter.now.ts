import { Table, StringColumn, ChoiceColumn, BooleanColumn } from "@servicenow/sdk/core";

export const x_snc_quarterly_ga_quarter = Table({
  name: "x_snc_quarterly_ga_quarter",
  label: "Quarter",
  display: "name",
  accessible_from: "public",
  allow_web_service_access: true,
  actions: ["create", "read", "update", "delete"],
  auto_number: {
    prefix: "QTR",
    number: 1000,
    number_of_digits: 7,
  },
  schema: {
    name: StringColumn({
      label: "Quarter Name",
      maxLength: 100,
      mandatory: true,
    }),
    quarter_number: ChoiceColumn({
      label: "Quarter",
      mandatory: true,
      dropdown: "dropdown_without_none",
      default: "q1",
      choices: {
        q1: { label: "Q1", sequence: 0 },
        q2: { label: "Q2", sequence: 1 },
        q3: { label: "Q3", sequence: 2 },
        q4: { label: "Q4", sequence: 3 },
      },
    }),
    fiscal_year: StringColumn({
      label: "Fiscal Year",
      maxLength: 4,
      mandatory: true,
    }),
    active: BooleanColumn({
      label: "Active",
      default: true,
    }),
  },
});
