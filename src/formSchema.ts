const visualizationOptions = {
    type: 'object',
    title: 'Visualization Options',
    properties: {
        xColumn: {
            type: 'object',
            title: 'X column',
            required: true,
            properties: {
                key: {
                    type: 'string',
                    required: true
                },
                type: {
                    type: 'string',
                    enum: ['time', 'category'],
                    required: true
                }
            }
        },
        yColumns: {
            type: 'array',
            title: 'Y columns',
            required: true,
            items: {
                type: 'string'
            }
        },
        groupBy: {
            type: 'string'
        },
        smooth: {
            type: 'boolean'
        },
        stacking: {
            type: 'boolean'
        },
        legend: {
            type: 'object',
            title: 'Show Chart Legend',
            properties: {
                show: {
                    type: 'boolean'
                },
                scroll: {
                    type: 'boolean'
                },
                position: {
                    type: 'string',
                    enum: ['top', 'bottom', 'left', 'right']
                }
            }
        },
        showSymbol: {
            type: 'boolean'
        },
        showDataLabels: {
            type: 'boolean'
        },
        percentage: {
            type: 'boolean'
        },
        xAxis: {
            type: 'object',
            properties: {
                title: {
                    type: 'string'
                },
                tickFormat: {
                    type: 'string'
                },
                reverseValues: {
                    type: 'boolean'
                }
            }
        },
        yAxis: {
            type: 'object',
            properties: {
                title: {
                    type: 'string'
                },
                tickFormat: {
                    type: 'string'
                },
                labelFormat: {
                    type: 'string'
                },
                position: {
                    type: 'string',
                    enum: ['left', 'right']
                }
            }
        },
        seriesOptions: {
            type: 'array',
            items: {
                type: 'object',
                properties: {
                    key: {
                        type: 'string',
                        required: true
                    },
                    title: {
                        type: 'string'
                    },
                    color: {
                        type: 'string',
                        format: 'color'
                    }
                }
            }
        }
    }
}


const theme = {
    darkShadow: {
        type: 'boolean'
    },
    fontColor: {
        type: 'string',
        format: 'color'
    },
    backgroundColor: {
        type: 'string',
        format: 'color'
    },
    // width: {
    //     type: 'string'
    // },
    height: {
        type: 'string'
    }
}


const themeUISchema = {
    type: 'Category',
    label: 'Theme',
    elements: [
        {
            type: 'VerticalLayout',
            elements: [
                {
                    type: 'Control',
                    scope: '#/properties/darkShadow'
                },
                {
                    type: 'Control',
                    scope: '#/properties/fontColor'
                },
                {
                    type: 'Control',
                    scope: '#/properties/backgroundColor'
                },
                {
                    type: 'Control',
                    scope: '#/properties/height'
                }
            ]
        }
    ]
}

export function getBuilderSchema() {
    return {
        dataSchema: {
            type: 'object',
            required: ['title'],
            properties: {
                title: {
                    type: 'string'
                },
                description: {
                    type: 'string'
                },
                ...theme
            }
        },
        uiSchema: {
            type: 'Categorization',
            elements: [
                {
                    type: 'Category',
                    label: 'General',
                    elements: [
                        {
                            type: 'VerticalLayout',
                            elements: [
                                {
                                    type: 'Control',
                                    scope: '#/properties/title'
                                },
                                {
                                    type: 'Control',
                                    scope: '#/properties/description'
                                }
                            ]
                        }
                    ]
                },
                themeUISchema
            ]
        },
        advanced: {
            dataSchema: {
                type: 'object',
                properties: {
                    options: visualizationOptions
                }
            },
            uiSchema: {
                type: 'VerticalLayout',
                elements: [
                    {
                        type: 'HorizontalLayout',
                        elements: [
                            {
                                type: 'Control',
                                scope: '#/properties/options',
                                options: {
                                    detail: {
                                        type: 'VerticalLayout'
                                    }
                                }
                            }
                        ]
                    }
                ]
            }
        }
    }
}

export function getEmbedderSchema() {
    return {
        dataSchema: {
            type: 'object',
            properties: {
                title: {
                    type: 'string',
                    required: true
                },
                description: {
                    type: 'string'
                },
                options: visualizationOptions,
                ...theme
            }
        },
        uiSchema: {
            type: 'Categorization',
            elements: [
                {
                    type: 'Category',
                    label: 'General',
                    elements: [
                        {
                            type: 'VerticalLayout',
                            elements: [
                                {
                                    type: 'Control',
                                    scope: '#/properties/title'
                                },
                                {
                                    type: 'Control',
                                    scope: '#/properties/description'
                                },
                                {
                                    type: 'HorizontalLayout',
                                    elements: [
                                        {
                                            type: 'Control',
                                            scope: '#/properties/options',
                                            options: {
                                                detail: {
                                                    type: 'VerticalLayout'
                                                }
                                            }
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                themeUISchema
            ]
        }
    }
}