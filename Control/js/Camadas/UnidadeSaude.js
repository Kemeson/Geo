// Unidades de Saúde

var markersUs = L.markerClusterGroup();
console.log(us1);

var us = L.geoJSON(us1, {
    pointToLayer: function (feature, latlng) {
        switch (feature.properties.TP_GESTAO) {
            case 'M': return L.marker(latlng, {icon: redIcon});
            case 'E': return L.marker(latlng, {icon: VerdeIcon});
            case 'D': return L.marker(latlng, {icon: CinzaIcon});
        }
    },
    onEachFeature: function (geom, layer) {
      layer.bindPopup('<h6><b>Estabelecimentos de Saúde</b></h6><p><b>Bairro:</b> '+geom.properties.NO_BAIRRO+'<br><b>Nome Fantasia:</b> '+geom.properties.NO_FANTASIA+'<br><b>Nome Logradouro:</b> '+geom.properties.NO_LOGRADOURO+'<br><b>Número Endereço:</b> '+geom.properties.NU_ENDERECO+'<br><b>TP_GESTAO:</b> '+geom.properties.TP_GESTAO+'</p>');
    }
  });

  markersUs.addLayer(us);