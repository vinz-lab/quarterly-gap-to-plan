import { Table, ReferenceColumn, DecimalColumn, FloatColumn, StringColumn } from "@servicenow/sdk/core";

export const x_snc_quarterly_ga_quarter_tracking = Table({
  name: "x_snc_quarterly_ga_quarter_tracking",
  label: "Quarter Tracking",
  display: "quarter",
  accessible_from: "public",
  allow_web_service_access: true,
  actions: ["create", "read", "update", "delete"],
  auto_number: {
    prefix: "QTRK",
    number: 1000,
    number_of_digits: 7,
  },
  schema: {
    quarter: ReferenceColumn({
      label: "Quarter",
      referenceTable: "x_snc_quarterly_ga_quarter",
      mandatory: true,
    }),
    target: DecimalColumn({
      label: "Target",
      mandatory: true,
    }),
    gap_carryover: DecimalColumn({
      label: "Gap Carryover",
      default: 0,
      read_only: true,
    }),
    new_target: DecimalColumn({
      label: "New Target",
      read_only: true,
    }),
    total_pillar_build: DecimalColumn({
      label: "Total Pillar BUILD",
      default: 0,
      read_only: true,
    }),
    pct_build_to_new_target: FloatColumn({
      label: "% BUILD to New Target",
      read_only: true,
      scale: 2,
    }),
    build_to_target_gap: DecimalColumn({
      label: "Build to Target Gap",
      read_only: true,
    }),
    total_pillar_upside: DecimalColumn({
      label: "Total Pillar UPSIDE",
      default: 0,
      read_only: true,
    }),
    total_upside: DecimalColumn({
      label: "Total UPSIDE",
      default: 0,
      read_only: true,
    }),
    variance_to_gap: DecimalColumn({
      label: "Variance to Gap",
      read_only: true,
    }),
    target_coverage_pct: FloatColumn({
      label: "% Target Coverage",
      read_only: true,
      scale: 2,
    }),
    notes: StringColumn({
      label: "Notes",
      maxLength: 4000,
    }),
  },
});
