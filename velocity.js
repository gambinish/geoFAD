
//DATA LAYERS
// AVISO
$.getJSON('aviso.json', function (data) {
  var velocityLayer1 = L.velocityLayer({
    displayValues: true,
    displayOptions: {
      velocityType: 'Aviso Surface currents',
      displayPosition: 'bottomleft',
      displayEmptyString: 'No current data'
    },
    data: data,
    maxVelocity: 1,
    velocityScale: 0.3
    // colorScale: palette('tol-sq', 10)
  });
  htmlName1 = '<font color="red">Surface Aviso currents from 9-21-2018</font> <a target="_blank" href="https://www.aviso.altimetry.fr/en/data/products/sea-surface-height-products/global/madt-h-uv.html"><img src="dist/info.png" height="15" width="15"></a>'
  layerControl.addOverlay(velocityLayer1, htmlName1);
  map.addLayer(velocityLayer1); //Default display when page loads
});



//  // Set center location startingCord:
//  let startingCord = [19.5, -155.6];

//  // Set zoom level:
//  let zoom = 8;
//  // Set free map attribution for demo purposes:
//  let attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
//  // Set map link resource:
//  let mapResourceUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
//  // initialize map
//  let mymap = L.map('mapid').setView(startingCord, zoom);
//  // add tile layer - if your map is every greyed out - its because you have not added a tile layer
//  // chrome has issue with map showing up until scroll or resize of window - known issue
//  L.tileLayer(mapResourceUrl, { attribution: attribution }).addTo(mymap);
//  // add a marker

//  // ADD STARTING MARKER
//  L.marker(startingCord).addTo(mymap)
//      .bindPopup('Aloha!')
//      .openPopup();


//  // Set circle design options:
//  let circleDesignOptions = {
//    color: 'red',
//    radius: 500,
//    weight: 5
//  };
//  // add a circle
//  L.circle(startingCord, circleDesignOptions).addTo(mymap);