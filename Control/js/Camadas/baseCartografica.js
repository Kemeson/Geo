
// Sedes Municipais

var sedesMunic = L.geoJSON(sedesMunic1, {
    pointToLayer: function (geom, latlng) {
      if (geom.properties.nome == 'Boa Vista') {
        return L.marker(latlng, {icon: redIcon});
      }
      else {
        return L.marker(latlng, {icon: RoxoIcon});
      }
    },
    onEachFeature: function (geom, layer) {
      layer.bindPopup('<h6><b>Sedes Municipais</b></h6><p><b>Geocódigo:</b> '+geom.properties.geocodigo+'<br><b>Nome:</b> '+geom.properties.nome+'<br><b>Tipo:</b> '+geom.properties.tipocidade+'</p>');
    }
  });

  // Limites Municipais

  var limitesMunic = L.geoJSON(limitesMunic1, {
    color: "black",
    opacity: "1.0",
    fillOpacity: "0",
    weight: 1,
    onEachFeature: function (geom, layer) {
      layer.bindPopup('<h6><b>Limites Municipais</b></h6><p><b>Geocódigo:</b> '+geom.properties.geocodigo+'<br><b>Nome:</b> '+geom.properties.nome+'<br><b>Área:</b> '+geom.properties.area_ha.toLocaleString('pt-BR', {minimumFractionDigits: 4,maximumFractionDigits: 4})+' ha.</p>');
    }
  });

  map.addLayer(limitesMunic);


  // Rodovias

  var rodovia = L.geoJSON(rodovia1, {
    style: function(feature) {
      switch (feature.properties.administra) {
          case 'Federal': return {color: "red", weight: 2};
          case 'Estadual': return {color: "#32CD32", weight: 2};
          case 'Municipal': return {color: "black", weight: 2};
      }
    },
    onEachFeature: function (geom, layer) {
      layer.bindPopup('<h6><b>Rodovias</b></h6><p><b>Nome:</b> '+geom.properties.codtrechor+'<br><b>Jurisdição:</b> '+geom.properties.jurisdicao+'<br><b>Administração:</b> '+geom.properties.administra+'<br><b>Revestimento:</b> '+geom.properties.revestimen+'<br><b>Operacional:</b> '+geom.properties.operaciona+'<br><b>Situação:</b> '+geom.properties.situacaofi+'<br><b>Tráfego:</b> '+geom.properties.trafego+'</p>');
    }
  });
