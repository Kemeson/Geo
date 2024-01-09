function geoJson2heat(geojson, weight) {
    return geojson.features.map(function(feature) {
        return [
            feature.geometry.coordinates[1],
            feature.geometry.coordinates[0],
            feature.properties[weight]
        ];
    });
}