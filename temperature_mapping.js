(function () {
    var tempLayer = new L.layerGroup()

    var testWMS = "https://ogcie.iblsoft.com/metocean/wms"

    tempLayer.addLayer(L.tileLayer.wms(testWMS, {
        layers: 'foreground-lines',
        format: 'image/png',
        transparent: true,
        crs: L.CRS.EPSG4326
    }));

    var testLayer = L.tileLayer.wms(testWMS, {
        layers: 'gfs-temperature-isbl', // isobaric levels, or -agl for above ground levels
        format: 'image/png',
        transparent: true,
        opacity: 0.3,
        crs: L.CRS.EPSG4326,
        attribution: 'OGC MetOcean DWG Best Practice Example, IBL Software Engineering'
    });
    var proxy = 'proxy';
    var testTimeLayer = L.timeDimension.layer.wms(testLayer, {
        proxy: proxy,
        updateTimeDimension: true,
    });

    tempLayer.addLayer(testTimeLayer);

    var testLegend = L.control({
        position: 'topright'
    });


    testLegend.onAdd = function (map) {
        var src = testWMS + "?SERVICE=WMS&VERSION=1.3.0&REQUEST=GetLegendGraphic&LAYER=gfs-temperature-isbl&STYLE=default";
        var div = L.DomUtil.create('div', 'info legend');
        div.innerHTML +=
            '<img src="' + src + '" alt="legend">';
        return div;
    };

    testLegend.addTo(map)

    var htmlTemp = "<font color='black'> Temperature </font>"
    layerControl.addOverlay(tempLayer, htmlTemp)
    map.addLayer(tempLayer)
})();
