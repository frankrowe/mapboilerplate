$(document).ready(function(){

  var map = new L.Map('map', {attributionControl: false}).setView(new L.LatLng(38.35, -76), 8);

  var mapboxURL = 'http://a.tiles.mapbox.com/v3/{{YOUR-MAP-ID}}/{z}/{x}/{y}.png';
  L.tileLayer(mapboxURL, { attribution: 'MD iMAP'}).addTo(map);

});