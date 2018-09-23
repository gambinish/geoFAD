function initDemoMap(){
    //stereographic projection

    var map = L.map('map', {maxZoom: 13, minZoom: 1, zoomDelta: 0.25, zoomSnap: 0, maxBounds: [[-180, -270], [180,270]]});
    const satelliteMap = L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
                                {attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community',
    });
    const googleMap = L.tileLayer('http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}',
                                {attribution: 'google'
    });
    const watercolor = L.tileLayer('http://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.{ext}',
                                {attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
                                 subdomains: 'abcd',
    });
    const Esri_OceanBasemap = L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/Ocean_Basemap/MapServer/tile/{z}/{y}/{x}',
                                {attribution: 'Tiles &copy; Esri &mdash; Sources: GEBCO, NOAA, CHS, OSU, UNH, CSUMB, National Geographic, DeLorme, NAVTEQ, and Esri',
    });
    var drawnItems = new L.featureGroup().addTo(map);
    var layerControl = L.control.layers({
        'Esri World Imagery ': satelliteMap.addTo(map),
        'Google': googleMap.addTo(map), 
        'Ocean basemap': Esri_OceanBasemap.addTo(map),
        },
        { 'draw layer': drawnItems },
        { position: 'topleft', collapsed: false }
    )

    L.control.coordinates({
      position:"topright",
      useDMS:true,
      enableUserInput:false,
      labelTemplateLat:"N {y}",
      labelTemplateLng:"E {x}",
      decimals:2,}).addTo(map);
    
    layerControl.addTo(map)

  return {
    map: map,
    layerControl: layerControl
  };
}


var mapStuff = initDemoMap();
  var layerControl = mapStuff.layerControl
  var map = mapStuff.map;
  map.setView([20,-155], 7)