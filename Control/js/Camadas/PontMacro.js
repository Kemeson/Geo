var pontMacros1 = L.geoJSON(pontMacros, {
    pointToLayer: function (geom, latlng) {
        if(geom.properties.Name.includes('ABRIGO')){
            return L.marker(latlng, {icon: RoxoIcon});
        }else{
            return L.marker(latlng, {icon: CinzaIcon});
        }
        
    },
    onEachFeature: function (geom, layer) {
    layer.bindPopup('<h6><b>UBS</b></h6><p><b>Nome:</b> '+geom.properties.Name+'</p>');
    }
});

console.log(pontMacros);