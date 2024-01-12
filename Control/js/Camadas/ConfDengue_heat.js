  // Camada Jackson (Calor)

  var conf19_calor = geoJson2heat(conf19, 'nu_ano');

  var conf19_calor1 = new L.heatLayer(conf19_calor, {
      attribution: '',
      interactive: true,
      radius: 15,
      max: 11917,
      minOpacity: 1,
      gradient: {0.4: 'blue', 0.65: 'yellow', 1: 'red'}
  });



  // Camada Jackson (Calor)

  var conf20_calor = geoJson2heat(conf20, 'nu_ano');

  var conf20_calor1 = new L.heatLayer(conf20_calor, {
      attribution: '',
      interactive: true,
      radius: 15,
      max: 11917,
      minOpacity: 1,
      gradient: {0.4: 'blue', 0.65: 'yellow', 1: 'red'}
  });



  // Camada Jackson (Calor)

  var conf21_calor = geoJson2heat(conf21, 'nu_ano');

  var conf21_calor1 = new L.heatLayer(conf21_calor, {
      attribution: '',
      interactive: true,
      radius: 15,
      max: 11917,
      minOpacity: 1,
      gradient: {0.4: 'blue', 0.65: 'yellow', 1: 'red'}
  });



  // Camada Jackson (Calor)

  var conf22_calor = geoJson2heat(conf22, 'nu_ano');

  var conf22_calor1 = new L.heatLayer(conf22_calor, {
      attribution: '',
      interactive: true,
      radius: 15,
      max: 11917,
      minOpacity: 1,
      gradient: {0.4: 'blue', 0.65: 'yellow', 1: 'red'}
  });


  // Camada Jackson (Calor)

  var conf23_calor = geoJson2heat(conf23, 'nu_ano');

  var conf23_calor1 = new L.heatLayer(conf23_calor, {
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