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
                    bom_json: {
                        table: 'sys_module'
                        id: '7a51219fbae5420a96d37d716cc64cd4'
                    }
                    create_quarter_module: {
                        table: 'sys_app_module'
                        id: '390e55a6a218422e91b7a621fe1663f1'
                    }
                    create_quarter_tracking_module: {
                        table: 'sys_app_module'
                        id: 'ee495c0c4a5b4bdb83bb27aebd64add4'
                    }
                    gap_to_plan_category: {
                        table: 'sys_app_category'
                        id: '60f858f93e144082bd7d86b923aef214'
                    }
                    gap_to_plan_menu: {
                        table: 'sys_app_application'
                        id: '9cc4a2d02bd74f598e78cd7dc50931de'
                    }
                    opportunities_list_module: {
                        table: 'sys_app_module'
                        id: '0ac54c5b04fe476695a8c0ea1d6d01df'
                    }
                    opportunities_separator: {
                        table: 'sys_app_module'
                        id: 'd1a1f3fc64f14ee290ebc94a6c6b0b7e'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: '3c32f83dd09d42f1b2b40fccc40a0209'
                    }
                    quarter_tracking_list_module: {
                        table: 'sys_app_module'
                        id: '90bbc3f8262a4fddae6f32af311ef0b2'
                    }
                    quarters_list_module: {
                        table: 'sys_app_module'
                        id: '2a40ec233fed41679fcf83cf9866cd1d'
                    }
                    src_server_calculateQuarterTrackingMetrics_js: {
                        table: 'sys_module'
                        id: 'dc82ebc4968e4f869ac0d6f6ed7c2683'
                    }
                    tracking_separator: {
                        table: 'sys_app_module'
                        id: '6481e9d308f342318f37b3539dedab12'
                    }
                }
                composite: [
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
                        id: '6d17697b48ab4889be6c1b6427894433'
                        key: {
                            name: 'x_snc_quarterly_ga_quarter'
                            element: 'name'
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
                        id: 'ccbece0c6a414a3c8963d3ef00d7c8fc'
                        key: {
                            name: 'x_snc_quarterly_ga_quarter_tracking'
                            element: 'quarter'
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
                        table: 'sys_dictionary'
                        id: 'ea5de857a9be412299bd0ddef6fbc582'
                        key: {
                            name: 'x_snc_quarterly_ga_quarter_tracking'
                            element: 'total_pillar_upside'
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
