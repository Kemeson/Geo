// Sedes Municipais

var markersNot = L.markerClusterGroup();
console.log(not1);

var not = L.geoJSON(not1, {
    /*pointToLayer: function (feature, latlng) {
        switch (feature.properties.TP_GESTAO) {
            case 'M': return L.marker(latlng, {icon: redIcon});
            case 'E': return L.marker(latlng, {icon: VerdeIcon});
            case 'D': return L.marker(latlng, {icon: CinzaIcon});
        }
    },*/
    onEachFeature: function (geom, layer) {
      layer.bindPopup('<h6><b>Casos Notificados - Dengue</b></h6><p><b>Coordenadas:</b> '+geom.properties.coordenadas+'<br><b>Endereço:</b> '+geom.properties.endereco+'<br><b>Ano:</b> '+geom.properties.nu_ano+'</p>');
    }
  });

  markersNot.addLayer(not);