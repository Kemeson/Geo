// Sedes Municipais

var markersConf19 = L.markerClusterGroup();


var conf2019 = L.geoJSON(conf19, {
    pointToLayer: function (geom, latlng) {
        return L.marker(latlng, {icon: RoxoIcon});
    },
    onEachFeature: function (geom, layer) {
      layer.bindPopup('<h6><b>Casos Confirmados - Dengue</b></h6><p><b>Coordenadas:</b> '+geom.properties.coordenadas+'<br><b>Endereço:</b> '+geom.properties.endereco+'<br><b>Ano:</b> '+geom.properties.nu_ano+'</p>');
    }
  });

  markersConf19.addLayer(conf2019);


var markersConf20 = L.markerClusterGroup();


var conf2020 = L.geoJSON(conf20, {
    pointToLayer: function (geom, latlng) {
        return L.marker(latlng, {icon: RoxoIcon});
    },
    onEachFeature: function (geom, layer) {
      layer.bindPopup('<h6><b>Casos Confirmados - Dengue</b></h6><p><b>Coordenadas:</b> '+geom.properties.coordenadas+'<br><b>Endereço:</b> '+geom.properties.endereco+'<br><b>Ano:</b> '+geom.properties.nu_ano+'</p>');
    }
  });

  markersConf20.addLayer(conf2020);


var markersConf21 = L.markerClusterGroup();


var conf2021 = L.geoJSON(conf21, {
    pointToLayer: function (geom, latlng) {
        return L.marker(latlng, {icon: RoxoIcon});
    },
    onEachFeature: function (geom, layer) {
      layer.bindPopup('<h6><b>Casos Confirmados - Dengue</b></h6><p><b>Coordenadas:</b> '+geom.properties.coordenadas+'<br><b>Endereço:</b> '+geom.properties.endereco+'<br><b>Ano:</b> '+geom.properties.nu_ano+'</p>');
    }
  });

  markersConf21.addLayer(conf2021);


  var markersConf22 = L.markerClusterGroup();


var conf2022 = L.geoJSON(conf22, {
    pointToLayer: function (geom, latlng) {
        return L.marker(latlng, {icon: RoxoIcon});
    },
    onEachFeature: function (geom, layer) {
      layer.bindPopup('<h6><b>Casos Confirmados - Dengue</b></h6><p><b>Coordenadas:</b> '+geom.properties.coordenadas+'<br><b>Endereço:</b> '+geom.properties.endereco+'<br><b>Ano:</b> '+geom.properties.nu_ano+'</p>');
    }
  });

  markersConf22.addLayer(conf2022);


  var markersConf23 = L.markerClusterGroup();


  var conf2023 = L.geoJSON(conf23, {
    pointToLayer: function (geom, latlng) {
        return L.marker(latlng, {icon: RoxoIcon});
    },
      onEachFeature: function (geom, layer) {
        layer.bindPopup('<h6><b>Casos Confirmados - Dengue</b></h6><p><b>Coordenadas:</b> '+geom.properties.coordenadas+'<br><b>Endereço:</b> '+geom.properties.endereco+'<br><b>Ano:</b> '+geom.properties.nu_ano+'</p>');
      }
    });
  
    markersConf23.addLayer(conf2023);






