(function() {
    const debrisReportingLayer = new L.layerGroup()

    const reportUrl = "/marine-debris-report";
    const saved_markeres = []

    function getDebris() {
        $.ajax({
            type: "GET",
            url: reportUrl,
            dataType: "json",
            success: function (datas) {
                $.each(datas, function (i, data) {
                    if (!saved_markeres.includes(data.id)) {

                        var fadIcon = L.icon({
                            iconUrl: './proxied_image?url=http://www.marinedebris.engr.uga.edu/' + data.imagefile,
                            iconSize: [30, 30],
                            iconAnchor: [0, 0],
                            popupAnchor: [6, 6]
                        });
                        var marker = L.marker([data.latitude, data.longitude], {icon: fadIcon}).bindPopup(data.description.toLowerCase())
                        debrisReportingLayer.addLayer(marker);

                        saved_markeres.push(data.id)
                    }
                });
            },
        });
    }

    setInterval(getDebris, 1000);


    var htmlDebris = '<font color="red">Found debris</font>'
    layerControl.addOverlay(debrisReportingLayer, htmlDebris);
    map.addLayer(debrisReportingLayer);
})();