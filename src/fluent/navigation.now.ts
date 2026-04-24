import { ApplicationMenu, Record } from "@servicenow/sdk/core";

// Application Menu Category with custom styling
export const gapToPlanCategory = Record({
  $id: Now.ID["gap_to_plan_category"],
  table: "sys_app_category",
  data: {
    name: "gap_to_plan",
    style: "border-color: #4a90d9; background-color: #e8f0fe;",
  },
});

// Top-level Application Menu
export const gapToPlanMenu = ApplicationMenu({
  $id: Now.ID["gap_to_plan_menu"],
  title: "Gap to Plan Monitor",
  hint: "Quarterly Gap to Plan Monitoring",
  description:
    "Monitor the gap to plan across all 4 quarters with opportunity tracking and financial metrics.",
  category: gapToPlanCategory,
  active: true,
  order: 100,
});

// Module: Quarters List
export const quartersListModule = Record({
  $id: Now.ID["quarters_list_module"],
  table: "sys_app_module",
  data: {
    title: "Quarters",
    application: gapToPlanMenu,
    link_type: "LIST",
    name: "x_snc_quarterly_ga_quarter",
    hint: "View all fiscal quarters",
    active: true,
    order: 100,
  },
});

// Module: Create New Quarter
export const createQuarterModule = Record({
  $id: Now.ID["create_quarter_module"],
  table: "sys_app_module",
  data: {
    title: "Create New Quarter",
    application: gapToPlanMenu,
    link_type: "NEW",
    name: "x_snc_quarterly_ga_quarter",
    hint: "Create a new fiscal quarter",
    active: true,
    order: 200,
  },
});

// Module: Separator - Opportunities
export const opportunitiesSeparator = Record({
  $id: Now.ID["opportunities_separator"],
  table: "sys_app_module",
  data: {
    title: "Opportunities",
    application: gapToPlanMenu,
    link_type: "SEPARATOR",
    active: true,
    order: 300,
  },
});

// Module: All Opportunities (CRM Opportunity table)
export const opportunitiesListModule = Record({
  $id: Now.ID["opportunities_list_module"],
  table: "sys_app_module",
  data: {
    title: "All Opportunities",
    application: gapToPlanMenu,
    link_type: "LIST",
    name: "sn_opty_mgmt_core_opportunity",
    hint: "View all CRM opportunities",
    active: true,
    order: 400,
  },
});

// Module: Separator - Tracking
export const trackingSeparator = Record({
  $id: Now.ID["tracking_separator"],
  table: "sys_app_module",
  data: {
    title: "Quarter Tracking",
    application: gapToPlanMenu,
    link_type: "SEPARATOR",
    active: true,
    order: 500,
  },
});

// Module: Quarter Tracking List
export const quarterTrackingListModule = Record({
  $id: Now.ID["quarter_tracking_list_module"],
  table: "sys_app_module",
  data: {
    title: "All Quarter Tracking",
    application: gapToPlanMenu,
    link_type: "LIST",
    name: "x_snc_quarterly_ga_quarter_tracking",
    hint: "View all quarterly tracking metrics",
    active: true,
    order: 600,
  },
});

// Module: Create New Quarter Tracking
export const createQuarterTrackingModule = Record({
  $id: Now.ID["create_quarter_tracking_module"],
  table: "sys_app_module",
  data: {
    title: "Create New Tracking",
    application: gapToPlanMenu,
    link_type: "NEW",
    name: "x_snc_quarterly_ga_quarter_tracking",
    hint: "Create a new quarter tracking record",
    active: true,
    order: 700,
  },
});
