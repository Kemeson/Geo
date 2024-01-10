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
        {
          label: '<b>Macro Áreas</b>',
          collapsed: false,
          children: [
              { label: 'Macro Áreas', layer: macroAreas1 },    
          ]
        }, {
          label: '<b>Base Cartográfica</b>',
          collapsed: false,
          children: [
              { label: 'Sedes Municipais', layer: sedesMunic },
              { label: 'Limites Municipais', layer: limitesMunic },
              { label: 'Rodovias', layer: rodovia },
        ]
        }, {
          label: '<b>Estabelecimentos de Saúde</b>',
          collapsed: false,
          children: [
              { label: 'Estabelecimentos de Saúde', layer: markersUs },
        ]
        },
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