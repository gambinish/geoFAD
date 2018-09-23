
$(function(){
    $.ajaxSetup({beforeSend: function(xhr){
            if (xhr.overrideMimeType)
            {
                xhr.overrideMimeType("application/json");
            }
        }
    });

    $.getJSON('FAD_Fish_Aggregating_Devices.json',function(data){
        console.log('successful loading fad.json');
        $.each(data.features, function(i, feature) {
            if (feature.geometry != null) {
                L.marker(feature.geometry.coordinates.reverse())
                    .addTo(mymap)
                    .bindPopup(feature.properties.name)
                    .openPopup();
            }
        })

    }).error(function(){
        console.log('error');
    });
});