var markersCnes = L.markerClusterGroup();
console.log(cnes);

var cnes1 = L.geoJSON(cnes, {
    pointToLayer: function (geom, latlng) {
        if(geom.properties.alvara == 'Sim'){
            return L.marker(latlng, {icon: VerdeIcon});
        }else{
            return L.marker(latlng, {icon: redIcon});
        }
    },
    onEachFeature: function (geom, layer) {
      layer.bindPopup('<h6><b>CNES</b></h6><p><b>Código CNES:</b> '+geom.properties.CO_CNES+'<br><b>Nome Fantasia:</b> '+geom.properties.NO_FANTASIA+'<br><b>Logradouro:</b> '+geom.properties.NO_LOGRADOURO+'<br><b>Bairro:</b> '+geom.properties.NO_BAIRRO+'<br><b>Número:</b> '+geom.properties.NU_ENDERECO+'<br><b>CNPJ:</b> '+geom.properties.NU_CNPJ+'<br><b>Unidade:</b> '+geom.properties.TP_UNIDADE+'<br><b>Código da Atividade:</b> '+geom.properties.CO_ATIVIDADE+'<br><b>Risco:</b> '+geom.properties.risco+'</p>');
    }
  });

  markersCnes.addLayer(cnes1);



  var markersAlvara_sim = L.markerClusterGroup();
console.log(alvara_sim);

var alvara_sim1 = L.geoJSON(alvara_sim, {
    pointToLayer: function (geom, latlng) {
        return L.marker(latlng, {icon: VerdeIcon});
    },
    onEachFeature: function (geom, layer) {
      layer.bindPopup('<h6><b>CNES - Com Alvará</b></h6><p><b>Código CNES:</b> '+geom.properties.CO_CNES+'<br><b>Nome Fantasia:</b> '+geom.properties.NO_FANTASIA+'<br><b>Logradouro:</b> '+geom.properties.NO_LOGRADOURO+'<br><b>Bairro:</b> '+geom.properties.NO_BAIRRO+'<br><b>Número:</b> '+geom.properties.NU_ENDERECO+'<br><b>CNPJ:</b> '+geom.properties.NU_CNPJ+'<br><b>Unidade:</b> '+geom.properties.TP_UNIDADE+'<br><b>Código da Atividade:</b> '+geom.properties.CO_ATIVIDADE+'<br><b>Risco:</b> '+geom.properties.risco+'</p>');
    }
  });

  markersAlvara_sim.addLayer(alvara_sim1);



  var markersAlvara_nao = L.markerClusterGroup();
console.log(alvara_nao);

var alvara_nao1 = L.geoJSON(alvara_nao, {
    pointToLayer: function (geom, latlng) {
        return L.marker(latlng, {icon: redIcon});
    },
    onEachFeature: function (geom, layer) {
      layer.bindPopup('<h6><b>CNES - Sem Alvará</b></h6><p><b>Código CNES:</b> '+geom.properties.CO_CNES+'<br><b>Nome Fantasia:</b> '+geom.properties.NO_FANTASIA+'<br><b>Logradouro:</b> '+geom.properties.NO_LOGRADOURO+'<br><b>Bairro:</b> '+geom.properties.NO_BAIRRO+'<br><b>Número:</b> '+geom.properties.NU_ENDERECO+'<br><b>CNPJ:</b> '+geom.properties.NU_CNPJ+'<br><b>Unidade:</b> '+geom.properties.TP_UNIDADE+'<br><b>Código da Atividade:</b> '+geom.properties.CO_ATIVIDADE+'<br><b>Risco:</b> '+geom.properties.risco+'</p>');
    }
  });

  markersAlvara_nao.addLayer(alvara_nao1);