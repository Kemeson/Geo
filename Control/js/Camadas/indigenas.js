  // Habitação Indigena Localidades

  var markershabInd_loc = L.markerClusterGroup();

  var habInd_loc1 = L.geoJSON(habInd_loc, {
    pointToLayer: function (geom, latlng) {
        return L.marker(latlng, {icon: CinzaIcon});
    },
    onEachFeature: function (geom, layer) {
      layer.bindPopup('<h6><b>Habitação Indigena Localidades</b></h6><p><b>Nome:</b> '+geom.properties.NOME+'</p>');
    }
  });

  markershabInd_loc.addLayer(habInd_loc1);

 // DSEI

  var dsei1 = L.geoJSON(dsei, {
    style: function(feature) {
      switch (feature.properties.dsei) {
          case 'LESTE DE RORAIMA': return {color: "red", weight: 2};
          case 'MANAUS': return {color: "yellow", weight: 2};
          case 'YANOMAMI': return {color: "blue", weight: 2};
      }
    },
    onEachFeature: function (geom, layer) {
      layer.bindPopup('<h6><b>DSEI</b></h6><p><b>DSEI:</b> '+geom.properties.dsei+'<br><b>UF:</b> '+geom.properties.UF+'</p>');
    }
  });

  console.log(habInd_loc);
  console.log(dsei);