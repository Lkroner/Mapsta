// Map graphic.
map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('http://{s}.tiles.mapbox.com/v3/lkroner.j9ino1jm/{z}/{x}/{y}.png', {
    maxZoom: 18
}).addTo(map);

var marker = L.marker([51.5, -0.09]).addTo(map);
var popup = L.popup();

var onMapClick = function(event) {
    popup
        .setLatLng(event.latlng)
        .setContent("You clicked the map at " + event.latlng.toString())
        .openOn(map);
}
map.on('click', onMapClick);


// Image Ajax Finder
var findImages = function (event) {
	event.preventDefault();
var ajaxGetImages = $.ajax({
	url: '/',
	data: $(this).serialize(),
	type: 'POST'
})
.done(function(data) {
    $("#image_list").empty().append(data.html);
    
    map.setView([data.latitude, data.longitude], 13);
    var marker = L.marker([data.latitude, data.longitude]).addTo(map);
    
    $(".longitude li p").html(data.longitude);
    $(".latitude li p").html(data.latitude);
  });
};

$('#input').on('submit', findImages);  




