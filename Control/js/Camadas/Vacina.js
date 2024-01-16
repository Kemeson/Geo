var markersRef_sim = L.markerClusterGroup();


var ref_sim1 = L.geoJSON(ref_sim, {
    pointToLayer: function (geom, latlng) {
        return L.marker(latlng, {icon: RoxoIcon});
    },
    onEachFeature: function (geom, layer) {
      layer.bindPopup('<h6><b>Reforço - Sim</b></h6><p><b>Paciente:</b> '+geom.properties.paciente_id+'<br><b>Dose 1:</b> '+geom.properties.d1+'<br><b>Dose 2:</b> '+geom.properties.d2+'<br><b>Reforço:</b> '+geom.properties.ref+'</p>');
    }
  });

  markersRef_sim.addLayer(ref_sim1);


  var markersRef_null = L.markerClusterGroup();


  var ref_null1 = L.geoJSON(ref_null, {
      pointToLayer: function (geom, latlng) {
          return L.marker(latlng, {icon: VerdeIcon});
      },
      onEachFeature: function (geom, layer) {
        layer.bindPopup('<h6><b>Reforço - Não</b></h6><p><b>Paciente:</b> '+geom.properties.paciente_id+'<br><b>Dose 1:</b> '+geom.properties.d1+'<br><b>Dose 2:</b> '+geom.properties.d2+'<br><b>Reforço:</b> '+geom.properties.ref+'</p>');
      }
    });
  
    markersRef_null.addLayer(ref_null1);