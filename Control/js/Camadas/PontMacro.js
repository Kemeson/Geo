var pontMacros1 = L.geoJSON(pontMacros, {
    pointToLayer: function (geom, latlng) {
        return L.marker(latlng, {icon: RoxoIcon});
    },
    onEachFeature: function (geom, layer) {
    layer.bindPopup('<h6><b>UBS</b></h6><p><b>Nome:</b> '+geom.properties.Name+'</p>');
    }
});