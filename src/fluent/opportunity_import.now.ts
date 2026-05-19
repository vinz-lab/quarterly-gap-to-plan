import {
  Table,
  Record,
  ImportSet,
  StringColumn,
  EmailColumn,
} from "@servicenow/sdk/core";

// ============================================================
// 1. Staging table — extends sys_import_set_row
// ============================================================
// One column per spreadsheet field. All stored as strings so the staging
// table can hold raw input verbatim; type conversion happens in the
// transform map.
export const x_snc_quarterly_ga_opty_import = Table({
  $id: Now.ID["opty_import_staging_table"],
  name: "x_snc_quarterly_ga_opty_import",
  label: "Opportunity Import Staging",
  extends: "sys_import_set_row",
  schema: {
    u_account: StringColumn({
      label: "Account",
      maxLength: 100,
    }),
    u_opportunity_id: StringColumn({
      label: "Opportunity ID",
      maxLength: 40,
    }),
    u_opportunity_description: StringColumn({
      label: "Opportunity Description",
      maxLength: 255,
    }),
    u_sales_rep: EmailColumn({
      label: "Sales Rep Email",
      maxLength: 100,
    }),
    u_nnacv: StringColumn({
      label: "NNACV",
      maxLength: 40,
    }),
    u_estimated_closed_date: StringColumn({
      label: "Estimated Close Date",
      maxLength: 40,
    }),
    u_forecast_category: StringColumn({
      label: "Forecast Category",
      maxLength: 40,
    }),
    u_is_pillar_upside: StringColumn({
      label: "Pillar UPSIDE",
      maxLength: 10,
    }),
  },
});

// ============================================================
// 2. Data Source — File / CSV / Attachment
// ============================================================
export const opportunityImportDataSource = Record({
  $id: Now.ID["opty_import_data_source"],
  table: "sys_data_source",
  data: {
    name: "Opportunity CSV/Excel Import",
    type: "File",
    format: "CSV",
    file_retrieval_method: "Attachment",
    csv_delimiter: ",",
    header_row: 1,
    import_set_table_name: "x_snc_quarterly_ga_opty_import",
    import_set_table_label: "Opportunity Import Staging",
    batch_size: 500,
    active: true,
  },
});

// ============================================================
// 3. Transform Map — staging → sn_opty_mgmt_core_opportunity
// ============================================================
// Coalesce on `number` makes the load an upsert: re-running the same
// spreadsheet updates existing opportunities; new rows insert.
export const opportunityImportTransform = ImportSet({
  $id: Now.ID["opty_import_transform"],
  name: "Opportunity Import Transform",
  targetTable: "sn_opty_mgmt_core_opportunity" as any,
  sourceTable: "x_snc_quarterly_ga_opty_import",
  active: true,
  runBusinessRules: true,
  enforceMandatoryFields: "onlyMappedFields",
  createOnEmptyCoalesce: true,
  fields: {
    number: {
      sourceField: "u_opportunity_id",
      coalesce: true,
      coalesceCaseSensitive: false,
    },
    account: {
      sourceField: "u_account",
      referenceValueField: "name",
      choiceAction: "reject",
    },
    short_description: "u_opportunity_description",
    assigned_to: {
      sourceField: "u_sales_rep",
      referenceValueField: "email",
      choiceAction: "reject",
    },
    x_snc_quarterly_ga_nnacv: "u_nnacv",
    estimated_closed_date: {
      sourceField: "u_estimated_closed_date",
      dateFormat: "yyyy-MM-dd",
    },
    forecast_category: {
      sourceField: "u_forecast_category",
      referenceValueField: "name",
      choiceAction: "reject",
    },
    x_snc_quarterly_ga_is_pillar: {
      sourceField: "u_is_pillar_upside",
      useSourceScript: true,
      sourceScript: `answer = (function (s) {
  var v = String(s.u_is_pillar_upside || '').trim().toLowerCase();
  return v === 'true' || v === 'yes' || v === '1' || v === 'y';
})(source);`,
    },
  },
});
