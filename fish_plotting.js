
$(function(){
    $.ajaxSetup({beforeSend: function(xhr){
            if (xhr.overrideMimeType)
            {
                xhr.overrideMimeType("application/json");
            }
        }
    });

    $.getJSON('fish.json',function(data){
        console.log('successful loading fish.json');
        $.each(data.fish, function(i, fish) {
            L.marker([fish.latitude, fish.longitude])
                .addTo(map)
                .bindPopup(fish.name.join())
                .openPopup();

        })

    }).error(function(){
        console.log('error');
    });
});