$(function () {
    $.ajaxSetup({
        beforeSend: function (xhr) {
            if (xhr.overrideMimeType) {
                xhr.overrideMimeType("application/json");
            }
        }
    });

    var fadIcon = L.icon({
        iconUrl: './images/dot_yellow.png',
        iconSize: [12, 12],
        iconAnchor: [0, 0],
        popupAnchor: [6, 6]
    });

    var fadLayer = new L.layerGroup();

    $.getJSON('./data/FAD.json', function (data) {
        $.each(data.features, function (i, feature) {
            if (feature.geometry != null) {
                var marker = L.marker(feature.geometry.coordinates.reverse(), { icon: fadIcon }).bindPopup(feature.properties.name + '<br>' + `<a href="/fad/${feature.properties.objectid}?${feature.properties.latitude}&${feature.properties.longitude}" target="blank">INFO</a>`)
                fadLayer.addLayer(marker)
            }
        })
    })
    htmlFad = '<font color="red">Fad layer</font>'
    layerControl.addOverlay(fadLayer, htmlFad);
    map.addLayer(fadLayer);
});