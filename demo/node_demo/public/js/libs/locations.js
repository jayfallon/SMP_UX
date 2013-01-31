

//holman maps
$(function(){
	map1 = new GMaps({
		div: '#holman_map',
		lat: 36.56575,
		lng: -121.916057,
		height: '250px'
	});
	map1.addMarker({
		lat: 36.56575,
		lng: -121.916057,
		title: 'Holman Ranch'
	});
});


