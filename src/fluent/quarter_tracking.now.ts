import { Table, ReferenceColumn, DecimalColumn, FloatColumn, StringColumn } from "@servicenow/sdk/core";

// NOTE: The derived columns below intentionally have read_only=false at the
// dictionary level. In scoped Glide, setValue() against a read_only=true
// column silently no-ops — that breaks the Calculate BR's writes. Editing
// these fields on the UX form is prevented by form layout / a UI Policy,
// not by the dictionary flag.
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
    }),
    new_target: DecimalColumn({
      label: "New Target",
    }),
    total_pillar_build: DecimalColumn({
      label: "Total Pillar BUILD",
      default: 0,
    }),
    pct_build_to_new_target: FloatColumn({
      label: "% BUILD to New Target",
      scale: 2,
    }),
    build_to_target_gap: DecimalColumn({
      label: "Build to Target Gap",
    }),
    total_pillar_upside: DecimalColumn({
      label: "Total Pillar UPSIDE",
      default: 0,
    }),
    variance_to_gap: DecimalColumn({
      label: "Variance to Gap",
    }),
    target_coverage_pct: FloatColumn({
      label: "% Target Coverage",
      scale: 2,
    }),
    notes: StringColumn({
      label: "Notes",
      maxLength: 4000,
    }),
  },
});
