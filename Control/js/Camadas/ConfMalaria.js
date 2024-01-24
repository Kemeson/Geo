  // Malaria 2023

var markersmal_conf23 = L.markerClusterGroup();


var malaria_conf23 = L.geoJSON(mal_conf23, {
    pointToLayer: function (geom, latlng) {
        return L.marker(latlng, {icon: VerdeIcon});
    },
    onEachFeature: function (geom, layer) {
      layer.bindPopup('<h6><b>Casos Confirmados - Malaria 2023</b></h6><p><b>Semana de Notificação:</b> '+geom.properties.SEM_NOTI+'<br><b>Sexo:</b> '+geom.properties.SEXO+'<br><b>Ocupação:</b> '+geom.properties.COD_OCUP+'<br><b>Município de Residência:</b> '+geom.properties.munRes+'</p>');
    }
  });

  markersmal_conf23.addLayer(malaria_conf23);


// Malaria 2024

var markersmal_conf24 = L.markerClusterGroup();


var malaria_conf24 = L.geoJSON(mal_conf24, {
    pointToLayer: function (geom, latlng) {
        return L.marker(latlng, {icon: RoxoIcon});
    },
    onEachFeature: function (geom, layer) {
        layer.bindPopup('<h6><b>Casos Confirmados - Malaria 2024</b></h6><p><b>Semana de Notificação:</b> '+geom.properties.SEM_NOTI+'<br><b>Sexo:</b> '+geom.properties.SEXO+'<br><b>Ocupação:</b> '+geom.properties.COD_OCUP+'<br><b>Município de Residência:</b> '+geom.properties.munRes+'</p>');
    }
  });

  markersmal_conf24.addLayer(malaria_conf24);
  
  
  
  // Malaria 2023 (Calor)

  var mal_conf23_calor = geoJson2heat(mal_conf23, 'nu_ano');

  var mal_conf23_calor1 = new L.heatLayer(mal_conf23_calor, {
      attribution: '',
      interactive: true,
      radius: 15,
      max: 11917,
      minOpacity: 1,
      gradient: {0.4: 'blue', 0.65: 'yellow', 1: 'red'}
  });


  // Malaria 2024 (Calor)

  var mal_conf24_calor = geoJson2heat(mal_conf24, 'nu_ano');

  var mal_conf24_calor1 = new L.heatLayer(mal_conf24_calor, {
      attribution: '',
      interactive: true,
      radius: 15,
      max: 11917,
      minOpacity: 1,
      gradient: {0.4: 'blue', 0.65: 'yellow', 1: 'red'}
  });



    function geoJson2heat(geojson, weight) {
        return geojson.features.reduce(function(heatData, feature) {
            // Verifique se a feature tem coordenadas
            if (feature.geometry && feature.geometry.coordinates) {
                heatData.push([
                    feature.geometry.coordinates[1], // Latitude
                    feature.geometry.coordinates[0], // Longitude
                    feature.properties[weight]        // Peso
                ]);
            }
            return heatData;
        }, []);
    }