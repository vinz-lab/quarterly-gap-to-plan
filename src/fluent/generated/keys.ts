import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    '0': {
                        table: 'sys_script'
                        id: '0eb9b20ff05d4a959da699dafd4c638e'
                    }
                    assign_opty_quarter_br: {
                        table: 'sys_script'
                        id: '79789296c61d4c0393b7322309075b79'
                        deleted: false
                    }
                    bom_json: {
                        table: 'sys_module'
                        id: '7a51219fbae5420a96d37d716cc64cd4'
                    }
                    cascade_carryover_br: {
                        table: 'sys_script'
                        id: '6a5207820df0419c9b800e074e588f2a'
                        deleted: true
                    }
                    chart_by_forecast: {
                        table: 'par_dashboard_widget'
                        id: 'bf54194fce094720b81596bd1b975b0a'
                    }
                    chart_by_risk: {
                        table: 'par_dashboard_widget'
                        id: '97a5bf7e33fa4f488f34bc2e8a3a28cb'
                    }
                    chart_by_stage: {
                        table: 'par_dashboard_widget'
                        id: '7959f06658aa49e99be52220a910f8a6'
                    }
                    chart_remaining_pillars: {
                        table: 'par_dashboard_widget'
                        id: '05c3f3086ff34ea78b1c0c58c19598a7'
                        deleted: true
                    }
                    chart_target_vs_build: {
                        table: 'par_dashboard_widget'
                        id: '3993bbd99a724152bde9d68849f6ed60'
                        deleted: true
                    }
                    chart_variance: {
                        table: 'par_dashboard_widget'
                        id: '98e81edfebbd4edaaeca2889f2d85bc9'
                        deleted: true
                    }
                    create_quarter_module: {
                        table: 'sys_app_module'
                        id: '390e55a6a218422e91b7a621fe1663f1'
                    }
                    create_quarter_tracking_module: {
                        table: 'sys_app_module'
                        id: 'ee495c0c4a5b4bdb83bb27aebd64add4'
                    }
                    gap_analysis_applicability: {
                        table: 'sys_ux_applicability'
                        id: 'fbcac8cd6ea6400aa779b893af350652'
                    }
                    gap_analysis_dashboard: {
                        table: 'par_dashboard'
                        id: '86093c5001d6447fb18ec7e45ae88dc0'
                    }
                    gap_analysis_list_config: {
                        table: 'sys_ux_list_menu_config'
                        id: 'e11fe3e378764476996ed4fc8c7e92b0'
                    }
                    gap_analysis_workspace: {
                        table: 'sys_ux_page_registry'
                        id: '3ae70ef6c349422e93a27407b872b4d2'
                    }
                    gap_analysis_workspace_acl: {
                        table: 'sys_security_acl'
                        id: '205ad7631ec943488ffc9f52ec5dbcfe'
                    }
                    gap_analysis_workspace_sys_ux_app_config_workspace: {
                        table: 'sys_ux_app_config'
                        id: 'd06a05604f584249a341c81f1502ca20'
                    }
                    gap_analysis_workspace_sys_ux_app_route_home: {
                        table: 'sys_ux_app_route'
                        id: 'd7370855dcc844f69a21051baeaa9eb1'
                    }
                    gap_analysis_workspace_sys_ux_app_route_list: {
                        table: 'sys_ux_app_route'
                        id: '2afdd709af9f47edbe6145061e704a38'
                    }
                    gap_analysis_workspace_sys_ux_app_route_record: {
                        table: 'sys_ux_app_route'
                        id: '32ab1cc2ad494d00bf7eb294712b4739'
                    }
                    'gap_analysis_workspace_sys_ux_app_route_simple-list': {
                        table: 'sys_ux_app_route'
                        id: '6f87377a16a64fa0bb803a2ee08a35de'
                    }
                    gap_analysis_workspace_sys_ux_macroponent_record: {
                        table: 'sys_ux_macroponent'
                        id: 'af0794adbb334289bcbfaa6cc35e0d28'
                    }
                    gap_analysis_workspace_sys_ux_page_property_chrome_footer: {
                        table: 'sys_ux_page_property'
                        id: '664b69bf7b1b44c8a33b9e6f0d00ca6d'
                    }
                    gap_analysis_workspace_sys_ux_page_property_chrome_header: {
                        table: 'sys_ux_page_property'
                        id: 'f6aac7b0cc0740b082fe70c600a72121'
                    }
                    gap_analysis_workspace_sys_ux_page_property_chrome_tab: {
                        table: 'sys_ux_page_property'
                        id: '40845d7459ec4802ba0bf1223e321126'
                    }
                    gap_analysis_workspace_sys_ux_page_property_chrome_toolbar: {
                        table: 'sys_ux_page_property'
                        id: 'b11c28a2ae294a79b4c7d90b899d794e'
                    }
                    gap_analysis_workspace_sys_ux_page_property_listConfigId: {
                        table: 'sys_ux_page_property'
                        id: 'a7928b654b7d4c2d836adabb40400b64'
                    }
                    gap_analysis_workspace_sys_ux_page_property_view: {
                        table: 'sys_ux_page_property'
                        id: 'e4036142a9a24268bc3c246ab6dfb5b1'
                    }
                    gap_analysis_workspace_sys_ux_page_property_wbApplicabilityConfigId: {
                        table: 'sys_ux_page_property'
                        id: 'b854b8c79b6347b38bd37fadbef77f36'
                    }
                    gap_analysis_workspace_sys_ux_registry_m2m_category_unifiedNav: {
                        table: 'sys_ux_registry_m2m_category'
                        id: '584ae09637cb494b841c25b36a324a0b'
                    }
                    gap_analysis_workspace_sys_ux_screen_home: {
                        table: 'sys_ux_screen'
                        id: 'faf705be414f48ecba25a7310e45abcb'
                    }
                    gap_analysis_workspace_sys_ux_screen_list: {
                        table: 'sys_ux_screen'
                        id: '69c57e4c830649c992edfa8594112eed'
                    }
                    gap_analysis_workspace_sys_ux_screen_record: {
                        table: 'sys_ux_screen'
                        id: 'b5f9f159670941e696b78b9a61fc1351'
                    }
                    'gap_analysis_workspace_sys_ux_screen_simple-list': {
                        table: 'sys_ux_screen'
                        id: '246a2533fa394d7a8a9ab9db2e83a97e'
                    }
                    gap_analysis_workspace_sys_ux_screen_type_home: {
                        table: 'sys_ux_screen_type'
                        id: '3aa48cdb17e64290911f5dca4408bb88'
                    }
                    gap_analysis_workspace_sys_ux_screen_type_list: {
                        table: 'sys_ux_screen_type'
                        id: '526df10b55264e169cfc095633ee2a2b'
                    }
                    gap_analysis_workspace_sys_ux_screen_type_record: {
                        table: 'sys_ux_screen_type'
                        id: '1d68cc2957f44b618f8bcf8f3c997a90'
                    }
                    'gap_analysis_workspace_sys_ux_screen_type_simple-list': {
                        table: 'sys_ux_screen_type'
                        id: 'b3cc0b16a3684ec3a1a9a677d10c4667'
                    }
                    gap_to_plan_category: {
                        table: 'sys_app_category'
                        id: '60f858f93e144082bd7d86b923aef214'
                    }
                    gap_to_plan_menu: {
                        table: 'sys_app_application'
                        id: '9cc4a2d02bd74f598e78cd7dc50931de'
                    }
                    kpi_avg_deal: {
                        table: 'par_dashboard_widget'
                        id: '0311a1b46d1b42e783afdee6bb7a21d8'
                    }
                    kpi_current_pct_build: {
                        table: 'par_dashboard_widget'
                        id: 'bcfd386ff0e34518a2ce8050471cbea7'
                    }
                    kpi_current_pillar_build: {
                        table: 'par_dashboard_widget'
                        id: '1d4e07a928254013923b6c393ebeacca'
                    }
                    kpi_current_pillar_upside: {
                        table: 'par_dashboard_widget'
                        id: 'f06b3309dd24490c88da163fcf7a27c7'
                    }
                    kpi_current_target: {
                        table: 'par_dashboard_widget'
                        id: 'a33ad72bc59344e1a3782980c07af232'
                    }
                    kpi_current_target_coverage: {
                        table: 'par_dashboard_widget'
                        id: 'ad1599ba4ee94a38bb8003f17ae87427'
                    }
                    kpi_current_total_upside: {
                        table: 'par_dashboard_widget'
                        id: 'c901e0c623a5477fa4c2da6a20853e70'
                        deleted: true
                    }
                    kpi_high_risk: {
                        table: 'par_dashboard_widget'
                        id: '66be5acd76c14b45b02fec22f9d3db63'
                    }
                    kpi_remaining_pillar_build: {
                        table: 'par_dashboard_widget'
                        id: '024cf43b2e0a46b095b886d9c9a30184'
                        deleted: true
                    }
                    kpi_remaining_pillar_upside: {
                        table: 'par_dashboard_widget'
                        id: '020e794834fe4fed99fc1cca3fa70d8a'
                        deleted: true
                    }
                    kpi_total_amount: {
                        table: 'par_dashboard_widget'
                        id: '1fccf2c19db24ca78988d39e55e7b6b4'
                    }
                    kpi_total_opportunities: {
                        table: 'par_dashboard_widget'
                        id: '0280826ea0f2449296b9efb04218d766'
                    }
                    maintain_current_fy_flag_br: {
                        table: 'sys_script'
                        id: '5b8a63afee7446588ad3d2532eff3a12'
                        deleted: true
                    }
                    opportunities_all_applicability: {
                        table: 'sys_ux_applicability_m2m_list'
                        id: 'f6fc3c7a3caf400d810651058fb61515'
                    }
                    opportunities_all_list: {
                        table: 'sys_ux_list'
                        id: 'd9af9f0582e940ff971b237b89fe33b2'
                    }
                    opportunities_by_owner_applicability: {
                        table: 'sys_ux_applicability_m2m_list'
                        id: '15a9d5892de847de8d60920034052d5f'
                    }
                    opportunities_by_owner_list: {
                        table: 'sys_ux_list'
                        id: '564a971fe3fa4373a9257ea7dd1163ce'
                    }
                    opportunities_category: {
                        table: 'sys_ux_list_category'
                        id: '9993aacab48f45d8b5b57833391f810d'
                    }
                    opportunities_high_risk_applicability: {
                        table: 'sys_ux_applicability_m2m_list'
                        id: 'da1657b05d604256b4dc5d411b3ae6f1'
                    }
                    opportunities_high_risk_list: {
                        table: 'sys_ux_list'
                        id: '4f84d268697749dea0e3560036efc669'
                    }
                    opportunities_list_module: {
                        table: 'sys_app_module'
                        id: '0ac54c5b04fe476695a8c0ea1d6d01df'
                    }
                    opportunities_separator: {
                        table: 'sys_app_module'
                        id: 'd1a1f3fc64f14ee290ebc94a6c6b0b7e'
                    }
                    overview_heading: {
                        table: 'par_dashboard_widget'
                        id: '0de912c0392446eda370e628a8b29446'
                    }
                    overview_tab: {
                        table: 'par_dashboard_tab'
                        id: '20be4ddaddee4d38b6935fec47c4a2a4'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: '3c32f83dd09d42f1b2b40fccc40a0209'
                    }
                    qoq_heading: {
                        table: 'par_dashboard_widget'
                        id: '859901e6ad3a46d9b96d3b9b16719b6e'
                    }
                    quarter_tracking_all_applicability: {
                        table: 'sys_ux_applicability_m2m_list'
                        id: '5db18906bee744518fcb11e26ec83d6a'
                    }
                    quarter_tracking_all_list: {
                        table: 'sys_ux_list'
                        id: '4ccb9b4c4c9c431cb3b08c74bb52c5a9'
                    }
                    quarter_tracking_category: {
                        table: 'sys_ux_list_category'
                        id: 'bb7598e828574f7e886084bab7710f05'
                    }
                    quarter_tracking_gap_applicability: {
                        table: 'sys_ux_applicability_m2m_list'
                        id: '32a156bf926a4e06a064f61bf4205745'
                    }
                    quarter_tracking_gap_list: {
                        table: 'sys_ux_list'
                        id: 'fa4840fb03174803b23b8f172204a9f9'
                    }
                    quarter_tracking_list_module: {
                        table: 'sys_app_module'
                        id: '90bbc3f8262a4fddae6f32af311ef0b2'
                    }
                    quarters_active_applicability: {
                        table: 'sys_ux_applicability_m2m_list'
                        id: '21788e3ea8a745508d2b349f4463273f'
                    }
                    quarters_active_list: {
                        table: 'sys_ux_list'
                        id: '85cd835184ff4ec28609773857225581'
                    }
                    quarters_all_applicability: {
                        table: 'sys_ux_applicability_m2m_list'
                        id: '3ad9871cce2f460fba163362697754ef'
                    }
                    quarters_all_list: {
                        table: 'sys_ux_list'
                        id: '725907ce9df943b5a6a32a273c03e42a'
                    }
                    quarters_category: {
                        table: 'sys_ux_list_category'
                        id: '8298c0b78f234154850a1ec9435ed3a1'
                    }
                    quarters_list_module: {
                        table: 'sys_app_module'
                        id: '2a40ec233fed41679fcf83cf9866cd1d'
                    }
                    recalc_all_tracking_ui_action: {
                        table: 'sys_ui_action'
                        id: '2efcd058505948ce8e49f8c363648ac3'
                    }
                    recalc_tracking_ui_action: {
                        table: 'sys_ui_action'
                        id: 'e35ad157199747f294c9762790adc293'
                    }
                    src_server_assignOpportunityQuarter_js: {
                        table: 'sys_module'
                        id: '1cfc03aa6ac941d2934352e7e36b62f8'
                        deleted: false
                    }
                    src_server_calculateQuarterTrackingMetrics_js: {
                        table: 'sys_module'
                        id: 'dc82ebc4968e4f869ac0d6f6ed7c2683'
                    }
                    src_server_cascadeCarryover_js: {
                        table: 'sys_module'
                        id: 'c37c1ca89c334a999908c1ebd076aefd'
                    }
                    src_server_maintainCurrentFyFlag_js: {
                        table: 'sys_module'
                        id: 'fdb3fdf233ee46f2a34498fc92c113f3'
                    }
                    src_server_quarterUtils_js: {
                        table: 'sys_module'
                        id: '74069a9c6ccd4952b519e17cbc27fbdf'
                    }
                    src_server_syncQuarterTrackingFromOpportunity_js: {
                        table: 'sys_module'
                        id: 'e0c3dbf940454993ba966a1d3b63c18b'
                    }
                    sync_opty_to_tracking_br: {
                        table: 'sys_script'
                        id: '90c16cda16a2459d92ed99c55920c6d9'
                    }
                    tracking_heading: {
                        table: 'par_dashboard_widget'
                        id: 'cb45cef1c26c4bbb9ed8835729d1d041'
                    }
                    tracking_separator: {
                        table: 'sys_app_module'
                        id: '6481e9d308f342318f37b3539dedab12'
                    }
                    tracking_trend_heading: {
                        table: 'par_dashboard_widget'
                        id: '3956c483f00d4b2e90a712e414d4cb03'
                    }
                    trend_build_pct: {
                        table: 'par_dashboard_widget'
                        id: 'e8bf44930cf94c9c88b025e0bfc7da3d'
                    }
                    trend_deal_size: {
                        table: 'par_dashboard_widget'
                        id: '92b2e4de5ef34202ae9325688c62f2cf'
                    }
                    trend_opty_creation: {
                        table: 'par_dashboard_widget'
                        id: 'c76584c1f91f4b2898a11604fdc556e6'
                    }
                    trend_risk_distribution: {
                        table: 'par_dashboard_widget'
                        id: 'c0dc747367394d7e970a2967dc67be99'
                    }
                    trend_stage_distribution: {
                        table: 'par_dashboard_widget'
                        id: '0a558a9c829f4be285993857569632c9'
                    }
                    trend_variance_gap: {
                        table: 'par_dashboard_widget'
                        id: '8b6e7af4fd9f451bb22ff708e15a20d2'
                    }
                    trends_heading: {
                        table: 'par_dashboard_widget'
                        id: '58bf797f84ab43f5a7cafea208d183f6'
                    }
                    trends_tab: {
                        table: 'par_dashboard_tab'
                        id: '81699b11a69b4046adba7b612d97f511'
                    }
                    xsp_read_opportunity: {
                        table: 'sys_scope_privilege'
                        id: '9e9c26c0170f4d0ea542c6da5c1b54a8'
                    }
                    xsp_write_opportunity: {
                        table: 'sys_scope_privilege'
                        id: '515d98486185465fb630443fd8303f36'
                        deleted: false
                    }
                }
                composite: [
                    {
                        table: 'sys_user_role'
                        id: '0634bc3b830e47c7b96df2069744f066'
                        key: {
                            name: 'x_snc_quarterly_ga.user'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0b8618f4af0644b88a84c1226bdee3e8'
                        key: {
                            name: 'x_snc_quarterly_ga_quarter_tracking'
                            element: 'total_pillar_build'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '0f322f5a4f9843cd82df8d9620461406'
                        key: {
                            name: 'sn_opty_mgmt_core_opportunity'
                            element: 'x_snc_quarterly_ga_risk'
                            value: 'critical'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '0f39e31944e4403ca123b4f2f1a32ab6'
                        key: {
                            sys_security_acl: '205ad7631ec943488ffc9f52ec5dbcfe'
                            sys_user_role: {
                                id: 'c4cbd92939a947de8357689ec9eeb1b2'
                                key: {
                                    name: 'x_snc_quarterly_ga.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0f9f27a1741b42fc830d2dd106b40432'
                        key: {
                            name: 'sn_opty_mgmt_core_opportunity'
                            element: 'x_snc_quarterly_ga_nnacv'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '167d00056dc844e48273b15d67ca3f53'
                        key: {
                            name: 'x_snc_quarterly_ga_quarter_tracking'
                            element: 'new_target'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '23dfd6e2653c495e8854e505d21e21e4'
                        key: {
                            name: 'x_snc_quarterly_ga_quarter_tracking'
                            element: 'gap_carryover'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '242fbd3f9bf44f37bf1065441d79ff77'
                        key: {
                            name: 'x_snc_quarterly_ga_quarter'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '25adf63aed844a168a575d2db76154d1'
                        key: {
                            name: 'x_snc_quarterly_ga_quarter_tracking'
                            element: 'variance_to_gap'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '292187d73995476b9792fbf2ec8a5141'
                        key: {
                            name: 'x_snc_quarterly_ga_quarter'
                            element: 'quarter_number'
                            value: 'q4'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '31f95580d3dc418a848ba21f1fee6d45'
                        key: {
                            name: 'x_snc_quarterly_ga_quarter'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '34afd06062fb4095ba962c0d3111ebf7'
                        key: {
                            name: 'sn_opty_mgmt_core_opportunity'
                            element: 'x_snc_quarterly_ga_risk'
                            value: 'low'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '41afe8e9674b4694a1785957973a1204'
                        key: {
                            name: 'x_snc_quarterly_ga_quarter_tracking'
                            element: 'quarter'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '4300f19f21e44feb97a5923316c942d9'
                        key: {
                            name: 'x_snc_quarterly_ga_quarter'
                            element: 'quarter_number'
                            value: 'q1'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '47c204b181d1451a982aac1d269e973e'
                        key: {
                            name: 'sn_opty_mgmt_core_opportunity'
                            element: 'x_snc_quarterly_ga_risk'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '47d64cc10d384fd380c27b128ed86252'
                        key: {
                            name: 'x_snc_quarterly_ga_quarter'
                            element: 'fiscal_year'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4d5b54add7084f6085d85967e4cf751f'
                        key: {
                            name: 'x_snc_quarterly_ga_quarter_tracking'
                            element: 'new_target'
                        }
                    },
                    {
                        table: 'par_dashboard_canvas'
                        id: '4d96cd5938c744f38c92e23c9cba5123'
                        key: {
                            dashboard: '86093c5001d6447fb18ec7e45ae88dc0'
                            dashboard_tab: '20be4ddaddee4d38b6935fec47c4a2a4'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '533b3b69e6ec496bac8f7e341a1e69dc'
                        key: {
                            name: 'x_snc_quarterly_ga_quarter_tracking'
                            element: 'notes'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '588ac6aa79444d3184e7b8167257a5da'
                        key: {
                            name: 'x_snc_quarterly_ga_quarter_tracking'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'par_dashboard_visibility'
                        id: '5999f00feac345889096384e8d3bbf9f'
                        key: {
                            dashboard: '86093c5001d6447fb18ec7e45ae88dc0'
                            experience: '3ae70ef6c349422e93a27407b872b4d2'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '5abadacfb6a342ebab51ae0bf11fdb43'
                        key: {
                            name: 'x_snc_quarterly_ga_quarter_tracking'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '5d22e4c1420347e182054511b47a9481'
                        key: {
                            name: 'x_snc_quarterly_ga_quarter'
                            element: 'active'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5ed3c4d3a1414a87af96714476cfb4cf'
                        key: {
                            name: 'sn_opty_mgmt_core_opportunity'
                            element: 'x_snc_quarterly_ga_risk'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '60da643aff644168ac4614f8a01dfe9b'
                        key: {
                            name: 'x_snc_quarterly_ga_quarter'
                            element: 'quarter_number'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '61ceaa91adb0483da9f5fd0e92bbc85a'
                        key: {
                            name: 'sn_opty_mgmt_core_opportunity'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '63bc470a0fb742ff9d5dad042b024f26'
                        deleted: true
                        key: {
                            name: 'sn_opty_mgmt_core_opportunity'
                            element: 'x_snc_quarterly_ga_is_pillar_build'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_user_role_contains'
                        id: '65ee5a5ba1bf466490e8a17796df4729'
                        key: {
                            role: {
                                id: '0634bc3b830e47c7b96df2069744f066'
                                key: {
                                    name: 'x_snc_quarterly_ga.user'
                                }
                            }
                            contains: {
                                id: 'aff1df3b9370443eba3590d58700d6f0'
                                key: {
                                    name: 'canvas_user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '67195322320e45dc90526169fe2cc290'
                        key: {
                            name: 'sn_opty_mgmt_core_opportunity'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '69857a35b2714a32acd958c1afb943d2'
                        key: {
                            name: 'sn_opty_mgmt_core_opportunity'
                            element: 'x_snc_quarterly_ga_quarter'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '6a0b5073d1ed4b61ba86d87107027dc5'
                        key: {
                            name: 'sn_opty_mgmt_core_opportunity'
                            element: 'x_snc_quarterly_ga_quarter'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6aa5de8307a9497f8e9d24722dd10b8b'
                        deleted: true
                        key: {
                            name: 'x_snc_quarterly_ga_quarter_tracking'
                            element: 'total_upside'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6d17697b48ab4889be6c1b6427894433'
                        key: {
                            name: 'x_snc_quarterly_ga_quarter'
                            element: 'name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6f0e02e3904b4acf9638e4ef3a5f59ac'
                        key: {
                            name: 'x_snc_quarterly_ga_quarter'
                            element: 'is_current_fy'
                            language: 'en'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '702a7a27036b4339bcddc2946ad2834f'
                        key: {
                            name: 'sn_opty_mgmt_core_opportunity'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '74f8cc57eba748e69210424ac337b1b4'
                        key: {
                            name: 'sn_opty_mgmt_core_opportunity'
                            element: 'x_snc_quarterly_ga_is_pillar'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '755b2ddcc65d4e988a3cc9f7d7dd30bf'
                        key: {
                            name: 'x_snc_quarterly_ga_quarter'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '791ac21522ee4f8590dc06ae418253ea'
                        key: {
                            name: 'sn_opty_mgmt_core_opportunity'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7abb350900314996bfbc63dc55b7ee63'
                        key: {
                            name: 'x_snc_quarterly_ga_quarter'
                            element: 'active'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '81e80adb58534aed80b5843a832f4fd7'
                        key: {
                            name: 'x_snc_quarterly_ga_quarter_tracking'
                            element: 'target_coverage_pct'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_number'
                        id: '8f7343bb39c3423c9c38e580d791f6cc'
                        key: {
                            category: 'x_snc_quarterly_ga_quarter_tracking'
                            prefix: 'QTRK'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '91ada506dde7433f90a494b4eb7d5c48'
                        key: {
                            name: 'x_snc_quarterly_ga_quarter'
                            element: 'quarter_number'
                            value: 'q3'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '9225c3f2878040dcb32bf0399d98c626'
                        key: {
                            name: 'x_snc_quarterly_ga_quarter_tracking'
                            element: 'pct_build_to_new_target'
                        }
                    },
                    {
                        table: 'sys_number'
                        id: '965323831ade45c1aeeb4fa4287abef7'
                        key: {
                            category: 'x_snc_quarterly_ga_quarter'
                            prefix: 'QTR'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '987b701b758343d997ad7b2cedd287fb'
                        key: {
                            name: 'x_snc_quarterly_ga_quarter'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '993202e9aba845d5b362b6fb5a9a974a'
                        key: {
                            name: 'x_snc_quarterly_ga_quarter_tracking'
                            element: 'gap_carryover'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9a0af7d79f424789951c3603126b9e6f'
                        key: {
                            name: 'x_snc_quarterly_ga_quarter'
                            element: 'quarter_number'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9a0f1b5fd93b42718cc434f12e752cd8'
                        key: {
                            name: 'x_snc_quarterly_ga_quarter_tracking'
                            element: 'target'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '9d6de448bb4f4b8bb3bb057a068ba7bf'
                        key: {
                            name: 'sn_opty_mgmt_core_opportunity'
                            element: 'x_snc_quarterly_ga_risk'
                            value: 'medium'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a206fd59864e4b97aec4122a0b048897'
                        key: {
                            name: 'x_snc_quarterly_ga_quarter'
                            element: 'fiscal_year'
                        }
                    },
                    {
                        table: 'sys_user_role_contains'
                        id: 'afcc830645754739ad570cd10b7f002d'
                        key: {
                            role: {
                                id: 'c4cbd92939a947de8357689ec9eeb1b2'
                                key: {
                                    name: 'x_snc_quarterly_ga.admin'
                                }
                            }
                            contains: {
                                id: '2af6cb1240a64a448a6a14690267c840'
                                key: {
                                    name: 'canvas_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'b15cab0b7beb42389de5ac4b4a141041'
                        key: {
                            name: 'x_snc_quarterly_ga_quarter_tracking'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b33ca2c7015e45a79074a6d5f515c09d'
                        key: {
                            name: 'x_snc_quarterly_ga_quarter_tracking'
                            element: 'total_pillar_build'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'b4634d30c6d64578b194ffa98111b0f2'
                        key: {
                            name: 'x_snc_quarterly_ga_quarter'
                            element: 'quarter_number'
                            value: 'q2'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b4a41571515c498ca00b6a1624967529'
                        key: {
                            name: 'x_snc_quarterly_ga_quarter_tracking'
                            element: 'variance_to_gap'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b5a169749f504d7392857626ce7aaf42'
                        key: {
                            name: 'x_snc_quarterly_ga_quarter_tracking'
                            element: 'notes'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'bb987aa0ba014db8bdd291c0f25432b2'
                        key: {
                            name: 'sn_opty_mgmt_core_opportunity'
                            element: 'x_snc_quarterly_ga_risk'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c217f5b383c54a2b975a5b57f6eb23f8'
                        key: {
                            name: 'x_snc_quarterly_ga_quarter_tracking'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c3017920a10545eb9e6914aefbd695b8'
                        key: {
                            name: 'x_snc_quarterly_ga_quarter'
                            element: 'is_current_fy'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: 'c4cbd92939a947de8357689ec9eeb1b2'
                        key: {
                            name: 'x_snc_quarterly_ga.admin'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ccbece0c6a414a3c8963d3ef00d7c8fc'
                        key: {
                            name: 'x_snc_quarterly_ga_quarter_tracking'
                            element: 'quarter'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'cdc6f001266b4abdbbf5c53206722107'
                        deleted: true
                        key: {
                            name: 'sn_opty_mgmt_core_opportunity'
                            element: 'x_snc_quarterly_ga_is_pillar_build'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ce18e0549b274d0d8f9b46d429ee83ab'
                        deleted: true
                        key: {
                            name: 'x_snc_quarterly_ga_quarter_tracking'
                            element: 'total_upside'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd04f7532071e434695d45ed8d5812d9d'
                        key: {
                            name: 'sn_opty_mgmt_core_opportunity'
                            element: 'x_snc_quarterly_ga_nnacv'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd8509874d9164d92b15f81ae20df2e59'
                        key: {
                            name: 'x_snc_quarterly_ga_quarter_tracking'
                            element: 'total_pillar_upside'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd9cd62d52f6b4216b5ae73e5b6a7f2ff'
                        key: {
                            name: 'x_snc_quarterly_ga_quarter_tracking'
                            element: 'build_to_target_gap'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ded02085ec9d4791b8cb0f30caf08905'
                        key: {
                            name: 'x_snc_quarterly_ga_quarter_tracking'
                            element: 'target_coverage_pct'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'e3891aab53bb42f88f2195dc6404b59c'
                        key: {
                            sys_security_acl: '205ad7631ec943488ffc9f52ec5dbcfe'
                            sys_user_role: {
                                id: '0634bc3b830e47c7b96df2069744f066'
                                key: {
                                    name: 'x_snc_quarterly_ga.user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e45975a311a947c89bb52a298fa15a90'
                        key: {
                            name: 'x_snc_quarterly_ga_quarter_tracking'
                            element: 'target'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e52a5cb1d94f4a2ea6902cf644a04294'
                        key: {
                            name: 'x_snc_quarterly_ga_quarter'
                            element: 'name'
                        }
                    },
                    {
                        table: 'par_dashboard_canvas'
                        id: 'e848650ae50c4104a7b7cd29cb86f405'
                        key: {
                            dashboard: '86093c5001d6447fb18ec7e45ae88dc0'
                            dashboard_tab: '81699b11a69b4046adba7b612d97f511'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ea5de857a9be412299bd0ddef6fbc582'
                        key: {
                            name: 'x_snc_quarterly_ga_quarter_tracking'
                            element: 'total_pillar_upside'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ec9f884c1890437993adb7db1494ff0f'
                        key: {
                            name: 'sn_opty_mgmt_core_opportunity'
                            element: 'x_snc_quarterly_ga_is_pillar'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'eedacff3d3dd4291a67f9d55ff08ecee'
                        key: {
                            name: 'x_snc_quarterly_ga_quarter_tracking'
                            element: 'build_to_target_gap'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'efcc332c412b488d9de1f5a9058fc7d5'
                        key: {
                            name: 'sn_opty_mgmt_core_opportunity'
                            element: 'x_snc_quarterly_ga_risk'
                            value: 'high'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'f060a5a11f3c4a1a8b1dbd1b9da13a99'
                        key: {
                            name: 'x_snc_quarterly_ga_quarter'
                            element: 'quarter_number'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f2bfdc2d20984b0c9f0aa318d1b39a58'
                        key: {
                            name: 'x_snc_quarterly_ga_quarter_tracking'
                            element: 'pct_build_to_new_target'
                            language: 'en'
                        }
                    },
                ]
            }
        }
    }
}
