
var markersNot19 = L.markerClusterGroup();


var not2019 = L.geoJSON(not19, {
  pointToLayer: function (geom, latlng) {
    return L.marker(latlng, {icon: VerdeIcon});
  },
    onEachFeature: function (geom, layer) {
      layer.bindPopup('<h6><b>Casos Notificados - Dengue</b></h6><p><b>Coordenadas:</b> '+geom.properties.coordenadas+'<br><b>Endereço:</b> '+geom.properties.endereco+'<br><b>Ano:</b> '+geom.properties.nu_ano+'</p>');
    }
  });

  markersNot19.addLayer(not2019);


var markersNot20 = L.markerClusterGroup();


var not2020 = L.geoJSON(not20, {
  pointToLayer: function (geom, latlng) {
    return L.marker(latlng, {icon: VerdeIcon});
  },
    onEachFeature: function (geom, layer) {
      layer.bindPopup('<h6><b>Casos Notificados - Dengue</b></h6><p><b>Coordenadas:</b> '+geom.properties.coordenadas+'<br><b>Endereço:</b> '+geom.properties.endereco+'<br><b>Ano:</b> '+geom.properties.nu_ano+'</p>');
    }
  });

  markersNot20.addLayer(not2020);


var markersNot21 = L.markerClusterGroup();


var not2021 = L.geoJSON(not21, {
  pointToLayer: function (geom, latlng) {
    return L.marker(latlng, {icon: VerdeIcon});
  },
    onEachFeature: function (geom, layer) {
      layer.bindPopup('<h6><b>Casos Notificados - Dengue</b></h6><p><b>Coordenadas:</b> '+geom.properties.coordenadas+'<br><b>Endereço:</b> '+geom.properties.endereco+'<br><b>Ano:</b> '+geom.properties.nu_ano+'</p>');
    }
  });

  markersNot21.addLayer(not2021);


  var markersNot22 = L.markerClusterGroup();


var not2022 = L.geoJSON(not22, {
  pointToLayer: function (geom, latlng) {
    return L.marker(latlng, {icon: VerdeIcon});
  },
    onEachFeature: function (geom, layer) {
      layer.bindPopup('<h6><b>Casos Notificados - Dengue</b></h6><p><b>Coordenadas:</b> '+geom.properties.coordenadas+'<br><b>Endereço:</b> '+geom.properties.endereco+'<br><b>Ano:</b> '+geom.properties.nu_ano+'</p>');
    }
  });

  markersNot22.addLayer(not2022);


  var markersNot23 = L.markerClusterGroup();


  var not2023 = L.geoJSON(not23, {
    pointToLayer: function (geom, latlng) {
      return L.marker(latlng, {icon: VerdeIcon});
    },
      onEachFeature: function (geom, layer) {
        layer.bindPopup('<h6><b>Casos Notificados - Dengue</b></h6><p><b>Coordenadas:</b> '+geom.properties.coordenadas+'<br><b>Endereço:</b> '+geom.properties.endereco+'<br><b>Ano:</b> '+geom.properties.nu_ano+'</p>');
      }
    });
  
    markersNot23.addLayer(not2023);


    var markersNot24 = L.markerClusterGroup();


    var not2024 = L.geoJSON(not24, {
      pointToLayer: function (geom, latlng) {
        return L.marker(latlng, {icon: VerdeIcon});
      },
        onEachFeature: function (geom, layer) {
          layer.bindPopup('<h6><b>Casos Notificados - Dengue</b></h6><p><b>Coordenadas:</b> '+geom.properties.coordenadas+'<br><b>Endereço:</b> '+geom.properties.endereco+'<br><b>Ano:</b> '+geom.properties.nu_ano+'</p>');
        }
      });
    
      markersNot24.addLayer(not2024);





