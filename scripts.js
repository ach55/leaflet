// halifax coordinates
// var map = L.map('map').setView([44.6488, -63.5752], 13);

// code for basic map
// L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     maxZoom: 19,
//     attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
// }).addTo(map);

// code for map search
var map = L.map('map').setView([0, 0], 2);

L.tileLayer('https://{s}.tile.osm.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.Control.geocoder().addTo(map);

// code for map marker
var osm = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
        "&copy; <a href='https://openstreetmap.org/copyright'> Openstreet map</a> contributors",
});

osm.addTo(map);

var marker = L.marker([44.6488, -63.5752], {
    draggable: true, // defaults to false
    title: "This is hover text for marker",
    opacity: 0.5,
}).addTo(map).bindPopup("<h1> Halifax, Nova Scotia </h1> <p> You are in Halifax City Hall! </p>").openPopup();

