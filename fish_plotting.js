
$(function(){
    $.getJSON('fish.json',function(data){
        console.log('successful loading fish.json');
        $.each(data.fish, function(i, fish) {
            L.marker([fish.latitude, fish.longitude])
                .addTo(map)
                .bindPopup(fish.name.join())
                .openPopup();

        })

    })
});