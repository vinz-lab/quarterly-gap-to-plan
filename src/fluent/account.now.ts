import { Table, StringColumn, BooleanColumn } from "@servicenow/sdk/core";

export const x_snc_quarterly_ga_account = Table({
  name: "x_snc_quarterly_ga_account",
  label: "Account",
  display: "name",
  accessible_from: "public",
  allow_web_service_access: true,
  actions: ["create", "read", "update", "delete"],
  auto_number: {
    prefix: "ACC",
    number: 1000,
    number_of_digits: 7,
  },
  schema: {
    name: StringColumn({
      label: "Name",
      maxLength: 200,
      mandatory: true,
    }),
    active: BooleanColumn({
      label: "Active",
      default: true,
    }),
  },
});
