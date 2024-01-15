  // Macro Áreas
/*
  var macroAreas1 = L.geoJSON(macroAreas, {
    style: function(feature) {
      var ma = feature.properties.NOME;
      if((ma == 'CAÇARI') || (ma == '05 DE OUTUBRO') || (ma == 'PARAVIANA') || (ma == 'DOS ESTADOS') || (ma == 'CANARINHO') || (ma == 'APARECIDA') || (ma == '31 DE MARÇO') || (ma == 'SÃO PEDRO') || (ma == 'SÃO FRANCISCO') || (ma == 'MECEJANA') || (ma == ' APARECIDA') || (ma == 'SÃO VICENTE') || (ma == 'CALUNGÁ') || (ma == 'CENTRO')){
        return {color: "#f4ef89", weight: 2, fillOpacity: 0.5, Opacity: 1};
      }else if((ma == '13 DE SETEMBRO') || (ma == 'MARECHAL RONDOM') || (ma == 'PRICUMÃ') || (ma == 'LIBERDADE') || (ma == 'BURITIS') || (ma == 'CINTURÃO VERDE') || (ma == 'CENTENÁRIO')){
        return {color: "#7aa9ef", weight: 2, fillOpacity: 0.5, Opacity: 1};
      }else if((ma == 'AEROPORTO') || (ma == 'CAUAMÉ') || (ma == 'JARDIM FLORESTA') || (ma == 'CARANÃ') || (ma == 'SAID SALOMÃO') || (ma == 'PEDRA PINTADA')){
        return {color: "#e27a71", weight: 2, fillOpacity: 0.5, Opacity: 1};
      }else if((ma == 'JARDIM CARANÃ') || (ma == 'UNIÃO') || (ma == 'PISCICULTURA') || (ma == 'SANTA TEREZA') || (ma == 'CIDADE SATÉLITE') || (ma == 'MURILO TEIXEIRA CIDADE') || (ma == undefined)){
        return {color: "#f4c748", weight: 2, fillOpacity: 0.5, Opacity: 1};
      }else if((ma == 'TANCREDO NEVES') || (ma == 'CAIMBÉ') || (ma == 'ASA BRANCA') || (ma == 'JÓQUEI CLUBE') || (ma == 'PROF. ARACELI SOUTO MAIOR') || (ma == 'CAMBARÁ') || (ma == 'NOVA CANAÃ') || (ma == 'OLÍMPICO')){
        return {color: "#6cc19a", weight: 2, fillOpacity: 0.5, Opacity: 1};
      }else if((ma == 'DISTRITO INDUSTRIAL GOV. AQUILINO MOTA DUARTE') || (ma == 'SÃO BENTO') || (ma == 'RAIAR DO SOL') || (ma == 'BELA VISTA') || (ma == 'NOVA CIDADE') || (ma == 'DR. AYRTON ROCHA') || (ma == 'OPERÁRIO')){
        return {color: "#9a7c72", weight: 2, fillOpacity: 0.5, Opacity: 1};
      }else if((ma == 'JARDIM PRIMAVERA') || (ma == 'DR. SÍLVIO LEITE') || (ma == 'ALVORADA') || (ma == 'EQUATORIAL') || (ma == 'Laura Moreira(CIDADÃO E MANAIRA)')){
        return {color: "Purple", weight: 2};
      }else if((ma == 'SANTA CECÍLIA')){
        return {color: "black", weight: 2, fillOpacity: 0.5, Opacity: 1};
      }else{
        return {color: "#f1b2ad", weight: 2, fillOpacity: 0.5, Opacity: 1};
      }
    },
    onEachFeature: function (geom, layer) {
      layer.bindPopup('<h6><b>Macro Áreas</b></h6><p><b>A:</b> '+geom.properties.A+'<br><b>AIS: </b> '+geom.properties.AIS+'<br><b>DECRETO: </b> '+geom.properties.DECRETO+'<br><b>DE_REFE: </b> '+geom.properties.DE_REFE+'<br><b>GEOCODIGO: </b> '+geom.properties.GEOCODIGO+'<br><b>NOME: </b> '+geom.properties.NOME+'<br><b>POPULACAO: </b> '+geom.properties.POPULACAO+'<br><b>ZONA: </b> '+geom.properties.ZONA+'</p>');
    }
  });
*/
  console.log(macro1);

  var macroArea1 = L.geoJSON(macro1, {
    color: "#f4c748", weight: 3, fillOpacity: 0.2, Opacity: 1,
    onEachFeature: function (geom, layer) {
      layer.bindPopup('<h6><b>Macro Área 1</b></h6><p><b>Nome:</b> '+geom.properties.Name+'<br><b>Descrição: </b> '+geom.properties.description+'</p>');
    }
  });

  var macroArea2 = L.geoJSON(macro2, {
    color: "#e27a71", weight: 3, fillOpacity: 0.2, Opacity: 1,
    onEachFeature: function (geom, layer) {
      layer.bindPopup('<h6><b>Macro Área 2</b></h6><p><b>Nome:</b> '+geom.properties.Name+'<br><b>Descrição: </b> '+geom.properties.description+'</p>');
    }
  });

  var macroArea3 = L.geoJSON(macro3, {
    color: "#f4ef89", weight: 3, fillOpacity: 0.2, Opacity: 1,
    onEachFeature: function (geom, layer) {
      layer.bindPopup('<h6><b>Macro Área 3</b></h6><p><b>Nome:</b> '+geom.properties.Name+'<br><b>Descrição: </b> '+geom.properties.description+'</p>');
    }
  });

  var macroArea4 = L.geoJSON(macro4, {
    color: "Purple", weight: 3, fillOpacity: 0.2, Opacity: 1,
    onEachFeature: function (geom, layer) {
      layer.bindPopup('<h6><b>Macro Área 4</b></h6><p><b>Nome:</b> '+geom.properties.Name+'<br><b>Descrição: </b> '+geom.properties.description+'</p>');
    }
  });

  var macroArea5 = L.geoJSON(macro5, {
    color: "#6cc19a", weight: 3, fillOpacity: 0.2, Opacity: 1,
    onEachFeature: function (geom, layer) {
      layer.bindPopup('<h6><b>Macro Área 5</b></h6><p><b>Nome:</b> '+geom.properties.Name+'<br><b>Descrição: </b> '+geom.properties.description+'</p>');
    }
  });

  var macroArea6 = L.geoJSON(macro6, {
    color: "#7aa9ef", weight: 3, fillOpacity: 0.2, Opacity: 1,
    onEachFeature: function (geom, layer) {
      layer.bindPopup('<h6><b>Macro Área 6</b></h6><p><b>Nome:</b> '+geom.properties.Name+'<br><b>Descrição: </b> '+geom.properties.description+'</p>');
    }
  });

  var macroArea7 = L.geoJSON(macro7, {
    color: "#f1b2ad", weight: 3, fillOpacity: 0.2, Opacity: 1,
    onEachFeature: function (geom, layer) {
      layer.bindPopup('<h6><b>Macro Área 7</b></h6><p><b>Nome:</b> '+geom.properties.Name+'<br><b>Descrição: </b> '+geom.properties.description+'</p>');
    }
  });

  var macroArea8 = L.geoJSON(macro8, {
    color: "#9a7c72", weight: 3, fillOpacity: 0.2, Opacity: 1,
    onEachFeature: function (geom, layer) {
      layer.bindPopup('<h6><b>Macro Área 8</b></h6><p><b>Nome:</b> '+geom.properties.Name+'<br><b>Descrição: </b> '+geom.properties.description+'</p>');
    }
  });
  