const map = L.map('map').setView([21.3069, -157.8583], 10);
L.tileLayer('http://{s}.tile.stamen.com/terrain/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

const request = (method, url, callback) => {
    const oReq = new XMLHttpRequest();
    oReq.addEventListener('load', ()=> {
    const data = JSON.parse(this.responseText);
    return callback.bind(this)(data);
    });
    oReq.open(method, url);
    oReq.send();
    return oReq;
}
