mapboxgl.accessToken = 'pk.eyJ1IjoiaW5maW5pdHlrYWkiLCJhIjoiY2swemU1dmJzMDAyazNnbnR2Y2t5M3p6YiJ9.x2eR57RbO3WuXy5zsMV6FA';
let map = new mapboxgl.Map({
  container: 'map',
  center: [144.9648731,-37.8182711],
  zoom: 8,
  style: 'mapbox://styles/mapbox/streets-v9'
});
;


/*function setDeparture()
{
let markers = [];
  let locations=
  {
      lon:[],
      lat:[],
      name:[]
  };
  for(let j=0;j<JSON.parse(localStorage.getItem("portInformation")).name.length;j++)
  {
  if (document.getElementById("departure").value == JSON.parse(localStorage.getItem("portInformation")).name[j])
  {
        locations.lon.push(JSON.parse(localStorage.getItem("portInformation")).lng[j]);
        locations.lat.push(JSON.parse(localStorage.getItem("portInformation")).lat[j]);
        locations.name.push(JSON.parse(localStorage.getItem("portInformation")).name[j]);
        let marker = new mapboxgl.Marker({ "color": "#FF8C00" });
        marker.setLngLat([locations.lon[0], locations.lat[0]]);
        let popup = new mapboxgl.Popup({ offset: 45});
        popup.setText(locations.name[0].toString());
        marker.setPopup(popup)
        // Display the marker.
        marker.addTo(map);
        // Display the popup.
        popup.addTo(map);
        markers.push(marker);
      }
    }
    if (locations.lon.length == 0)
    {
      alert('Please insert a valid departure port name or type "Other"');
    }
}
*/



function findAPIPort(nameOfPort)
{
let portFound;
let allAPIPorts = JSON.parse(localStorage.getItem('portInformation')).name;
let locations=
{

    lon:[],
    lat:[],
    name:[],
    country:[],
    size: [],
    type: [],
    locprecision: []
};

portFound = allAPIPorts.findIndex(
    function(arrayItem)
    {
        return arrayItem == nameOfPort;
    }
  )

if (portFound !== undefined)
{
  locations.lon.push(JSON.parse(localStorage.getItem("portInformation")).lng[portFound]);
  locations.lat.push(JSON.parse(localStorage.getItem("portInformation")).lat[portFound]);
  locations.name.push(JSON.parse(localStorage.getItem("portInformation")).name[portFound]);
  locations.country.push(JSON.parse(localStorage.getItem("portInformation")).country[portFound]);
  locations.size.push(JSON.parse(localStorage.getItem("portInformation")).size[portFound]);
  locations.type.push(JSON.parse(localStorage.getItem("portInformation")).type[portFound]);
  locations.locprecision.push(JSON.parse(localStorage.getItem("portInformation")).locprecision[portFound]);

  let marker = new mapboxgl.Marker({ "color": "#FF8C00" });
  marker.setLngLat([locations.lon[0], locations.lat[0]]);

  let popup = new mapboxgl.Popup({ offset: 45});
  popup.setText(locations.name[0].toString());

  marker.setPopup(popup)

  // Display the marker.
  marker.addTo(map);

  // Display the popup.
  popup.addTo(map);

  currentMarkers.push(marker);

  if (localStorage.getItem('portCoord') == null)
  {

    localStorage.setItem('portCoord', JSON.stringify(locations));

  }
  else if (localStorage.getItem('portCoord') !== null && JSON.parse(localStorage.getItem('portCoord')).lon.length >= 2)
  {
    localStorage.removeItem('portCoord');
    localStorage.setItem('portCoord', JSON.stringify(locations));
  }

  else if (localStorage.getItem('portCoord') !== null && JSON.parse(localStorage.getItem('portCoord')).lon.length < 2)
  {

    let object = JSON.parse(localStorage.getItem('portCoord'));

    object.lon.push(locations.lon[0]);
    object.lat.push(locations.lat[0]);
    object.name.push(locations.name[0]);
    object.country.push(locations.country[0])
    localStorage.setItem('portCoord', JSON.stringify(object));

  }


}

else if ((nameOfPort == 'other' || nameOfPort == 'Other' )&& portFound == undefined)
{
  let other_lng, other_lat, other_name, other_country, other_type, other_size, other_locPrec;

  if (document.getElementById('depPort') !== null)
  {
   other_lng = document.getElementById('depLng').value;
   other_lat = document.getElementById('depLat').value;
   other_name = document.getElementById('depPort').value;
   other_country = document.getElementById('depCountry').value;
   other_size = document.getElementById('depSize').value;
   other_type = document.getElementById('depType').value;
   other_locPrec = document.getElementById('depLocPrec').value;
  }

  else if (document.getElementById('desPort') !== null)
  {
    other_lng = document.getElementById('desLng').value;
    other_lat = document.getElementById('desLat').value;
    other_name = document.getElementById('desPort').value;
    other_country = document.getElementById('desCountry').value;
    other_size = document.getElementById('desSize').value;
    other_type = document.getElementById('desType').value;
    other_locPrec = document.getElementById('desLocPrec').value;
  }

    locations.lon.push(other_lng);
    locations.lat.push(other_lat);
    locations.name.push(other_name);
    locations.country.push(other_country);
    locations.size.push(other_size);
    locastions.type.push(other_type);
    locations.locprecision.push(other_locPrec)

  if (localStorage.getItem('portCoord') == null)
  {

    localStorage.setItem('portCoord', JSON.stringify(locations));

  }
  else if (localStorage.getItem('portCoord') !== null && JSON.parse(localStorage.getItem('portCoord')).lon.length >= 2)
  {
    localStorage.removeItem('portCoord');
    localStorage.setItem('portCoord', JSON.stringify(locations));
  }

  else if (localStorage.getItem('portCoord') !== null && JSON.parse(localStorage.getItem('portCoord')).lon.length < 2)
  {

    let object = JSON.parse(localStorage.getItem('portCoord'));

    object.lon.push(locations.lon[0]);
    object.lat.push(locations.lat[0]);
    object.name.push(locations.name[0]);
    object.country.push(locations.country[0]);
    object.type.push(locations.type[0]);
    object.size.push(locations.size[0]);
    object.locprecision.push(locations.locprecision[0])
    localStorage.setItem('portCoord', JSON.stringify(object));

  }
}

else
{
  alert('Please insert a valid departure port name or type "Other"');
}

}


///////
/*function setDestination()
{
  let locations=
  {
      lon:[],
      lat:[],
      name:[]
  }
  for(let j=0;j<JSON.parse(localStorage.getItem("portInformation")).name.length;j++)
  {
  if (document.getElementById("destination").value == JSON.parse(localStorage.getItem("portInformation")).name[j])
  {
        locations.lon.push(JSON.parse(localStorage.getItem("portInformation")).lng[j]);
        locations.lat.push(JSON.parse(localStorage.getItem("portInformation")).lat[j]);
        locations.name.push([JSON.parse(localStorage.getItem("portInformation")).name[j]])
        let marker = new mapboxgl.Marker({ "color": "#FF8C00" });
        marker.setLngLat([locations.lon[0], locations.lat[0]]);
        let popup = new mapboxgl.Popup({ offset: 45});
        popup.setText(locations.name[0].toString());
        marker.setPopup(popup)
        // Display the marker.
        marker.addTo(map);
        // Display the popup.
        popup.addTo(map);
      }
    }
    if (locations.lon.length == 0)
    {
      alert('Please insert a valid destination port name or type "Other" ');
    }
}
*/
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

let currentMarkers=[];
let wayPointslat=[];
let wayPointslng=[];


function mapping(){
wayPointslat.push((JSON.parse(localStorage.getItem("portCoord"))).lat[0])
wayPointslng.push((JSON.parse(localStorage.getItem("portCoord"))).lon[0])
object.data.geometry.coordinates.push([JSON.parse(localStorage.getItem("portCoord")).lon[0],JSON.parse(localStorage.getItem("portCoord")).lat[0]])
console.log(wayPointslat+","+wayPointslng)
  map.on('click', function (e)
  {
    let earthRadius = 6371e3; // metres earth radius
    let d =0
    object.data.geometry.coordinates.push([JSON.stringify(e.lngLat.lng),JSON.stringify(e.lngLat.lat)]);
    let markers = new mapboxgl.Marker({ "color": "#FF8C00" });
    markers.setLngLat([JSON.stringify(e.lngLat.lng),JSON.stringify(e.lngLat.lat) ]);
    // Display the marker.
    markers.addTo(map);
    wayPointslat.push(e.lngLat.lat)
    wayPointslng.push(e.lngLat.lng)
    currentMarkers.push(markers);
    console.log(wayPointslat)
    })
}

function showRoute(){
  object.data.geometry.coordinates.push([JSON.parse(localStorage.getItem("portCoord")).lon[1],JSON.parse(localStorage.getItem("portCoord")).lat[1]])
  map.addLayer({
  id: "routes",
  type: "line",
  source: object,
  layout: { "line-join": "round", "line-cap": "round" },
  paint: { "line-color": "#888", "line-width": 6 }
  });
}

function reset()
{
  removeLayerWithId('routes')
  if (currentMarkers!==null) {
      for (var i = 0; i < currentMarkers.length; i++) {
        currentMarkers[i].remove();
        object.data.geometry.coordinates.pop();
        wayPointslat.pop()
        wayPointslng.pop()
      }
}
}

function toRadians(value)
{
  return (value)*Math.PI/180
}

function calculateDistance()
{
  let earthRadius = 6371e3; // metres earth radius
  let d =0

  wayPointslat.push((JSON.parse(localStorage.getItem("portCoord"))).lat[1])
  wayPointslng.push((JSON.parse(localStorage.getItem("portCoord"))).lon[1])
  console.log(wayPointslat.length)
  for(i=0;i<wayPointslat.length-1;i++)
  {
    let lattitude1 = wayPointslat[i]
    let lattitude2 = wayPointslat[i+1]
    let longitude1=wayPointslng[i]
    let longitude2=wayPointslng[i+1]
    let difflattitude=toRadians((lattitude2-lattitude1))
    let difflongitude=toRadians((longitude2-longitude1));
    let a = Math.sin(difflattitude/2) * Math.sin(difflattitude/2) +(Math.cos(toRadians(lattitude1)) * Math.cos(toRadians(lattitude2)) *Math.sin(difflongitude/2) * Math.sin(difflongitude/2));

    console.log(earthRadius)
    console.log(a)
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    console.log(c)
     d += earthRadius * c;


  }
  localStorage.setItem('routeDistance', JSON.stringify(d))
      return d;

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
