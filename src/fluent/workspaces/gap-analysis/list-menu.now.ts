import { UxListMenuConfig, Applicability, Role } from "@servicenow/sdk/core";

// Define roles for the workspace
export const gapAnalysisUserRole = Role({
  $id: Now.ID["gap_analysis_user_role"],
  name: "x_snc_quarterly_ga.user",
  containsRoles: ["canvas_user"],
});

export const gapAnalysisAdminRole = Role({
  $id: Now.ID["gap_analysis_admin_role"],
  name: "x_snc_quarterly_ga.admin",
  containsRoles: ["canvas_admin"],
});

// Define applicability
export const gapAnalysisApplicability = Applicability({
  $id: Now.ID["gap_analysis_applicability"],
  name: "Gap Analysis Users",
  roles: [gapAnalysisUserRole, gapAnalysisAdminRole],
});

// List Menu Configuration
export const gapAnalysisListConfig = UxListMenuConfig({
  $id: Now.ID["gap_analysis_list_config"],
  name: "Gap Analysis List Configuration",
  description: "Navigation for Quarterly Gap Analysis Workspace",
  categories: [
    {
      $id: Now.ID["quarters_category"],
      title: "Quarters",
      order: 10,
      lists: [
        {
          $id: Now.ID["quarters_active_list"],
          title: "Active Quarters",
          order: 10,
          condition: "active=true^EQ",
          table: "x_snc_quarterly_ga_quarter",
          columns: "name,quarter_number,fiscal_year,active",
          applicabilities: [
            {
              $id: Now.ID["quarters_active_applicability"],
              applicability: gapAnalysisApplicability,
            },
          ],
        },
        {
          $id: Now.ID["quarters_all_list"],
          title: "All Quarters",
          order: 20,
          condition: "",
          table: "x_snc_quarterly_ga_quarter",
          columns: "name,quarter_number,fiscal_year,active",
          applicabilities: [
            {
              $id: Now.ID["quarters_all_applicability"],
              applicability: gapAnalysisApplicability,
            },
          ],
        },
      ],
    },
    {
      $id: Now.ID["opportunities_category"],
      title: "Opportunities",
      order: 20,
      lists: [
        {
          $id: Now.ID["opportunities_all_list"],
          title: "All Opportunities",
          order: 10,
          condition: "",
          table: "x_snc_quarterly_ga_opportunity",
          columns:
            "number,external_opty_id,short_description,account,partner_name,assigned_to,forecast_category,nnacv,renewal_amount,is_pillar,risk,quarter,estimated_closed_date",
          applicabilities: [
            {
              $id: Now.ID["opportunities_all_applicability"],
              applicability: gapAnalysisApplicability,
            },
          ],
        },
        {
          $id: Now.ID["opportunities_high_risk_list"],
          title: "High Risk",
          order: 20,
          condition: "risk=high^ORrisk=critical^EQ",
          table: "x_snc_quarterly_ga_opportunity",
          columns:
            "number,external_opty_id,short_description,account,partner_name,assigned_to,forecast_category,nnacv,renewal_amount,is_pillar,risk,quarter,estimated_closed_date",
          applicabilities: [
            {
              $id: Now.ID["opportunities_high_risk_applicability"],
              applicability: gapAnalysisApplicability,
            },
          ],
        },
        {
          $id: Now.ID["opportunities_by_owner_list"],
          title: "Assigned to You",
          order: 30,
          condition:
            "assigned_toDYNAMIC90d1921e5f510100a9ad2572f2b477fe^EQ",
          table: "x_snc_quarterly_ga_opportunity",
          columns:
            "number,external_opty_id,short_description,account,partner_name,assigned_to,forecast_category,nnacv,renewal_amount,is_pillar,risk,quarter,estimated_closed_date",
          applicabilities: [
            {
              $id: Now.ID["opportunities_by_owner_applicability"],
              applicability: gapAnalysisApplicability,
            },
          ],
        },
      ],
    },
    {
      $id: Now.ID["quarter_tracking_category"],
      title: "Quarter Tracking",
      order: 30,
      lists: [
        {
          $id: Now.ID["quarter_tracking_all_list"],
          title: "All Tracking Records",
          order: 10,
          condition: "",
          table: "x_snc_quarterly_ga_quarter_tracking",
          columns:
            "quarter,target,gap_carryover,new_target,total_pillar_build,total_pillar_upside,pct_build_to_new_target,target_coverage_pct,build_to_target_gap,variance_to_gap",
          applicabilities: [
            {
              $id: Now.ID["quarter_tracking_all_applicability"],
              applicability: gapAnalysisApplicability,
            },
          ],
        },
        {
          $id: Now.ID["quarter_tracking_gap_list"],
          title: "Negative Variance",
          order: 20,
          condition: "variance_to_gap<0^EQ",
          table: "x_snc_quarterly_ga_quarter_tracking",
          columns:
            "quarter,target,new_target,total_pillar_build,total_pillar_upside,build_to_target_gap,target_coverage_pct,variance_to_gap",
          applicabilities: [
            {
              $id: Now.ID["quarter_tracking_gap_applicability"],
              applicability: gapAnalysisApplicability,
            },
          ],
        },
      ],
    },
  ],
});
