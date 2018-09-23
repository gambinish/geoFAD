// Set center location startingCord:
let startingCord = [19.5, -155.6];

// FAD MARKERS

let FAD1 = [19.19833333, -155.94833333];
let FAD2 = [19.385, -155.98666667];
let FAD3 = [19.07666667, -155.95666667];
let FAD4 = [19.28, -155.95166667];
let FAD5 = [19.585, -156.03166667];
let FAD6 = [19.87666667, -156.19333333];
let FAD7 = [19.13, -155.39166667];
let FAD8 = [19.97666667, -154.98333333];
let FAD9 = [20.53333333, -156.26666667];
let FAD10 = [20.40333333, -156.63333333];
let FAD11 = [20.59833333, -157.14166667];
let FAD12 = [20.54833333, -156.15833333];
let FAD13 = [21.34833333, -156.58333333];
let FAD14 = [21.83333333, -158.14666667];
let FAD15 = [20.77333333, -157.81166667]


const fad_BI = [
  {
    "type": "Feature",
    "properties": {
      "objectid": 1,
      "longitude": -155.94833333,
      "latitude": 19.19833333,
      "name": "B",
      "island": "Hawaii"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -155.9483188305245,
        19.19832982859248
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "objectid": 2,
      "longitude": -155.98666667,
      "latitude": 19.385,
      "name": "C",
      "island": "Hawaii"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -155.98665216898803,
        19.38499650365493
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "objectid": 3,
      "longitude": -155.95666667,
      "latitude": 19.07666667,
      "name": "TT",
      "island": "Hawaii"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -155.95665216126244,
        19.076663155876176
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "objectid": 4,
      "longitude": -155.95166667,
      "latitude": 19.28,
      "name": "UU",
      "island": "Hawaii"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -155.9516521656946,
        19.27999649888459
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "objectid": 5,
      "longitude": -156.03166667,
      "latitude": 19.585,
      "name": "VV",
      "island": "Hawaii"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -156.03165217517386,
        19.584996512322768
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "objectid": 6,
      "longitude": -156.19333333,
      "latitude": 19.87666667,
      "name": "OT",
      "island": "Hawaii"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -156.19331885298033,
        19.876663189552705
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "objectid": 7,
      "longitude": -155.39166667,
      "latitude": 19.13,
      "name": "RN",
      "island": "Hawaii"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -155.39165214860301,
        19.12999650527342
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "objectid": 8,
      "longitude": -154.98333333,
      "latitude": 19.97666667,
      "name": "HK",
      "island": "Hawaii"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -154.98331882564565,
        19.976663217330692
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "objectid": 9,
      "longitude": -156.26666667,
      "latitude": 20.53333333,
      "name": "GG",
      "island": "Maui"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -156.26665220110897,
        20.533329887772773
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "objectid": 10,
      "longitude": -156.63333333,
      "latitude": 20.40333333,
      "name": "JJ",
      "island": "Maui"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -156.63331887561674,
        20.40332987508353
      ]
    }
  }];

fad_BI.forEach(function (element) {
  console.log(element.properties.name)

  // L.marker([element.properties.longitude, element.properties.latitude]).addTo(mymap)
  //   .bindPopup(element.properties.name)
  //   .openPopup();
})

// L.marker([50.5, 30.5]).addTo(map);


// Set zoom level:
let zoom = 8;
// Set free map attribution for demo purposes:
let attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
// Set map link resource:
let mapResourceUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
// initialize map
let mymap = L.map('mapid').setView(startingCord, zoom);
// add tile layer - if your map is every greyed out - its because you have not added a tile layer
// chrome has issue with map showing up until scroll or resize of window - known issue
L.tileLayer(mapResourceUrl, { attribution: attribution }).addTo(mymap);
// add a marker

// ADD STARTING MARKER
L.marker(startingCord).addTo(mymap)
  .bindPopup('Aloha!')
  .openPopup();

// ADD FAD MARKERS TO MAP



L.marker(FAD1).addTo(mymap)
  .bindPopup('<a href="<a href="/FAD1_detail" target="blank">FAD1-Detail</a>')
  .openPopup();

L.marker(FAD2).addTo(mymap)
  .bindPopup('FAD2')
  .openPopup();

L.marker(FAD3).addTo(mymap)
  .bindPopup('FAD3')
  .openPopup();

L.marker(FAD4).addTo(mymap)
  .bindPopup('FAD4')
  .openPopup();

L.marker(FAD5).addTo(mymap)
  .bindPopup('FAD5')
  .openPopup();

L.marker(FAD6).addTo(mymap)
  .bindPopup('FAD6')
  .openPopup();

L.marker(FAD7).addTo(mymap)
  .bindPopup('FAD7')
  .openPopup();

L.marker(FAD8).addTo(mymap)
  .bindPopup('FAD8')
  .openPopup();

L.marker(FAD9).addTo(mymap)
  .bindPopup('FAD9')
  .openPopup();

L.marker(FAD10).addTo(mymap)
  .bindPopup('FAD10')
  .openPopup();

// Set circle design options:
let circleDesignOptions = {
  color: 'red',
  radius: 500,
  weight: 5
};
// add a circle
L.circle(startingCord, circleDesignOptions).addTo(mymap);

module.exports();

