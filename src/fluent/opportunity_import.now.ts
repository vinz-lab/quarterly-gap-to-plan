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
export const x_snc_quarterly_ga_opty_import = Table({
  $id: Now.ID["opty_import_staging_table"],
  name: "x_snc_quarterly_ga_opty_import",
  label: "Opportunity Import Staging",
  extends: "sys_import_set_row",
  schema: {
    u_account: StringColumn({
      label: "Account",
      maxLength: 200,
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
    u_external_opty_id: StringColumn({
      label: "External Opportunity ID",
      maxLength: 100,
    }),
    u_partner_name: StringColumn({
      label: "Partner Name",
      maxLength: 200,
    }),
    u_renewal_amount: StringColumn({
      label: "Renewal Amount",
      maxLength: 40,
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
// 3. Transform Map — staging → x_snc_quarterly_ga_opportunity
// ============================================================
// Coalesces on `number` for upsert. `account` is resolved against the local
// Account table by name; missing accounts cause row rejection. Forecast
// category is a choice column on our new opportunity table, so the source
// string maps directly to a choice value (closed / commit / expect /
// submitted / upside / pipeline / omitted) — no reference lookup needed.
export const opportunityImportTransform = ImportSet({
  $id: Now.ID["opty_import_transform"],
  name: "Opportunity Import Transform",
  targetTable: "x_snc_quarterly_ga_opportunity",
  sourceTable: "x_snc_quarterly_ga_opty_import",
  active: true,
  runBusinessRules: true,
  enforceMandatoryFields: "onlyMappedFields",
  createOnEmptyCoalesce: true,
  fields: {
    number: {
      sourceField: "u_opportunity_id",
      coalesce: true,
    },
    account: {
      sourceField: "u_account",
      referenceValueField: "name",
    },
    short_description: "u_opportunity_description",
    assigned_to: {
      sourceField: "u_sales_rep",
      referenceValueField: "email",
    },
    nnacv: "u_nnacv",
    estimated_closed_date: {
      sourceField: "u_estimated_closed_date",
      dateFormat: "yyyy-MM-dd",
    },
    // CSV values must match the choice column values exactly (lowercase):
    // closed / commit / expect / submitted / upside / pipeline / omitted
    forecast_category: "u_forecast_category",
    // Platform coerces "true" / "false" (case-insensitive) to boolean.
    is_pillar: "u_is_pillar_upside",
    external_opty_id: "u_external_opty_id",
    partner_name: "u_partner_name",
    renewal_amount: "u_renewal_amount",
  },
});
