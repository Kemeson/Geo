var baseTree = {
    label: '<b>Mapas</b>',
    collapsed: false,
    children: [
        { label: 'Google Satélite', layer: googleSat },
        { label: 'Open Street Map', layer: osm },
    ]
  }
  
  var overlaysTree = {
    label: '<b>Camadas</b>',
    children: [
        /*{
            label: '<b>Macro Áreas</b>',
            collapsed: true,
            children: [
                { label: 'Macro Área 1', layer: macroArea1 },
                { label: 'Macro Área 2', layer: macroArea2 },
                { label: 'Macro Área 3', layer: macroArea3 },
                { label: 'Macro Área 4', layer: macroArea4 },
                { label: "Macro Área 5", layer: macroArea5 },
                { label: 'Macro Área 6', layer: macroArea6 },
                { label: 'Macro Área 7', layer: macroArea7 },
                { label: 'Macro Área 8', layer: macroArea8 },
          ]
        },*/ {
          label: '<b>Base Cartográfica</b>',
          collapsed: false,
          children: [
              { label: 'Sedes Municipais', layer: sedesMunic },
              { label: 'Limites Municipais', layer: limitesMunic },
              { label: 'Localidades', layer: markers1 },
              { label: 'Trecho de Drenagem (1:100.000)', layer: hidrografia },
              { label: "Trecho de Massa D'Água", layer: hidroMasDagua },
              { label: 'Projeto de Assentamento', layer: projAssent },
              { label: 'Glebas', layer: glebas },
        ]
        }, {
          label: '<b>Estabelecimentos de Saúde</b>',
          collapsed: true,
          children: [
              { label: 'Estabelecimentos de Saúde - CNES', layer: markersUs },
              { label: 'Unidade Básica de Saúde - UBS', layer: pontMacros1 },
              { label: 'Abrigos', layer: abrigo1 },
        ]
        },{
            label: '<b>CNES</b>',
            collapsed: true,
            children: [
                { label: 'CNES', layer: markersCnes },
                { label: 'Com Alvará', layer: markersAlvara_sim },
                { label: 'Sem Alvará', layer: markersAlvara_nao },
        ]
        }, {
            label: '<b>Indigenas</b>',
            collapsed: true,
            children: [
                { label: 'DSEI', layer: dsei1 },
                { label: 'Habitação Indigena Localidades', layer: markershabInd_loc },
        ]
        },/* {
            label: '<b>Dengue</b>',
            children: [
                {
                    label: '<b>Notificados</b>',
                    collapsed: true,
                    children: [
                        { label: '2019', layer: markersNot19 },
                        { label: '2020', layer: markersNot20 },
                        { label: '2021', layer: markersNot21 },
                        { label: '2022', layer: markersNot22 },
                        { label: '2023', layer: markersNot23 },
                        { label: '2024', layer: markersNot24 },
                    ]
                },
                {
                    label: '<b>Confirmados</b>',
                    collapsed: true,
                    children: [
                        { label: '2019', layer: markersConf19 },
                        { label: '2020', layer: markersConf20 },
                        { label: '2021', layer: markersConf21 },
                        { label: '2022', layer: markersConf22 },
                        { label: '2023', layer: markersConf23 },
                    ]
                },
                {
                    label: '<b>Mapas de Calor - Confirmados</b>',
                    collapsed: true,
                    children: [
                        { label: '2019', layer: conf19_calor1 },
                        { label: '2020', layer: conf20_calor1 },
                        { label: '2021', layer: conf21_calor1 },
                        { label: '2022', layer: conf22_calor1 },
                        { label: '2023', layer: conf23_calor1 },
                    ]
                }
            ]
        }, {
            label: '<b>Malária</b>',
            children: [
                {
                    label: '<b>Confirmados</b>',
                    collapsed: true,
                    children: [
                        { label: '2023', layer: markersmal_conf23 },
                        { label: '2024', layer: markersmal_conf24 },
                    ]
                },
                {
                    label: '<b>Mapas de Calor - Confirmados</b>',
                    collapsed: true,
                    children: [
                        { label: '2023', layer: mal_conf23_calor1 },
                        { label: '2024', layer: mal_conf24_calor1 },
                    ]
                }
            ]
        },*/
    ]
  }
  
  
  var contr = L.control.layers.tree(baseTree, overlaysTree, {position: "topleft", collapsed: false}).addTo(map);
/*

  const legend = L.control.Legend({
    position: "bottomleft",
    collapsed: false,
    symbolWidth: 24,
    opacity: 1,
    column: 2,
    legends: [{
        label: "Marker1",
        type: "image",
        url: "marker/marker-red.png",
    }, {
        label: "Marker2",
        type: "image",
        url: "marker/purple.png"
    }, {
        label: "Circle",
        type: "circle",
        radius: 6,
        color: "blue",
        fillColor: "#FF0000",
        fillOpacity: 0.6,
        weight: 2,
        layers: [marker],
        inactive: true,
    }, {
        label: "Real line",
        type: "polyline",
        color: "#FF0000",
        fillColor: "#FF0000",
        weight: 2,
        layers: polyline
    }, {
        label: "Dotted line",
        type: "polyline",
        color: "#0000FF",
        fillColor: "#0000FF",
        dashArray: [5, 5],
        weight: 2
    }, {
        label: "Rectangle",
        type: "rectangle",
        color: "#FF0000",
        fillColor: "#FF0000",
        weight: 2
    }, {
        label: "Square",
        type: "polygon",
        sides: 4,
        color: "#FF0000",
        fillColor: "#FF0000",
        weight: 2
    }, {
        label: "Regular triangle",
        type: "polygon",
        sides: 3,
        color: "#FF0000",
        fillColor: "#FF0000",
        weight: 2
    }, {
        label: "Regular polygon",
        type: "polygon",
        sides: 5,
        color: "#FF0000",
        fillColor: "#FF0000",
        weight: 2
    }]
})
.addTo(map);*/