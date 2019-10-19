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



function findAPIPort(nameOfPort)//to check whether we provide the port.
{
let portFound;
let allAPIPorts = JSON.parse(localStorage.getItem('portInformation')).name;//get every port name from local storage
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

portFound = allAPIPorts.findIndex(//finding whether the port is provided
    function(arrayItem)
    {
        return arrayItem == nameOfPort;
    }
  )

if (portFound !== undefined)//if port is listed in the list, extract the corresponding information for departure and arrival port
{
  locations.lon.push(JSON.parse(localStorage.getItem("portInformation")).lng[portFound]);
  locations.lat.push(JSON.parse(localStorage.getItem("portInformation")).lat[portFound]);
  locations.name.push(JSON.parse(localStorage.getItem("portInformation")).name[portFound]);
  locations.country.push(JSON.parse(localStorage.getItem("portInformation")).country[portFound]);
  locations.size.push(JSON.parse(localStorage.getItem("portInformation")).size[portFound]);
  locations.type.push(JSON.parse(localStorage.getItem("portInformation")).type[portFound]);
  locations.locprecision.push(JSON.parse(localStorage.getItem("portInformation")).locprecision[portFound]);
  console.log(locations.lon.length)

  //set marker coordinates
  if (currentMarkers.length==0)
  {
    let inimarker = new mapboxgl.Marker({ "color": "#00ff1e" });
    inimarker.setLngLat([locations.lon[0], locations.lat[0]]);

    //set port name on corresponding popup
    let popup = new mapboxgl.Popup({ offset: 45});
    popup.setText(locations.name[0].toString());

    //set popup on marker
    inimarker.setPopup(popup)

    // Display the marker.
    inimarker.addTo(map);

    // Display the popup.
    popup.addTo(map);

    //for reseting purpose,it will remove the marker one by one later
    currentMarkers.push(inimarker);

  }
  else
  {
    let finmarker = new mapboxgl.Marker({ "color": "#ff0d00" });
    finmarker.setLngLat([locations.lon[0], locations.lat[0]]);

    //set port name on corresponding popup
    let popup = new mapboxgl.Popup({ offset: 45});
    popup.setText(locations.name[0].toString());

    //set popup on marker
    finmarker.setPopup(popup)

    // Display the marker.
    finmarker.addTo(map);

    // Display the popup.
    popup.addTo(map);

    //for reseting purpose,it will remove the marker one by one later
    currentMarkers.push(finmarker);
  }

  //store selected departure and arrival port in local storage
  if (localStorage.getItem('portCoord') == null)//check existance of local storage
  {

    localStorage.setItem('portCoord', JSON.stringify(locations));//set storage for selected departure or arrival port in local storage

  }
  else if (localStorage.getItem('portCoord') !== null && JSON.parse(localStorage.getItem('portCoord')).lon.length >= 2)//if user accidentally press set twice, refresh the storage to the correct one without duplicating information
  {
    localStorage.removeItem('portCoord');
    localStorage.setItem('portCoord', JSON.stringify(locations));
  }

  else if (localStorage.getItem('portCoord') !== null && JSON.parse(localStorage.getItem('portCoord')).lon.length < 2)//as this function is ran twice to store both arrival and departure information.
  {

    let object = JSON.parse(localStorage.getItem('portCoord'));//extract to make the storage contain both initial and final port.

    object.lon.push(locations.lon[0]);
    object.lat.push(locations.lat[0]);
    object.name.push(locations.name[0]);
    object.country.push(locations.country[0])
    localStorage.setItem('portCoord', JSON.stringify(object));

  }


}

else if ((nameOfPort == 'other' || nameOfPort == 'Other' )&& portFound == undefined)//if user input other
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
  alert('Please insert a valid departure port name or type "Other"');// alert user due to error input
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

//for mapping waypoints purpose so it can display the line route
let objects = {
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


map.on('click', function (e)//plot waypoints
{
  objects.data.geometry.coordinates.push([JSON.stringify(e.lngLat.lng),JSON.stringify(e.lngLat.lat)]);
  let markers = new mapboxgl.Marker({ "color": "#FF8C00" });

  //set coordinate for marker
  markers.setLngLat([JSON.stringify(e.lngLat.lng),JSON.stringify(e.lngLat.lat) ]);
  // Display the marker.
  markers.addTo(map);

  wayPointslat.push(e.lngLat.lat)//calculation purpose
  wayPointslng.push(e.lngLat.lng)
  currentMarkers.push(markers);//for reset purpose
  })

function zoom()
{
  map.flyTo({
center: [
(JSON.parse(localStorage.getItem("portCoord")).lon[0]+JSON.parse(localStorage.getItem("portCoord")).lon[1])/2,(JSON.parse(localStorage.getItem("portCoord")).lat[0]+JSON.parse(localStorage.getItem("portCoord")).lat[1])/2],
zoom:2.1,
speed:1.5
});
}



function showRoute(){
//these push and unshift is to add back departure and arrival coordinates for setting the route purpose
  objects.data.geometry.coordinates.unshift([JSON.parse(localStorage.getItem("portCoord")).lon[0].toString(),JSON.parse(localStorage.getItem("portCoord")).lat[0].toString()])
  objects.data.geometry.coordinates.push([JSON.parse(localStorage.getItem("portCoord")).lon[1].toString(),JSON.parse(localStorage.getItem("portCoord")).lat[1].toString()])

//set the route connect the route together
  map.addLayer({
  id: "routes",
  type: "line",
  source: objects,
  layout: { "line-join": "round", "line-cap": "round" },
  paint: { "line-color": "#888", "line-width": 6 }
  });
  //store the coordinates for all waypoints include departure and arrival port for weather purpose
  localStorage.setItem('wayPointsCoordinate',JSON.stringify(objects.data.geometry.coordinates))

}

function reset()//user can press reset to make their decision again
{
  removeLayerWithId('routes')
  if (currentMarkers!==null) {
      for (var i = 0; i < currentMarkers.length; i++) {
        currentMarkers[i].remove();
      }
}
//refresh the datas
currentMarkers=[];
wayPointlng=[];
wayPointslat=[];


}

function resetStorage()//reset storage
{
  localStorage.removeItem('wayPointsCoordinate')
  localStorage.removeItem('routeDistance')
  objects.data.geometry.coordinates=[];
  d=0;
//set everything to empty for new data
  localStorage.setItem('wayPointsCoordinate',JSON.stringify(objects.data.geometry.coordinates))
  localStorage.setItem('routeDistance', JSON.stringify(d))


}


function toRadians(value)//convert degree to radians
{
  return (value)*Math.PI/180
}

function calculateDistance()//to calculate total distance travelled for the cost of fuel purpose and time taken to arrive
{
  let earthRadius = 6371e3; // metres earth radius
  let d =0//distancce travelled

//all the push and unshift is to add the coordinates of departure and arrival port coordinates so the calculation is correct
  wayPointslat.unshift((JSON.parse(localStorage.getItem("portCoord"))).lat[0])
  wayPointslng.unshift((JSON.parse(localStorage.getItem("portCoord"))).lon[0])

  wayPointslat.push((JSON.parse(localStorage.getItem("portCoord"))).lat[1])
  wayPointslng.push((JSON.parse(localStorage.getItem("portCoord"))).lon[1])

  for(i=0;i<wayPointslat.length-1;i++)//formula to calculate the distance
  {
    let lattitude1 = wayPointslat[i]
    let lattitude2 = wayPointslat[i+1]
    let longitude1=wayPointslng[i]
    let longitude2=wayPointslng[i+1]
    let difflattitude=toRadians((lattitude2-lattitude1))
    let difflongitude=toRadians((longitude2-longitude1));
    let a = Math.sin(difflattitude/2) * Math.sin(difflattitude/2) +(Math.cos(toRadians(lattitude1)) * Math.cos(toRadians(lattitude2)) *Math.sin(difflongitude/2) * Math.sin(difflongitude/2));

    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
     d += earthRadius * c;


  }
  //store distance travelled
  localStorage.setItem('routeDistance', JSON.stringify(d))

}



function removeLayerWithId(idToRemove)// for remove the route when reseting
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
