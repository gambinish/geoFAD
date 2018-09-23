
//DATA LAYERS
// AVISO
$.getJSON('./data/aviso.json', function (data) {
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