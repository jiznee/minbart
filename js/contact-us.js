var map;
var latLng;
var mapOptions;
var marker;
var style;
var markerIcon;

function initMap() {
	latLng = {lat: 24.4522524, lng: 54.5342822};
	style = [{"stylers":[{"saturation":-100}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#0099dd"}]},{"elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"color":"#aadd55"}]},{"featureType":"road.highway","elementType":"labels","stylers":[{"visibility":"on"}]},{"featureType":"road.arterial","elementType":"labels.text","stylers":[{"visibility":"on"}]},{"featureType":"road.local","elementType":"labels.text","stylers":[{"visibility":"on"}]},{}];
	markerIcon = { url: 'images/contact-us/map-pin.png' };
	mapOptions = {
		center: latLng,
		zoom: 13,
		styles: style,
		scrollwheel: false
	};
	map = new google.maps.Map(document.getElementById('map'), mapOptions);
	marker = new google.maps.Marker({
		position: latLng,
		animation: google.maps.Animation.BOUNCE,
		icon: markerIcon,
		map: map,
		url: 'https://www.google.com.ph/maps/dir/\'\'/minbart/@24.4522524,54.5342822,12z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x3e5e45f6d5cfc2c9:0x3e4cc3a1ef178af4!2m2!1d54.6043226!2d24.4522685'
	});
	google.maps.event.addListener(marker, 'click', function() {
		window.open(this.url, '_blank');
	});
}