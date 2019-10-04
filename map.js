mapboxgl.accessToken = "pk.eyJ1IjoieGtldmluNTU2NngiLCJhIjoiY2sxMzJ4NXFwMDU2dTNjcnNibDlrdjBnYyJ9.Uk7sDJWQ1WbUFBAbN9L8cg";
let map = new  mapboxgl.Map({
  container: 'map',
 center: [144.9648731,-37.8182711],
 zoom: 16,
 style: 'mapbox://styles/mapbox/streets-v9'

});
	let marker = new mapboxgl.Marker({ "color": "#FF8C00" });

let dropoffs = turf.featureCollection([]);
let locations = [
	{
		coordinates: [145.133934, -37.910572],
		description: 'Faculty of Information Technology'
	},
	{
		coordinates: [145.1338553, -37.9092552],
		description: 'Faculty of Engineering'
	},
	{
		coordinates: [145.132676, -37.913843],
		description: 'Learning and Teaching Building'
	},
	{
		coordinates: [145.137224, -37.914594],
		description: 'Multi-level Car Parking'
	}
];
for (let i = 0; i < locations.length; i++)
{
	let location = locations[i];
    	let popup = new mapboxgl.Popup({ offset: 45});

	marker.setLngLat(location.coordinates);


	popup.setText(location.description);

	marker.setPopup(popup)

	// Display the marker.
	marker.addTo(map);

	// Display the popup.
	popup.addTo(map);
}
let object = {
type: "geojson",
data: {
type: "Feature",
properties: {},
geometry: {
type: "LineString",
coordinates: []
}
}
};
map.on('click', function (e) {
	 // gives you coorindates of the location where the map is clicked

   map.addLayer({
     id: 'dropoffs-symbol',
     type: 'symbol',
     source: {
       data: dropoffs,
       type: 'geojson'
     },
     layout: {
       'icon-allow-overlap': true,
       'icon-ignore-placement': true,
       'icon-image': 'marker-15',
     }
   });
   newDropoff(map.unproject(e.point));
    updateDropoffs(dropoffs);


});

function panToClayton(){

  let monashClayton = [145.1343136, -37.9110467];
	map.panTo(monashClayton);
}
function showPath(){
  removeLayerWithId('polygon')
  for(let i = 0; i < locations.length; i++)
  {
  object.data.geometry.coordinates.push(locations[i].coordinates);
  }

  map.addLayer({
  id: "routes",
  type: "line",
  source: object,
  layout: { "line-join": "round", "line-cap": "round" },
  paint: { "line-color": "#888", "line-width": 6 }
  });
}
function showPolygon(){
  removeLayerWithId('routes')
  let object = {
type: 'geojson',
data: {
type: 'Feature',
geometry: {
type: 'Polygon',
coordinates: [[]]
}
}
};

	for(let i = 0; i < locations.length; i++)
	{
		object.data.geometry.coordinates[0][i] = locations[i].coordinates;
	}

	// adding the first location again to the last
	 object.data.geometry.coordinates[0][locations.length] = locations[0].coordinates;

	map.addLayer({
		id: 'polygon',
		type: 'fill',
		source: object,
		layout: {},
		paint: {
			'fill-color': '#088',
			'fill-opacity': 0.8
		}
		});
}
function removeLayerWithId(idToRemove)
{
	let hasPoly = map.getLayer(idToRemove)
	if (hasPoly !== undefined)
	{
		map.removeLayer(idToRemove)
		map.removeSource(idToRemove)
	}
}
function newDropoff(coords) {
  // Store the clicked point as a new GeoJSON feature with
  // two properties: `orderTime` and `key`
  var pt = turf.point(
    [coords.lng, coords.lat],
    {
      orderTime: Date.now(),
      key: Math.random()
    }
  );
  dropoffs.features.push(pt);
  new mapboxgl.Popup();

  marker.setLngLat([coords.lng, coords.lat]);

}

function updateDropoffs(geojson) {
  map.getSource('dropoffs-symbol')
    .setData(geojson);
}
