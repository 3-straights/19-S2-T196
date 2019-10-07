mapboxgl.accessToken = 'pk.eyJ1IjoiaW5maW5pdHlrYWkiLCJhIjoiY2swemU1dmJzMDAyazNnbnR2Y2t5M3p6YiJ9.x2eR57RbO3WuXy5zsMV6FA';
let map = new mapboxgl.Map({
  container: 'map',
  center: [144.9648731,-37.8182711],
  zoom: 16,
  style: 'mapbox://styles/mapbox/streets-v9'
});
let locations=[]
;
for (let j=0;j<JSON.parse(localStorage.getItem("portInformation")).name.length;j++)
    {
         locations=[
            {
                coordinates:[JSON.parse(localStorage.getItem("portInformation")).lng[j],JSON.parse(localStorage.getItem("portInformation")).lat[j]],
                name:JSON.parse(localStorage.getItem("portInformation")).name[j]
            }
        ]
        let marker=new mapboxgl.Marker({"color":"#FF8C00"});
          	let popup = new mapboxgl.Popup({ offset: 45});

      	marker.setLngLat(locations.coordinates);


      	popup.setText(locations[j].name);

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
