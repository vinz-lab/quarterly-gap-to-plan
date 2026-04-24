import { Dashboard } from "@servicenow/sdk/core";
import { gapAnalysisWorkspace } from "./workspace.now";

Dashboard({
  $id: Now.ID["gap_analysis_dashboard"],
  name: "Quarterly Gap Analysis Dashboard",
  tabs: [
    // ==================== TAB 1: OVERVIEW ====================
    {
      $id: Now.ID["overview_tab"],
      name: "Overview",
      widgets: [
        // --- Row 1: Section Heading ---
        {
          $id: Now.ID["overview_heading"],
          component: "heading",
          componentProps: {
            label: "Opportunity Overview",
            level: "1",
            align: "start",
          },
          height: 4,
          width: 48,
          position: { x: 0, y: 0 },
        },

        // --- Row 2: KPI Single Scores (4 across) ---
        // KPI 1: Total Opportunities
        {
          $id: Now.ID["kpi_total_opportunities"],
          component: "single-score",
          componentProps: {
            dataSources: [
              {
                label: "Opportunity",
                sourceType: "table",
                tableOrViewName: "sn_opty_mgmt_core_opportunity",
                filterQuery: "",
                id: "ds_opty_total",
              },
            ],
            headerTitle: "Total Opportunities",
            metrics: [
              {
                dataSource: "ds_opty_total",
                id: "metric_total_opty",
                aggregateFunction: "COUNT",
                axisId: "primary",
              },
            ],
            sortBy: "value",
          },
          height: 12,
          width: 12,
          position: { x: 0, y: 4 },
        },

        // KPI 2: Total Amount (SUM)
        {
          $id: Now.ID["kpi_total_amount"],
          component: "single-score",
          componentProps: {
            dataSources: [
              {
                label: "Opportunity",
                sourceType: "table",
                tableOrViewName: "sn_opty_mgmt_core_opportunity",
                filterQuery: "",
                id: "ds_opty_amount",
              },
            ],
            headerTitle: "Total Pipeline Amount",
            metrics: [
              {
                dataSource: "ds_opty_amount",
                id: "metric_total_amount",
                aggregateFunction: "SUM",
                aggregateField: "deal_size",
                axisId: "primary",
              },
            ],
            sortBy: "value",
          },
          height: 12,
          width: 12,
          position: { x: 12, y: 4 },
        },

        // KPI 3: High Risk Opportunities Count
        {
          $id: Now.ID["kpi_high_risk"],
          component: "single-score",
          componentProps: {
            dataSources: [
              {
                label: "Opportunity",
                sourceType: "table",
                tableOrViewName: "sn_opty_mgmt_core_opportunity",
                filterQuery:
                  "x_snc_quarterly_ga_risk=high^ORx_snc_quarterly_ga_risk=critical",
                id: "ds_opty_high_risk",
              },
            ],
            headerTitle: "High/Critical Risk",
            metrics: [
              {
                dataSource: "ds_opty_high_risk",
                id: "metric_high_risk",
                aggregateFunction: "COUNT",
                axisId: "primary",
              },
            ],
            sortBy: "value",
          },
          height: 12,
          width: 12,
          position: { x: 24, y: 4 },
        },

        // KPI 4: Average Deal Size
        {
          $id: Now.ID["kpi_avg_deal"],
          component: "single-score",
          componentProps: {
            dataSources: [
              {
                label: "Opportunity",
                sourceType: "table",
                tableOrViewName: "sn_opty_mgmt_core_opportunity",
                filterQuery: "",
                id: "ds_opty_avg",
              },
            ],
            headerTitle: "Avg Deal Size",
            metrics: [
              {
                dataSource: "ds_opty_avg",
                id: "metric_avg_deal",
                aggregateFunction: "AVG",
                aggregateField: "deal_size",
                axisId: "primary",
              },
            ],
            sortBy: "value",
          },
          height: 12,
          width: 12,
          position: { x: 36, y: 4 },
        },

        // --- Row 3: Reporting Charts ---
        // Chart 1: Opportunities by Sales Stage
        {
          $id: Now.ID["chart_by_stage"],
          component: "vertical-bar",
          componentProps: {
            dataSources: [
              {
                label: "Opportunity",
                sourceType: "table",
                tableOrViewName: "sn_opty_mgmt_core_opportunity",
                filterQuery: "",
                id: "ds_opty_stage",
              },
            ],
            headerTitle: "Opportunities by Sales Stage",
            metrics: [
              {
                dataSource: "ds_opty_stage",
                id: "metric_by_stage",
                aggregateFunction: "COUNT",
                axisId: "primary",
              },
            ],
            groupBy: [
              {
                groupBy: [
                  {
                    dataSource: "ds_opty_stage",
                    groupByField: "stage",
                  },
                ],
                maxNumberOfGroups: 10,
                showOthers: false,
              },
            ],
            sortBy: "value",
          },
          height: 16,
          width: 16,
          position: { x: 0, y: 16 },
        },

        // Chart 2: Opportunities by Risk Level
        {
          $id: Now.ID["chart_by_risk"],
          component: "donut",
          componentProps: {
            dataSources: [
              {
                label: "Opportunity",
                sourceType: "table",
                tableOrViewName: "sn_opty_mgmt_core_opportunity",
                filterQuery: "",
                id: "ds_opty_risk",
              },
            ],
            headerTitle: "Opportunities by Risk",
            metrics: [
              {
                dataSource: "ds_opty_risk",
                id: "metric_by_risk",
                aggregateFunction: "COUNT",
                axisId: "primary",
              },
            ],
            groupBy: [
              {
                groupBy: [
                  {
                    dataSource: "ds_opty_risk",
                    groupByField: "x_snc_quarterly_ga_risk",
                  },
                ],
                maxNumberOfGroups: 5,
                showOthers: false,
              },
            ],
            sortBy: "value",
          },
          height: 16,
          width: 16,
          position: { x: 16, y: 16 },
        },

        // Chart 3: Opportunities by Forecast Category
        {
          $id: Now.ID["chart_by_forecast"],
          component: "horizontal-bar",
          componentProps: {
            dataSources: [
              {
                label: "Opportunity",
                sourceType: "table",
                tableOrViewName: "sn_opty_mgmt_core_opportunity",
                filterQuery: "",
                id: "ds_opty_forecast",
              },
            ],
            headerTitle: "Opportunities by Forecast Category",
            metrics: [
              {
                dataSource: "ds_opty_forecast",
                id: "metric_by_forecast",
                aggregateFunction: "COUNT",
                axisId: "primary",
              },
            ],
            groupBy: [
              {
                groupBy: [
                  {
                    dataSource: "ds_opty_forecast",
                    groupByField: "forecast_category",
                  },
                ],
                maxNumberOfGroups: 10,
                showOthers: false,
              },
            ],
            sortBy: "value",
          },
          height: 16,
          width: 16,
          position: { x: 32, y: 16 },
        },

        // --- Row 4: Quarter Tracking Metrics ---
        {
          $id: Now.ID["tracking_heading"],
          component: "heading",
          componentProps: {
            label: "Quarter Tracking Metrics",
            level: "2",
            align: "start",
          },
          height: 4,
          width: 48,
          position: { x: 0, y: 32 },
        },

        // Chart 4: Target vs BUILD by Quarter
        {
          $id: Now.ID["chart_target_vs_build"],
          component: "vertical-bar",
          componentProps: {
            dataSources: [
              {
                label: "Quarter Tracking",
                sourceType: "table",
                tableOrViewName: "x_snc_quarterly_ga_quarter_tracking",
                filterQuery: "",
                id: "ds_qtrk_build",
              },
            ],
            headerTitle: "Total Pillar BUILD by Quarter",
            metrics: [
              {
                dataSource: "ds_qtrk_build",
                id: "metric_pillar_build",
                aggregateFunction: "SUM",
                aggregateField: "total_pillar_build",
                axisId: "primary",
              },
            ],
            groupBy: [
              {
                groupBy: [
                  {
                    dataSource: "ds_qtrk_build",
                    groupByField: "quarter",
                  },
                ],
                maxNumberOfGroups: 8,
                showOthers: false,
              },
            ],
            sortBy: "label",
          },
          height: 16,
          width: 24,
          position: { x: 0, y: 36 },
        },

        // Chart 5: Variance to Gap by Quarter
        {
          $id: Now.ID["chart_variance"],
          component: "vertical-bar",
          componentProps: {
            dataSources: [
              {
                label: "Quarter Tracking",
                sourceType: "table",
                tableOrViewName: "x_snc_quarterly_ga_quarter_tracking",
                filterQuery: "",
                id: "ds_qtrk_variance",
              },
            ],
            headerTitle: "Variance to Gap by Quarter",
            metrics: [
              {
                dataSource: "ds_qtrk_variance",
                id: "metric_variance",
                aggregateFunction: "SUM",
                aggregateField: "variance_to_gap",
                axisId: "primary",
              },
            ],
            groupBy: [
              {
                groupBy: [
                  {
                    dataSource: "ds_qtrk_variance",
                    groupByField: "quarter",
                  },
                ],
                maxNumberOfGroups: 8,
                showOthers: false,
              },
            ],
            sortBy: "label",
          },
          height: 16,
          width: 24,
          position: { x: 24, y: 36 },
        },
      ],
    },

    // ==================== TAB 2: TRENDS ====================
    {
      $id: Now.ID["trends_tab"],
      name: "Trends",
      widgets: [
        // --- Trend Heading ---
        {
          $id: Now.ID["trends_heading"],
          component: "heading",
          componentProps: {
            label: "Trend Analysis — Rolling Quarters",
            level: "1",
            align: "start",
          },
          height: 4,
          width: 48,
          position: { x: 0, y: 0 },
        },

        // --- Trend 1: Opportunity Creation Trend (Line chart over time) ---
        {
          $id: Now.ID["trend_opty_creation"],
          component: "line",
          componentProps: {
            dataSources: [
              {
                label: "Opportunity",
                sourceType: "table",
                tableOrViewName: "sn_opty_mgmt_core_opportunity",
                filterQuery: "",
                id: "ds_opty_trend_creation",
              },
            ],
            headerTitle: "Opportunity Creation Trend (Quarterly)",
            metrics: [
              {
                dataSource: "ds_opty_trend_creation",
                id: "metric_opty_creation_trend",
                aggregateFunction: "COUNT",
                axisId: "primary",
              },
            ],
            trendBy: {
              trendByFrequency: "month",
              trendByFields: [
                {
                  field: "sys_created_on",
                  metric: "metric_opty_creation_trend",
                },
              ],
            },
          },
          height: 16,
          width: 24,
          position: { x: 0, y: 4 },
        },

        // --- Trend 2: Deal Size Trend (Amount over time) ---
        {
          $id: Now.ID["trend_deal_size"],
          component: "area",
          componentProps: {
            dataSources: [
              {
                label: "Opportunity",
                sourceType: "table",
                tableOrViewName: "sn_opty_mgmt_core_opportunity",
                filterQuery: "",
                id: "ds_opty_trend_amount",
              },
            ],
            headerTitle: "Pipeline Amount Trend (Monthly)",
            metrics: [
              {
                dataSource: "ds_opty_trend_amount",
                id: "metric_amount_trend",
                aggregateFunction: "SUM",
                aggregateField: "deal_size",
                axisId: "primary",
              },
            ],
            trendBy: {
              trendByFrequency: "month",
              trendByFields: [
                {
                  field: "sys_created_on",
                  metric: "metric_amount_trend",
                },
              ],
            },
          },
          height: 16,
          width: 24,
          position: { x: 24, y: 4 },
        },

        // --- Row 2: Quarter-over-Quarter Comparisons ---
        {
          $id: Now.ID["qoq_heading"],
          component: "heading",
          componentProps: {
            label: "Quarter-over-Quarter Comparison",
            level: "2",
            align: "start",
          },
          height: 4,
          width: 48,
          position: { x: 0, y: 20 },
        },

        // --- Trend 3: Stage Distribution Over Time ---
        {
          $id: Now.ID["trend_stage_distribution"],
          component: "column",
          componentProps: {
            dataSources: [
              {
                label: "Opportunity",
                sourceType: "table",
                tableOrViewName: "sn_opty_mgmt_core_opportunity",
                filterQuery: "",
                id: "ds_opty_stage_trend",
              },
            ],
            headerTitle: "Opportunities by Stage Over Time",
            metrics: [
              {
                dataSource: "ds_opty_stage_trend",
                id: "metric_stage_trend",
                aggregateFunction: "COUNT",
                axisId: "primary",
              },
            ],
            trendBy: {
              trendByFrequency: "month",
              trendByFields: [
                {
                  field: "sys_created_on",
                  metric: "metric_stage_trend",
                },
              ],
            },
            groupBy: [
              {
                groupBy: [
                  {
                    dataSource: "ds_opty_stage_trend",
                    groupByField: "stage",
                  },
                ],
                maxNumberOfGroups: 10,
                showOthers: false,
              },
            ],
          },
          height: 16,
          width: 24,
          position: { x: 0, y: 24 },
        },

        // --- Trend 4: Risk Distribution Over Time ---
        {
          $id: Now.ID["trend_risk_distribution"],
          component: "column",
          componentProps: {
            dataSources: [
              {
                label: "Opportunity",
                sourceType: "table",
                tableOrViewName: "sn_opty_mgmt_core_opportunity",
                filterQuery: "",
                id: "ds_opty_risk_trend",
              },
            ],
            headerTitle: "Risk Distribution Over Time",
            metrics: [
              {
                dataSource: "ds_opty_risk_trend",
                id: "metric_risk_trend",
                aggregateFunction: "COUNT",
                axisId: "primary",
              },
            ],
            trendBy: {
              trendByFrequency: "month",
              trendByFields: [
                {
                  field: "sys_created_on",
                  metric: "metric_risk_trend",
                },
              ],
            },
            groupBy: [
              {
                groupBy: [
                  {
                    dataSource: "ds_opty_risk_trend",
                    groupByField: "x_snc_quarterly_ga_risk",
                  },
                ],
                maxNumberOfGroups: 5,
                showOthers: false,
              },
            ],
          },
          height: 16,
          width: 24,
          position: { x: 24, y: 24 },
        },

        // --- Row 3: Quarter Tracking Trends ---
        {
          $id: Now.ID["tracking_trend_heading"],
          component: "heading",
          componentProps: {
            label: "Quarter Tracking Performance Trends",
            level: "2",
            align: "start",
          },
          height: 4,
          width: 48,
          position: { x: 0, y: 40 },
        },

        // --- Trend 5: BUILD % to Target Trend ---
        {
          $id: Now.ID["trend_build_pct"],
          component: "line",
          componentProps: {
            dataSources: [
              {
                label: "Quarter Tracking",
                sourceType: "table",
                tableOrViewName: "x_snc_quarterly_ga_quarter_tracking",
                filterQuery: "",
                id: "ds_qtrk_pct_trend",
              },
            ],
            headerTitle: "Avg % BUILD to New Target Over Time",
            metrics: [
              {
                dataSource: "ds_qtrk_pct_trend",
                id: "metric_pct_build_trend",
                aggregateFunction: "AVG",
                aggregateField: "pct_build_to_new_target",
                axisId: "primary",
              },
            ],
            trendBy: {
              trendByFrequency: "month",
              trendByFields: [
                {
                  field: "sys_created_on",
                  metric: "metric_pct_build_trend",
                },
              ],
            },
          },
          height: 16,
          width: 24,
          position: { x: 0, y: 44 },
        },

        // --- Trend 6: Variance to Gap Trend ---
        {
          $id: Now.ID["trend_variance_gap"],
          component: "spline",
          componentProps: {
            dataSources: [
              {
                label: "Quarter Tracking",
                sourceType: "table",
                tableOrViewName: "x_snc_quarterly_ga_quarter_tracking",
                filterQuery: "",
                id: "ds_qtrk_variance_trend",
              },
            ],
            headerTitle: "Variance to Gap Trend",
            metrics: [
              {
                dataSource: "ds_qtrk_variance_trend",
                id: "metric_variance_trend",
                aggregateFunction: "SUM",
                aggregateField: "variance_to_gap",
                axisId: "primary",
              },
            ],
            trendBy: {
              trendByFrequency: "month",
              trendByFields: [
                {
                  field: "sys_created_on",
                  metric: "metric_variance_trend",
                },
              ],
            },
          },
          height: 16,
          width: 24,
          position: { x: 24, y: 44 },
        },
      ],
    },
  ],
  visibilities: [
    {
      $id: Now.ID["gap_analysis_dashboard_visibility"],
      experience: gapAnalysisWorkspace,
    },
  ],
  permissions: [],
});
