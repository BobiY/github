



let layerStyleConfig = [
    {
        "id": "background",
        "type": "background",
        "layout": {},
        "paint": {
            "background-color": {
                "base": 1,
                "stops": [
                    [
                        11,
                        "hsl(35, 32%, 91%)"
                    ],
                    [
                        13,
                        "hsl(35, 12%, 89%)"
                    ]
                ]
            }
        },
        "interactive": true
    },
    {
        //水面
        "id": "water",
        "type": "fill",
        "source": "china",
        "source-layer": "gis_osm_water_a_free_1",
        "layout": {},
        "paint": {
            "fill-color": "hsl(196, 80%, 70%)"
        },
        "interactive": true
    },
    {
        //墓地
        "id": "cemetery",
        "type": "fill",
        "source": "china",
        "source-layer": "gis_osm_pofw_a_free_1",
        "layout": {},
        "paint": {
            "fill-color": "hsl(75, 37%, 81%)"
        },
        "interactive": true
    },
    {
        //建筑物
        "id": "building",
        "type": "fill",
        "source": "china",
        "source-layer": "gis_osm_buildings_a_free_1",
        "minzoom": 15,
        "layout": {},
        "paint": {
            "fill-color": {
                "base": 1,
                "stops": [
                    [
                        15,
                        "hsl(35, 11%, 88%)"
                    ],
                    [
                        16,
                        "hsl(35, 8%, 85%)"
                    ]
                ]
            },
            "fill-opacity": {
                "base": 1,
                "stops": [
                    [
                        15.5,
                        0
                    ],
                    [
                        16,
                        1
                    ]
                ]
            },
            "fill-outline-color": "hsl(35, 6%, 79%)"
        },
        "interactive": true
    },
    {
        //医院
        "id": "hospital",
        "type": "fill",
        "source": "china",
        "source-layer": "gis_osm_pois_a_free_1",
        "filter": [
            "==",
            "fclass",
            "hospital"
        ],
        "layout": {},
        "paint": {
            "fill-color": {
                "base": 1,
                "stops": [
                    [
                        15.5,
                        "hsl(340, 37%, 87%)"
                    ],
                    [
                        16,
                        "hsl(340, 63%, 89%)"
                    ]
                ]
            }
        },
        "interactive": true
    }, {
        //公园
        "id": "park",
        "type": "fill",
        "source": "china",
        "source-layer": "gis_osm_pois_a_free_1",
        "filter": [
            "==",
            "fclass",
            "park"
        ],
        "layout": {},
        "paint": {
            "fill-color": "hsl(100, 58%, 76%)",
            "fill-opacity": {
                "base": 1,
                "stops": [
                    [
                        5,
                        0
                    ],
                    [
                        6,
                        1
                    ]
                ]
            }
        },
        "interactive": true
    }, {
        //学校
        "id": "school",
        "type": "fill",
        "source": "china",
        "source-layer": "gis_osm_pois_a_free_1",
        "filter": [
            "in",
            "fclass",
            "school",
            "college"
        ],
        "layout": {},
        "paint": {
            "fill-color": {
                "base": 1,
                "stops": [
                    [
                        15.5,
                        "hsl(50, 47%, 81%)"
                    ],
                    [
                        16,
                        "hsl(50, 63%, 84%)"
                    ]
                ]
            }
        },
        "interactive": true
    },
    {
        //机场
        "id": "industrial",
        "type": "fill",
        "source": "china",
        "source-layer": "gis_osm_transport_a_free_1",
        "layout": {},
        "paint": {
            "fill-color": {
                "base": 1,
                "stops": [
                    [
                        15.5,
                        "hsl(230, 15%, 86%)"
                    ],
                    [
                        16,
                        "hsl(230, 29%, 89%)"
                    ]
                ]
            }
        },
        "interactive": true
    }, {
        //机场高速
        "id": "aeroway-runway",
        "type": "line",
        "source": "china",
        "source-layer": "gis_osm_runways_free_1",
        "minzoom": 9,
        "layout": {},
        "paint": {
            "line-color": {
                "base": 1,
                "stops": [
                    [
                        15,
                        "hsl(230, 23%, 82%)"
                    ],
                    [
                        16,
                        "hsl(230, 37%, 84%)"
                    ]
                ]
            },
            "line-width": {
                "base": 1.5,
                "stops": [
                    [
                        9,
                        1
                    ],
                    [
                        18,
                        80
                    ]
                ]
            }
        },
        "interactive": true
    },
    {
        "id": "road-rail-tracks",
        "type": "line",
        "source": "china",
        "source-layer": "gis_osm_railways_free_1",
        "minzoom": 13,
        "layout": {
            "line-join": "round"
        },
        "paint": {
            "line-color": {
                "stops": [
                    [
                        13,
                        "hsl(50, 17%, 82%)"
                    ],
                    [
                        16,
                        "hsl(230, 10%, 74%)"
                    ]
                ]
            },
            "line-width": {
                "base": 1.5,
                "stops": [
                    [
                        14,
                        4
                    ],
                    [
                        20,
                        8
                    ]
                ]
            },
            "line-dasharray": [
                0.1,
                15
            ],
            "line-opacity": {
                "base": 1,
                "stops": [
                    [
                        13.75,
                        0
                    ],
                    [
                        14,
                        1
                    ]
                ]
            }
        },
        "interactive": true
    }, {
        "id": "road-rail",
        "type": "line",
        "source": "china",
        "source-layer": "gis_osm_railways_free_1",
        "minzoom": 13,
        "layout": {
            "line-join": "round"
        },
        "paint": {
            "line-color": {
                "stops": [
                    [
                        13,
                        "hsl(50, 17%, 82%)"
                    ],
                    [
                        16,
                        "hsl(230, 10%, 74%)"
                    ]
                ]
            },
            "line-width": {
                "base": 1.5,
                "stops": [
                    [
                        14,
                        0.5
                    ],
                    [
                        20,
                        1
                    ]
                ]
            }
        },
        "interactive": true
    }, {
        //高速公里
        "id": "bridge-motorway",
        "type": "line",
        "source": "china",
        "source-layer": "gis_osm_roads_free_1",
        "filter": [
            "==",
            "fclass",
            "motorway"
        ],
        "layout": {
            "line-cap": "round",
            "line-join": "round"
        },
        "paint": {
            "line-width": {
                "base": 1.5,
                "stops": [
                    [
                        5,
                        0.75
                    ],
                    [
                        18,
                        32
                    ]
                ]
            },
            "line-color": "hsl(26, 100%, 68%)"
        },
        "interactive": true
    },
    //xx-xx-case要放在前
    {
        "id": "bridge-motorway-case",
        "type": "line",
        "source": "china",
        "source-layer": "gis_osm_roads_free_1",
        "filter": [
            "==",
            "fclass",
            "motorway"
        ],
        "layout": {
            "line-join": "round"
        },
        "paint": {
            "line-width": {
                "base": 1.5,
                "stops": [
                    [
                        10,
                        1
                    ],
                    [
                        16,
                        2
                    ]
                ]
            },
            "line-color": "hsl(0, 0%, 100%)",
            "line-gap-width": {
                "base": 1.5,
                "stops": [
                    [
                        5,
                        0.75
                    ],
                    [
                        18,
                        32
                    ]
                ]
            }
        },
        "interactive": true
    }, {
        "id": "road-secondary-tertiary-case",
        "type": "line",
        "source": "china",
        "source-layer": "gis_osm_roads_free_1",
        "minzoom": 10,
        "filter": [
            "==",
            "fclass",
            "tertiary"
        ],
        "layout": {
            "line-cap": "round",
            "line-join": "round"
        },
        "paint": {
            "line-width": {
                "base": 1.2,
                "stops": [
                    [
                        10,
                        0.75
                    ],
                    [
                        18,
                        2
                    ]
                ]
            },
            "line-color": "hsl(230, 24%, 87%)",
            "line-gap-width": {
                "base": 1.5,
                "stops": [
                    [
                        8.5,
                        0.5
                    ],
                    [
                        10,
                        0.75
                    ],
                    [
                        18,
                        26
                    ]
                ]
            },
            "line-opacity": {
                "base": 1,
                "stops": [
                    [
                        9.99,
                        0
                    ],
                    [
                        10,
                        1
                    ]
                ]
            }
        },
        "interactive": true
    },
    {
        //三级路
        "id": "road-secondary-tertiary",
        "type": "line",
        "source": "china",
        "source-layer": "gis_osm_roads_free_1",
        "minzoom": 10,
        "filter": [
            "==",
            "fclass",
            "tertiary"
        ],
        "layout": {
            "line-cap": "round",
            "line-join": "round"
        },
        "paint": {
            "line-width": {
                "base": 1.5,
                "stops": [
                    [
                        8.5,
                        0.5
                    ],
                    [
                        10,
                        0.75
                    ],
                    [
                        18,
                        26
                    ]
                ]
            },
            "line-color": {
                "base": 1,
                "stops": [
                    [
                        5,
                        "hsl(35, 32%, 91%)"
                    ],
                    [
                        8,
                        "hsl(0, 0%, 100%)"
                    ]
                ]
            },
            "line-opacity": {
                "base": 1.2,
                "stops": [
                    [
                        5,
                        0
                    ],
                    [
                        5.5,
                        1
                    ]
                ]
            }
        },
        "interactive": true
    }, {
        "id": "road-primary-case",
        "type": "line",
        "source": "china",
        "source-layer": "gis_osm_roads_free_1",
        "minzoom": 9,
        "filter": [
            "==",
            "fclass",
            "primary"
        ],
        "layout": {
            "line-cap": "round",
            "line-join": "round"
        },
        "paint": {
            "line-width": {
                "base": 1.5,
                "stops": [
                    [
                        10,
                        1
                    ],
                    [
                        16,
                        2
                    ]
                ]
            },
            "line-color": "hsl(230, 24%, 87%)",
            "line-gap-width": {
                "base": 1.5,
                "stops": [
                    [
                        5,
                        0.75
                    ],
                    [
                        18,
                        32
                    ]
                ]
            },
            "line-opacity": {
                "base": 1,
                "stops": [
                    [
                        9.99,
                        0
                    ],
                    [
                        10,
                        1
                    ]
                ]
            }
        },
        "interactive": true
    },
    {
        //二等路
        "id": "road-secondary",
        "type": "line",
        "source": "china",
        "source-layer": "gis_osm_roads_free_1",
        "minzoom": 9,
        "filter": [
            "==",
            "fclass",
            "secondary"
        ],
        "layout": {
            "line-join": "round"
        },
        "paint": {
            "line-width": {
                "base": 1,
                "stops": [
                    [ 10,  1 ], [ 18, 4 ]
                ]
            },
            "line-color": "#fff",
           
        },
        "interactive": true
    },
    {
        "id": "road-street-case",
        "type": "line",
        "source": "china",
        "source-layer": "gis_osm_roads_free_1",
        "minzoom": 9,
        "filter": [
            "==",
            "fclass",
            "residential"
        ],
        "layout": {
            "line-cap": "round",
            "line-join": "round"
        },
        "paint": {
            "line-width": {
                "base": 1.5,
                "stops": [
                    [
                        12,
                        0.75
                    ],
                    [
                        20,
                        2
                    ]
                ]
            },
            "line-color": "hsl(230, 24%, 87%)",
            "line-gap-width": {
                "base": 1.5,
                "stops": [
                    [
                        13,
                        0
                    ],
                    [
                        14,
                        2
                    ],
                    [
                        18,
                        18
                    ]
                ]
            },
            "line-opacity": {
                "base": 1,
                "stops": [
                    [
                        13.99,
                        0
                    ],
                    [
                        14,
                        1
                    ]
                ]
            }
        },
        "interactive": true
    },
    {
        "id": "road-street",
        "type": "line",
        "metadata": {
            "mapbox:group": "1444855786460.0557"
        },
        "source": "china",
        "source-layer": "gis_osm_roads_free_1",
        "minzoom": 9,
        "filter": [
            "==",
            "fclass",
            "residential"
        ],
        "layout": {
            "line-cap": "round",
            "line-join": "round"
        },
        "paint": {
            "line-width": {
                "base": 1.5,
                "stops": [
                    [
                        12.5,
                        0.5
                    ],
                    [
                        14,
                        2
                    ],
                    [
                        18,
                        18
                    ]
                ]
            },
            "line-color": "hsl(0, 0%, 100%)",
            "line-opacity": {
                "base": 1,
                "stops": [
                    [
                        13.99,
                        0
                    ],
                    [
                        14,
                        1
                    ]
                ]
            }
        },
        "interactive": true
    },
    {
        //主要路
        "id": "road-primary",
        "type": "line",
        "source": "china",
        "source-layer": "gis_osm_roads_free_1",
        "minzoom": 9,
        "filter": [
            "==",
            "fclass",
            "primary"
        ],
        "layout": {
            "line-cap": "round",
            "line-join": "round"
        },
        "paint": {
            "line-width": {
                "base": 1.5,
                "stops": [
                    [
                        5,
                        0.75
                    ],
                    [
                        18,
                        32
                    ]
                ]
            },
            "line-color": {
                "base": 1,
                "stops": [
                    [
                        5,
                        "hsl(35, 32%, 91%)"
                    ],
                    [
                        7,
                        "hsl(0, 0%, 100%)"
                    ]
                ]
            },
            "line-opacity": 1
        },
        "interactive": true
    },

    {
        "id": "road-path-bg",
        "type": "line",
        "metadata": {
            "mapbox:group": "1444855786460.0557"
        },
        "source": "china",
        "source-layer": "gis_osm_roads_free_1",
        "minzoom": 9,
        "filter": [
            "==",
            "fclass",
            "path"
        ],
        "layout": {
            "line-join": "round"
        },
        "paint": {
            "line-width": {
                "base": 1.5,
                "stops": [
                    [
                        15,
                        2
                    ],
                    [
                        18,
                        7
                    ]
                ]
            },
            "line-dasharray": [
                1,
                0
            ],
            "line-color": "hsl(230, 17%, 82%)",
            "line-blur": 0,
            "line-opacity": {
                "base": 1,
                "stops": [
                    [
                        14,
                        0
                    ],
                    [
                        14.25,
                        0.75
                    ]
                ]
            }
        },
        "interactive": true
    },
    {
        //人行道
        "id": "road-path",
        "type": "line",
        "source": "china",
        "source-layer": "gis_osm_roads_free_1",
        "minzoom": 9,
        "filter": [
            "==",
            "fclass",
            "path"
        ],
        "layout": {
            "line-join": "round"
        },
        "paint": {
            "line-width": {
                "base": 1.5,
                "stops": [
                    [
                        15,
                        1
                    ],
                    [
                        18,
                        4
                    ]
                ]
            },
            "line-color": "hsl(0, 0%, 100%)",
            "line-dasharray": {
                "base": 1,
                "stops": [
                    [
                        14,
                        [
                            1,
                            0
                        ]
                    ],
                    [
                        15,
                        [
                            1.75,
                            1
                        ]
                    ],
                    [
                        16,
                        [
                            1,
                            0.75
                        ]
                    ],
                    [
                        17,
                        [
                            1,
                            0.5
                        ]
                    ]
                ]
            },
            "line-opacity": {
                "base": 1,
                "stops": [
                    [
                        14,
                        0
                    ],
                    [
                        14.25,
                        1
                    ]
                ]
            }
        },
        "interactive": true
    },
    {
        //村庄
        "id": "place-village",
        "type": "symbol",
        "source": "china",
        "source-layer": "gis_osm_places_free_1",
        "minzoom": 8,
        "maxzoom": 15,
        "filter": [
            "==",
            "fclass",
            "village"
        ],
        "layout": {
            "text-field": "{name}",
            "text-font": [
                "Microsoft YaHei",
            ],
            "text-max-width": 7,
            "text-size": {
                "base": 1,
                "stops": [
                    [
                        10,
                        11.5
                    ],
                    [
                        16,
                        18
                    ]
                ]
            }
        },
        "paint": {
            "text-halo-color": "hsl(0, 0%, 100%)",
            "text-halo-width": 1.25,
            "text-color": "hsl(0, 0%, 0%)"
        },
        "interactive": true
    },
    {
        //郊区
        "id": "place-suburb",
        "type": "symbol",
        "source": "china",
        "source-layer": "gis_osm_places_free_1",
        "minzoom": 10,
        "maxzoom": 16,
        "filter": [
            "==",
            "fclass",
            "suburb"
        ],
        "layout": {
            "text-field": "{name}",
            "text-transform": "uppercase",
            "text-font": [
                "Microsoft YaHei"
            ],
            "text-letter-spacing": 0.15,
            "text-max-width": 7,
            "text-padding": 3,
            "text-size": {
                "base": 1,
                "stops": [
                    [
                        11,
                        11
                    ],
                    [
                        15,
                        18
                    ]
                ]
            }
        },
        "paint": {
            "text-halo-color": "hsl(0, 0%, 100%)",
            "text-halo-width": 1,
            "text-color": "hsl(230, 29%, 35%)",
            "text-halo-blur": 0.5
        },
        "interactive": true
    },
    {
        "id": "place-city-md-s",
        "type": "symbol",
        "source": "china",
        "source-layer": "gis_osm_places_free_1",
        "maxzoom": 14,
        "filter": [
            "==",
            "fclass",
            "city"
        ],
        "layout": {
            "text-field": "{name}",
            "icon-image": "dot-10",
            "text-anchor": {
                "base": 1,
                "stops": [
                    [
                        7,
                        "top"
                    ],
                    [
                        8,
                        "center"
                    ]
                ]
            },
            "text-offset": {
                "base": 1,
                "stops": [
                    [
                        7.99,
                        [
                            0,
                            0.1
                        ]
                    ],
                    [
                        8,
                        [
                            0,
                            0
                        ]
                    ]
                ]
            },
            "text-font": {
                "base": 1,
                "stops": [
                    [
                        7,
                        [
                            "Microsoft YaHei"
                        ]
                    ],
                    [
                        8,
                        [
                            "Microsoft YaHei"
                        ]
                    ]
                ]
            },
            "text-size": {
                "base": 0.9,
                "stops": [
                    [
                        5,
                        12
                    ],
                    [
                        12,
                        22
                    ]
                ]
            }
        },
        "paint": {
            "text-halo-width": 1,
            "text-halo-color": "hsl(0, 0%, 100%)",
            "text-color": "hsl(0, 0%, 0%)",
            "text-halo-blur": 1,
            "icon-opacity": {
                "base": 1,
                "stops": [
                    [
                        7.99,
                        1
                    ],
                    [
                        8,
                        0
                    ]
                ]
            }
        },
        "interactive": true
    },
    {
        "id": "road-label-large",
        "type": "symbol",
        "source": "china",
        "source-layer": "gis_osm_roads_free_1",
        "filter": [
            "in",
            "fclass",
            "motorway",
            "primary",
            "secondary",
            "tertiary",
            "trunk",
            "residential"

        ],
        "layout": {
            "text-size": {
                "base": 1,
                "stops": [
                    [
                        9,
                        10
                    ],
                    [
                        20,
                        16
                    ]
                ]
            },
            "text-max-angle": 30,
            "symbol-spacing": 250,
            "text-font": [
                "Microsoft YaHei",
            ],
            "symbol-placement": "line",
            "text-padding": 1,
            "text-rotation-alignment": "map",
            "text-pitch-alignment": "viewport",
            "text-field": "{name}",
            "text-letter-spacing": 0.01
        },
        "paint": {
            "text-color": "hsl(0, 0%, 0%)",
            "text-halo-color": "hsla(0, 0%, 100%, 0.75)",
            "text-halo-width": 1,
            "text-halo-blur": 1
        },
        "interactive": true
    },
    {
        "id": "road-shields-black",
        "type": "symbol",
        "metadata": {
            "mapbox:group": "1444933575858.6992"
        },
        "source": "china",
        "source-layer": "gis_osm_roads_free_1",
        "minzoom": 13,
        "filter": [
            "all",
            [
                "in",
                "fclass",
                "motorway"
            ]
        ],
        "layout": {
            "text-size": 9,
            "icon-image": "default-4",
            "icon-rotation-alignment": "viewport",
            "text-max-angle": 38,
            "symbol-spacing": {
                "base": 1,
                "stops": [
                    [
                        11,
                        150
                    ],
                    [
                        14,
                        200
                    ]
                ]
            },
            "text-font": [
                "Microsoft YaHei",
            ],
            "symbol-placement": {
                "base": 1,
                "stops": [
                    [
                        10,
                        "point"
                    ],
                    [
                        11,
                        "line"
                    ]
                ]
            },
            "text-padding": 2,
            "text-rotation-alignment": "viewport",
            "text-field": "{ref}",
            "text-letter-spacing": 0.05,
            "icon-padding": 2
        },
        "paint": {
            "text-color": "hsl(0, 0%, 7%)",
            "icon-halo-color": "rgba(0, 0, 0, 1)",
            "icon-halo-width": 1,
            "text-opacity": 1,
            "icon-color": "white",
            "text-halo-color": "hsl(0, 0%, 100%)",
            "text-halo-width": 0
        },
        "interactive": true
    },
    {
        "id": "road-oneway-arrows-white",
        "type": "symbol",
        "source": "china",
        "source-layer": "gis_osm_roads_free_1",
        "minzoom": 16,
        "filter": [
            "==",
            "fclass",
            "motorway"
        ],
        "layout": {
            "symbol-placement": "line",
            "icon-image": {
                "base": 1,
                "stops": [
                    [
                        16,
                        "oneway-white-small"
                    ],
                    [
                        17,
                        "oneway-white-large"
                    ]
                ]
            },
            "icon-padding": 2,
            "symbol-spacing": 200
        },
        "paint": {},
        "interactive": true
    }, {
        "id": "road-shields-white",
        "type": "symbol",
        "source": "china",
        "source-layer": "gis_osm_roads_free_1",
        "minzoom": 14,
        "filter": [
            "==",
            "fclass",
            "motorway"
        ],
        "layout": {
            "text-size": 9,
            "icon-image": "de-motorway-2",
            "icon-rotation-alignment": "viewport",
            "text-max-angle": 38,
            "symbol-spacing": {
                "base": 1,
                "stops": [
                    [
                        11,
                        150
                    ],
                    [
                        14,
                        200
                    ]
                ]
            },
            "text-font": [
                "Microsoft YaHei",
            ],
            "symbol-placement": {
                "base": 1,
                "stops": [
                    [
                        10,
                        "point"
                    ],
                    [
                        11,
                        "line"
                    ]
                ]
            },
            "text-padding": 2,
            "text-rotation-alignment": "viewport",
            "text-field": "{ref}",
            "text-letter-spacing": 0.05,
            "icon-padding": 2
        },
        "paint": {
            "text-color": "hsl(0, 0%, 100%)",
            "icon-halo-color": "rgba(0, 0, 0, 1)",
            "icon-halo-width": 1,
            "text-opacity": 1,
            "icon-color": "white",
            "text-halo-color": "hsl(0, 0%, 100%)",
            "text-halo-width": 0
        },
        "interactive": true
    },
   
    
    {
        "id": "waterway-label",
        "type": "symbol",
        "source": "china",
        "source-layer": "gis_osm_water_a_free_1",
        "minzoom": 12,
        "layout": {
            "text-field": "{name}",
            "text-font": ["Microsoft YaHei"],
            "symbol-placement": "line",
            "text-pitch-alignment": "viewport",
            "text-max-angle": 30,
            "text-size": {
                "base": 1,
                "stops": [
                    [
                        13,
                        12
                    ],
                    [
                        18,
                        16
                    ]
                ]
            }
        },
        "paint": {
            "text-halo-width": 0.5,
            "text-halo-color": "hsl(196, 80%, 70%)",
            "text-color": "hsl(230, 48%, 44%)",
            "text-halo-blur": 0.5
        },
        "interactive": true
    }, {
        //墓地symbol
        "id": "poi-parks-scalerank2",
        "type": "symbol",
        "metadata": {
            "mapbox:group": "1444933358918.2366"
        },
        "source": "china",
        "source-layer": "gis_osm_pofw_free_1",
        "minzoom": 14,
        "layout": {
            "text-line-height": 1.1,
            "text-size": {
                "base": 1,
                "stops": [
                    [
                        14,
                        11
                    ],
                    [
                        20,
                        14
                    ]
                ]
            },
            "icon-image": {
                "stops": [
                    [
                        14,
                        "cemetery-11"
                    ],
                    [
                        15,
                        "cemetery-15"
                    ]
                ]
            },
            "text-max-angle": 38,
            "symbol-spacing": 250,
            "text-font": ["Microsoft YaHei"],
            "text-padding": 2,
            "text-offset": [
                0,
                0.65
            ],
            "text-rotation-alignment": "viewport",
            "text-anchor": "top",
            "text-field": "{name}",
            "text-letter-spacing": 0.01,
            "text-max-width": 8
        },
        "paint": {
            "text-color": "hsl(100, 100%, 20%)",
            "text-halo-color": "hsl(0, 0%, 100%)",
            "text-halo-width": 0.5,
            "text-halo-blur": 0.5
        },
        "interactive": true
    }, {
        "id": "poi-scalerank1",
        "type": "symbol",
        "source": "china",
        "source-layer": "gis_osm_pois_free_1",
        "minzoom": 13,
        "layout": {
            "text-line-height": 1.1,
            "text-size": {
                "base": 1,
                "stops": [
                    [
                        10,
                        11
                    ],
                    [
                        18,
                        14
                    ]
                ]
            },
            "icon-image": {
                "stops": [
                    [
                        13,
                        "{fclass}-11"
                    ],
                    [
                        14,
                        "{fclass}-15"
                    ]
                ]
            },
            "text-max-angle": 38,
            "symbol-spacing": 250,
            "text-font": [
                "Microsoft YaHei"
            ],
            "text-padding": 2,
            "text-offset": [
                0,
                0.65
            ],
            "text-rotation-alignment": "viewport",
            "text-anchor": "top",
            "text-field": "{name}",
            "text-letter-spacing": 0.01,
            "text-max-width": 8
        },
        "paint": {
            "text-color": "hsl(26, 25%, 32%)",
            "text-halo-color": "hsl(0, 0%, 100%)",
            "text-halo-width": 0.5,
            "text-halo-blur": 0.5
        },
        "interactive": true
    }, {
        "id": "airport-label",
        "type": "symbol",
        "source": "china",
        "source-layer": "gis_osm_transport_free_1",
        "filter": [
            "==",
            "fclass",
            "airport"
        ],
        "minzoom": 9,
        "layout": {
            "text-line-height": 1.1,
            "text-size": {
                "base": 1,
                "stops": [
                    [
                        10,
                        12
                    ],
                    [
                        18,
                        18
                    ]
                ]
            },
            "icon-image": {
                "stops": [
                    [
                        12,
                        "airport-11"
                    ],
                    [
                        13,
                        "airport-15"
                    ]
                ]
            },
            "symbol-spacing": 250,
            "text-font": [
                "Microsoft YaHei",
            ],
            "text-padding": 2,
            "text-offset": [
                0,
                0.75
            ],
            "text-rotation-alignment": "viewport",
            "text-anchor": "top",
            "text-field": {
                "stops": [
                    [
                        11,
                        "{ref}"
                    ],
                    [
                        12,
                        "{name}"
                    ]
                ]
            },
            "text-letter-spacing": 0.01,
            "text-max-width": 9
        },
        "paint": {
            "text-color": "hsl(230, 48%, 44%)",
            "text-halo-color": "hsl(0, 0%, 100%)",
            "text-halo-width": 0.5,
            "text-halo-blur": 0.5
        },
        "interactive": true
    },
];