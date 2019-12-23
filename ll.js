var map = L.map('map', {
    center: [42.961903,47.549033],
    zoom: 13
});
var osm = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
map.addLayer(osm);
var layerGroup = L.layerGroup().addTo(map);

green_icon_tooltip = L.tooltip({
    direction : 'left',
    permanent : true,
    //offset: L.point(-17, -35),
    offset: L.point(0, 0),
    opacity: 1,
    className: 'tt-css',
})







marker = L.marker([42.959350,47.552572], {  icon: green_icon } ).bindPopup('text marker 1');
marker.bindTooltip(green_icon_tooltip);
marker.setTooltipContent('<img src="icons/net.png" width=20/><img src="icons/220.png" width=20/>');
//marker.toggleTooltip()
//marker.unbindTooltip()

marker.addTo(layerGroup)

// setInterval(function() {
//     marker.toggleTooltip()
// },
// 1000);

odd = true;
setInterval(function() {
    if (odd) {
       marker.openTooltip();
   } else {
       marker.closeTooltip();
   }
   odd=!odd;
   console.log(odd);

},
1000);
