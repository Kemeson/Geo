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
        },
    ]
  }
  
  
  var contr = L.control.layers.tree(baseTree, overlaysTree, {position: "topleft", collapsed: false}).addTo(map);