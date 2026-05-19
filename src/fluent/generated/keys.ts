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
                    opty_import_data_source: {
                        table: 'sys_data_source'
                        id: 'a505f9b39726489eb1754ab6b40a07f4'
                    }
                    opty_import_transform: {
                        table: 'sys_transform_map'
                        id: 'afbb2ae1eda04dc7a431bf0502b09207'
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
                        deleted: true
                    }
                    xsp_write_opportunity: {
                        table: 'sys_scope_privilege'
                        id: '515d98486185465fb630443fd8303f36'
                        deleted: true
                    }
                }
                composite: [
                    {
                        table: 'sys_choice'
                        id: '01f065bb29724684ac86dcd1cee957c4'
                        key: {
                            name: 'x_snc_quarterly_ga_opportunity'
                            element: 'forecast_category'
                            value: 'upside'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: '025d9c3d90be43d1b53f546b4efe4fc0'
                        key: {
                            map: 'afbb2ae1eda04dc7a431bf0502b09207'
                            target_field: 'estimated_closed_date'
                        }
                    },
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
                        table: 'sys_dictionary'
                        id: '0c1d38dae3b2476ebb819834a6a9e3b0'
                        key: {
                            name: 'x_snc_quarterly_ga_opportunity'
                            element: 'short_description'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: '0de696cd0d35453098ba6d175c71d3f1'
                        deleted: true
                        key: {
                            map: 'afbb2ae1eda04dc7a431bf0502b09207'
                            target_field: 'x_snc_quarterly_ga_is_pillar'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '0f322f5a4f9843cd82df8d9620461406'
                        deleted: true
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
                        deleted: true
                        key: {
                            name: 'sn_opty_mgmt_core_opportunity'
                            element: 'x_snc_quarterly_ga_nnacv'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '10afb327424f4304a1c9be4e7ba1491a'
                        key: {
                            name: 'x_snc_quarterly_ga_opportunity'
                            element: 'forecast_category'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '10fbbf9bf3574f078150ceed5ea0020a'
                        key: {
                            name: 'x_snc_quarterly_ga_opty_import'
                            element: 'u_partner_name'
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
                        id: '1868d15f2c1a4e46864bb3324a7554b3'
                        key: {
                            name: 'x_snc_quarterly_ga_opty_import'
                            element: 'u_opportunity_id'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '195212aac12e4dcb9b07b8f23c773138'
                        key: {
                            name: 'x_snc_quarterly_ga_opportunity'
                            element: 'is_pillar'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: '1bedde23dc1f47d98bffb7bf7c706cc8'
                        key: {
                            map: 'afbb2ae1eda04dc7a431bf0502b09207'
                            target_field: 'account'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '21e749e5f8d04c81bc4d1c3a094757e0'
                        key: {
                            name: 'x_snc_quarterly_ga_opportunity'
                            element: 'forecast_category'
                            value: 'expect'
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
                        table: 'sys_dictionary'
                        id: '264322292f8d4605a4612f688a85a152'
                        key: {
                            name: 'x_snc_quarterly_ga_opportunity'
                            element: 'nnacv'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '277eb3603eda4cd683c4957fbb0ded5f'
                        key: {
                            name: 'x_snc_quarterly_ga_opportunity'
                            element: 'account'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: '27aa11c81b684331be2c5b5a2f62107c'
                        deleted: true
                        key: {
                            map: 'afbb2ae1eda04dc7a431bf0502b09207'
                            target_field: 'x_snc_quarterly_ga_nnacv'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: '27d7c546d8874b488b9c889d79029f45'
                        key: {
                            map: 'afbb2ae1eda04dc7a431bf0502b09207'
                            target_field: 'forecast_category'
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
                        table: 'sys_documentation'
                        id: '2b8937369cc2447193b03b2da9ba529f'
                        key: {
                            name: 'x_snc_quarterly_ga_opty_import'
                            element: 'u_account'
                            language: 'en'
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
                        table: 'sys_documentation'
                        id: '333c819725a24401801ea077e8e88ae9'
                        key: {
                            name: 'x_snc_quarterly_ga_account'
                            element: 'active'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '33583ae26c834424840ff45723956393'
                        key: {
                            name: 'x_snc_quarterly_ga_opportunity'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '34afd06062fb4095ba962c0d3111ebf7'
                        deleted: true
                        key: {
                            name: 'sn_opty_mgmt_core_opportunity'
                            element: 'x_snc_quarterly_ga_risk'
                            value: 'low'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '3788a42c0c354d2c84b282676ae3cbda'
                        key: {
                            name: 'x_snc_quarterly_ga_opty_import'
                            element: 'u_is_pillar_upside'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: '3973caf125e1419db31fbb9e64899375'
                        key: {
                            map: 'afbb2ae1eda04dc7a431bf0502b09207'
                            target_field: 'number'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '3e23c0af08f4401ba08fee788757a17e'
                        key: {
                            name: 'x_snc_quarterly_ga_opty_import'
                            element: 'u_renewal_amount'
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
                        id: '4311650446f6431daeeb1839f818a81b'
                        key: {
                            name: 'x_snc_quarterly_ga_opportunity'
                            element: 'is_pillar'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '46bd76a12ba74975b662ded4914e3972'
                        key: {
                            name: 'x_snc_quarterly_ga_opty_import'
                            element: 'u_partner_name'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '47c204b181d1451a982aac1d269e973e'
                        deleted: true
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
                        table: 'sys_documentation'
                        id: '4df190bfe9de46629b4db5888698632f'
                        key: {
                            name: 'x_snc_quarterly_ga_opportunity'
                            element: 'account'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4f484353adb644fb8d74b5af2ca0c82c'
                        key: {
                            name: 'x_snc_quarterly_ga_opportunity'
                            element: 'partner_name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '508166882ada4f3d83342c2bcdc8bffe'
                        key: {
                            name: 'x_snc_quarterly_ga_opty_import'
                            element: 'u_account'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '510061141d6b4e00864df57a156abaa8'
                        key: {
                            name: 'x_snc_quarterly_ga_opportunity'
                            element: 'partner_name'
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
                        table: 'sys_number'
                        id: '5388f377c66146b382484e0af346c323'
                        key: {
                            category: 'x_snc_quarterly_ga_account'
                            prefix: 'ACC'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '5424eb6740d845e68cc520f3cd4f4ab6'
                        key: {
                            name: 'x_snc_quarterly_ga_opportunity'
                            element: 'risk'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '55c2a6a2d59f414ca7230886a768b534'
                        key: {
                            name: 'x_snc_quarterly_ga_opportunity'
                            element: 'forecast_category'
                            value: 'submitted'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '57d8eec9988c4406967bf4a98f0420ab'
                        key: {
                            name: 'x_snc_quarterly_ga_opty_import'
                            element: 'u_is_pillar_upside'
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
                        table: 'sys_dictionary'
                        id: '595c1bbf94a6485da55c2c2fceee70c3'
                        key: {
                            name: 'x_snc_quarterly_ga_opty_import'
                            element: 'u_forecast_category'
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
                        table: 'sys_documentation'
                        id: '5e8ec214efe34b3fabb4336becbbeda5'
                        key: {
                            name: 'x_snc_quarterly_ga_account'
                            element: 'name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5ed3c4d3a1414a87af96714476cfb4cf'
                        deleted: true
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
                        id: '61080e637a1c45b180396d63c790e31f'
                        key: {
                            name: 'x_snc_quarterly_ga_opportunity'
                            element: 'external_opty_id'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '61ceaa91adb0483da9f5fd0e92bbc85a'
                        deleted: true
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
                        table: 'sys_db_object'
                        id: '649db3f0fad44cf8a22a1d7ec14f23bd'
                        key: {
                            name: 'x_snc_quarterly_ga_opty_import'
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
                        deleted: true
                        key: {
                            name: 'sn_opty_mgmt_core_opportunity'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '69857a35b2714a32acd958c1afb943d2'
                        deleted: true
                        key: {
                            name: 'sn_opty_mgmt_core_opportunity'
                            element: 'x_snc_quarterly_ga_quarter'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '6a0b5073d1ed4b61ba86d87107027dc5'
                        deleted: true
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
                        table: 'sys_dictionary'
                        id: '6ad0c4c94e7440848a21081767dac661'
                        key: {
                            name: 'x_snc_quarterly_ga_opportunity'
                            element: 'renewal_amount'
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
                        table: 'sys_dictionary'
                        id: '6ee6d497a4c74d02bd8efb3949c44b91'
                        key: {
                            name: 'x_snc_quarterly_ga_opty_import'
                            element: 'u_external_opty_id'
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
                        table: 'sys_documentation'
                        id: '6f952377761c4f8f94f6f0854cac2e94'
                        key: {
                            name: 'x_snc_quarterly_ga_opportunity'
                            element: 'quarter'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6fe136803b294c1fba78f56bc65861d3'
                        key: {
                            name: 'x_snc_quarterly_ga_opportunity'
                            element: 'external_opty_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '702a7a27036b4339bcddc2946ad2834f'
                        deleted: true
                        key: {
                            name: 'sn_opty_mgmt_core_opportunity'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '70aa0cde5dde4a5a888ad350c9b535e9'
                        key: {
                            name: 'x_snc_quarterly_ga_opty_import'
                            element: 'u_opportunity_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '74f8cc57eba748e69210424ac337b1b4'
                        deleted: true
                        key: {
                            name: 'sn_opty_mgmt_core_opportunity'
                            element: 'x_snc_quarterly_ga_is_pillar'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '751c6a66e3ce4893a6e3a66208dce652'
                        key: {
                            name: 'x_snc_quarterly_ga_opty_import'
                            element: 'u_estimated_closed_date'
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
                        table: 'sys_dictionary'
                        id: '78cc887bcb2d45b3b053f90a0e1d9e71'
                        key: {
                            name: 'x_snc_quarterly_ga_opportunity'
                            element: 'quarter'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '791ac21522ee4f8590dc06ae418253ea'
                        deleted: true
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
                        id: '7e6c82571c7f4aa99152c49041d3437b'
                        key: {
                            name: 'x_snc_quarterly_ga_opty_import'
                            element: 'u_forecast_category'
                            language: 'en'
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
                        table: 'sys_documentation'
                        id: '8ae6c47afe5d4d38ad8d444851592521'
                        key: {
                            name: 'x_snc_quarterly_ga_opty_import'
                            element: 'NULL'
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
                        table: 'sys_documentation'
                        id: '908f83d6fb8243ffb34521f3754dda3d'
                        key: {
                            name: 'x_snc_quarterly_ga_opportunity'
                            element: 'risk'
                            language: 'en'
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
                        table: 'sys_transform_entry'
                        id: '99385d1d9b424dc699f9a06fb4bf0b41'
                        key: {
                            map: 'afbb2ae1eda04dc7a431bf0502b09207'
                            target_field: 'short_description'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '9939316700de48b9bc5ebb4329e710fb'
                        key: {
                            name: 'x_snc_quarterly_ga_opty_import'
                            element: 'u_opportunity_description'
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
                        id: '9bcd1bab8ca44df8b58d1b4775f7f127'
                        key: {
                            name: 'x_snc_quarterly_ga_opportunity'
                            element: 'forecast_category'
                            value: 'closed'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9d5a5795ca4c4a64b83dc92bdaa5b9a0'
                        key: {
                            name: 'x_snc_quarterly_ga_opty_import'
                            element: 'u_opportunity_description'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '9d6de448bb4f4b8bb3bb057a068ba7bf'
                        deleted: true
                        key: {
                            name: 'sn_opty_mgmt_core_opportunity'
                            element: 'x_snc_quarterly_ga_risk'
                            value: 'medium'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a09c77e9136942a694bcf8f302749330'
                        key: {
                            name: 'x_snc_quarterly_ga_opportunity'
                            element: 'assigned_to'
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
                        table: 'sys_documentation'
                        id: 'a2dd1823cbde40949e860d555cddd0da'
                        key: {
                            name: 'x_snc_quarterly_ga_opportunity'
                            element: 'estimated_closed_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a465a75e97084768a0fff2d941aece1a'
                        key: {
                            name: 'x_snc_quarterly_ga_opportunity'
                            element: 'risk'
                            value: 'critical'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a89a474e77854db497b90cc30e1b63c8'
                        key: {
                            name: 'x_snc_quarterly_ga_opportunity'
                            element: 'forecast_category'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'aa7d504011e34a0a97e472697eac5961'
                        key: {
                            name: 'x_snc_quarterly_ga_opportunity'
                            element: 'short_description'
                            language: 'en'
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
                        table: 'sys_transform_entry'
                        id: 'b002b46366d5493d867ce3a47bf1a43b'
                        key: {
                            map: 'afbb2ae1eda04dc7a431bf0502b09207'
                            target_field: 'renewal_amount'
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
                        table: 'sys_choice'
                        id: 'b2c5406ba9144090a4ce3b3714f54eed'
                        key: {
                            name: 'x_snc_quarterly_ga_opportunity'
                            element: 'risk'
                            value: 'low'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'b30850b6f5fd4fcea0760cc74b872fd2'
                        key: {
                            name: 'x_snc_quarterly_ga_opportunity'
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
                        table: 'sys_choice'
                        id: 'b53f83908a924c808e4270066ea3393a'
                        key: {
                            name: 'x_snc_quarterly_ga_opportunity'
                            element: 'risk'
                            value: 'medium'
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
                        table: 'sys_documentation'
                        id: 'b6c13e87a61d4b1b8a833fb82962e6ab'
                        key: {
                            name: 'x_snc_quarterly_ga_opty_import'
                            element: 'u_estimated_closed_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b7d7c89705a941e6b9c1473a35708a88'
                        key: {
                            name: 'x_snc_quarterly_ga_opty_import'
                            element: 'u_renewal_amount'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ba86adf0b3114f0a8392cac19362f288'
                        key: {
                            name: 'x_snc_quarterly_ga_account'
                            element: 'active'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'bb987aa0ba014db8bdd291c0f25432b2'
                        deleted: true
                        key: {
                            name: 'sn_opty_mgmt_core_opportunity'
                            element: 'x_snc_quarterly_ga_risk'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'bcc67078b7424e3585641066c6675dc8'
                        key: {
                            name: 'x_snc_quarterly_ga_opportunity'
                            element: 'renewal_amount'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c1f53e655b26462cb7906dc78c0c4205'
                        key: {
                            name: 'x_snc_quarterly_ga_opportunity'
                            element: 'NULL'
                            language: 'en'
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
                        id: 'c850ae68c9b54bbfb791fcdc54bc1b1e'
                        key: {
                            name: 'x_snc_quarterly_ga_account'
                            element: 'name'
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
                        table: 'sys_transform_entry'
                        id: 'cd0f728d27ea4a748ba53c4cd24c4c8a'
                        key: {
                            map: 'afbb2ae1eda04dc7a431bf0502b09207'
                            target_field: 'external_opty_id'
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
                        deleted: true
                        key: {
                            name: 'sn_opty_mgmt_core_opportunity'
                            element: 'x_snc_quarterly_ga_nnacv'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd17c3868e1b2412c80f16173df046e87'
                        key: {
                            name: 'x_snc_quarterly_ga_opportunity'
                            element: 'forecast_category'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd2dd78da4d444cb48b5cab52508977f8'
                        key: {
                            name: 'x_snc_quarterly_ga_opty_import'
                            element: 'u_external_opty_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'd32ae597a4524bf2aa5b4fa18bdb867e'
                        key: {
                            name: 'x_snc_quarterly_ga_opportunity'
                            element: 'forecast_category'
                            value: 'pipeline'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd659629ae4c04cd391db74a54af562ed'
                        key: {
                            name: 'x_snc_quarterly_ga_opty_import'
                            element: 'u_sales_rep'
                            language: 'en'
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
                        table: 'sys_number'
                        id: 'd978ea697fb2443aa62448332bd45206'
                        key: {
                            category: 'x_snc_quarterly_ga_opportunity'
                            prefix: 'OPTY'
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
                        id: 'da4c275cc7874341bf256a40ee45d6f1'
                        key: {
                            name: 'x_snc_quarterly_ga_opty_import'
                            element: 'u_sales_rep'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'db80c5bda28b4c658a1e9d0b05ad941d'
                        key: {
                            name: 'x_snc_quarterly_ga_opportunity'
                            element: 'forecast_category'
                            value: 'omitted'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'dd894dc0efdf4ad09b4c53bdd487c19e'
                        key: {
                            name: 'x_snc_quarterly_ga_opportunity'
                            element: 'estimated_closed_date'
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
                        table: 'sys_documentation'
                        id: 'df0164176f9c442bbfea6c6e5d6fbf01'
                        key: {
                            name: 'x_snc_quarterly_ga_opportunity'
                            element: 'assigned_to'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'df5aed66a49a4232a03393885dc8bb88'
                        key: {
                            name: 'x_snc_quarterly_ga_opportunity'
                            element: 'nnacv'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e0a5abb5144f45589d5657c96ee6bade'
                        key: {
                            name: 'x_snc_quarterly_ga_opportunity'
                            element: 'risk'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'e1e3f7fde9cd4feaa8d74c0981314a90'
                        key: {
                            name: 'x_snc_quarterly_ga_account'
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
                        table: 'sys_transform_entry'
                        id: 'e5827dcd763849d393da03249cefe2ac'
                        key: {
                            map: 'afbb2ae1eda04dc7a431bf0502b09207'
                            target_field: 'is_pillar'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e6145a6b3e864de3980631042888ea22'
                        key: {
                            name: 'x_snc_quarterly_ga_opty_import'
                            element: 'u_nnacv'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: 'e619a7123cfc417694877ebe2e9413d6'
                        key: {
                            map: 'afbb2ae1eda04dc7a431bf0502b09207'
                            target_field: 'assigned_to'
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
                        id: 'ea4839fbffe2442d937483115c1386bc'
                        key: {
                            name: 'x_snc_quarterly_ga_opportunity'
                            element: 'NULL'
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
                        deleted: true
                        key: {
                            name: 'sn_opty_mgmt_core_opportunity'
                            element: 'x_snc_quarterly_ga_is_pillar'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ecf2f3a1936c43149e611d1d39716fec'
                        key: {
                            name: 'x_snc_quarterly_ga_opty_import'
                            element: 'NULL'
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
                        table: 'sys_documentation'
                        id: 'efbf2f09adfb46b98a2ae2711abba08e'
                        key: {
                            name: 'x_snc_quarterly_ga_account'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'efcc332c412b488d9de1f5a9058fc7d5'
                        deleted: true
                        key: {
                            name: 'sn_opty_mgmt_core_opportunity'
                            element: 'x_snc_quarterly_ga_risk'
                            value: 'high'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: 'f0490bacd9c14fc4b73c193ba4e87bde'
                        key: {
                            map: 'afbb2ae1eda04dc7a431bf0502b09207'
                            target_field: 'partner_name'
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
                    {
                        table: 'sys_dictionary'
                        id: 'f8cf8106e226452d813d01d8fa17f949'
                        key: {
                            name: 'x_snc_quarterly_ga_account'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: 'f95579ad7c2d4efb9aeedfa2217499d5'
                        key: {
                            map: 'afbb2ae1eda04dc7a431bf0502b09207'
                            target_field: 'nnacv'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'fa5270f95c074f9c93f37495acd63f62'
                        key: {
                            name: 'x_snc_quarterly_ga_opty_import'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'fdb8e4120a5b4655a4540e9dc8a0926e'
                        key: {
                            name: 'x_snc_quarterly_ga_opty_import'
                            element: 'u_nnacv'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'fe29d1cf53dc407f95d9527986b197df'
                        key: {
                            name: 'x_snc_quarterly_ga_opportunity'
                            element: 'risk'
                            value: 'high'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'fec0784f20c1481bad2e9dc1340f359a'
                        key: {
                            name: 'x_snc_quarterly_ga_account'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'ffeb57937d6442fa9d11b714a0bcccb3'
                        key: {
                            name: 'x_snc_quarterly_ga_opportunity'
                            element: 'forecast_category'
                            value: 'commit'
                        }
                    },
                ]
            }
        }
    }
}
