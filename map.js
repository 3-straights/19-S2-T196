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
    object.size.push(locations.size[0])
    object.type.push(locations.type[0])
    object.locprecision.push(locations.locprecision[0])
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


function getIntWeather()
{
  //seperate year, month, and day
  let dateSet = JSON.parse(localStorage.getItem('date'));
  let year = dateSet.substring(0,4);
  let month = String(dateSet.substring(5,7) - 1);
  //month have to minus 1 to have the correct data
  let day = dateSet.substring(8,10);
  if (day < 10)
  {
    day = day.substring(1,2);
  }
  let unixTime = Math.round((new Date(year, month, day)).getTime() / 1000);//Change local date to UNIX Time
  localStorage.setItem('unixTime', JSON.stringify(unixTime))
  //Request to DarkShy Api
  let url = "https://api.darksky.net/forecast/2f325944bde3b00d86bdabaf4ac091be/" +
            JSON.parse(localStorage.getItem('portCoord')).lat[0] + "," + JSON.parse(localStorage.getItem('portCoord')).lon[0] + "," +
            unixTime + "?exclude=minutely,hourly&units=si&callback=getIntWeatherData";
  let script = document.createElement('script'); // create script element in HTML
  script.src = url; // set link to sources
  document.body.appendChild(script); // to append script element into body.
}

// Callback function to retrieve weather data
function getIntWeatherData(data)
{
  let weatherInt = data.currently.summary;

  //set marker coordinates
  let marker = new mapboxgl.Marker({ "color": "#00FF00" });
  marker.setLngLat([JSON.parse(localStorage.getItem('portCoord')).lon[0], JSON.parse(localStorage.getItem('portCoord')).lat[0]]);

  //set port name and weather on corresponding popup
  let popup = new mapboxgl.Popup({ offset: 45});
  popup.setText(JSON.parse(localStorage.getItem('portCoord')).name[0].toString() + ": " + weatherInt);

  if (!localStorage.getItem('intWeather'))
  {
    localStorage.setItem('intWeather', JSON.stringify(weatherInt))
  }
  else if (localStorage.getItem('intWeather') !== null)
  {
    localStorage.removeItem('intWeather')
    localStorage.setItem('intWeather', JSON.stringify(weatherInt))
  }

  //set popup on marker
  marker.setPopup(popup)

  // Display the marker.
  marker.addTo(map);

  // Display the popup.
  popup.addTo(map);

  //for reseting purpose,it will remove the marker one by one later
  currentMarkers.push(marker);

  return weatherInt
}

function getFinWeather()
{
  //Request to DarkShy Api
  let url = "https://api.darksky.net/forecast/2f325944bde3b00d86bdabaf4ac091be/" +
            JSON.parse(localStorage.getItem('portCoord')).lat[1] + "," + JSON.parse(localStorage.getItem('portCoord')).lon[1] + "," +
            JSON.parse(localStorage.getItem('unixTime')) + "?exclude=minutely,hourly&units=si&callback=getFinWeatherData";
  let script = document.createElement('script'); // create script element in HTML
  script.src = url; // set link to sources
  document.body.appendChild(script); // to append script element into body.
}

// Callback function to retrieve weather data
function getFinWeatherData(data) {
  let weatherSevenDays = data.currently.summary;

  if (!localStorage.getItem('finWeather'))
  {
    localStorage.setItem('finWeather', JSON.stringify(weatherSevenDays))
  }
  else if (localStorage.getItem('finWeather') !== null)
  {
    localStorage.removeItem('finWeather')
    localStorage.setItem('finWeather', JSON.stringify(weatherSevenDays))
  }

  //set marker coordinates
  let marker = new mapboxgl.Marker({ "color": "#FF0000" });
  marker.setLngLat([JSON.parse(localStorage.getItem('portCoord')).lon[1], JSON.parse(localStorage.getItem('portCoord')).lat[1]]);

  //set port name and weather on corresponding popup
  let popup = new mapboxgl.Popup({ offset: 45});
  popup.setText(JSON.parse(localStorage.getItem('portCoord')).name[1].toString() + ": " + weatherSevenDays);

  //set popup on marker
  marker.setPopup(popup)

  // Display the marker.
  marker.addTo(map);

  // Display the popup.
  popup.addTo(map);

  //for reseting purpose,it will remove the marker one by one later
  currentMarkers.push(marker);

  return weatherSevenDays;
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


map.on('click', function (e)
{
  object.data.geometry.coordinates.push([JSON.stringify(e.lngLat.lng),JSON.stringify(e.lngLat.lat)]);
  //Request to DarkShy Api
  let url = "https://api.darksky.net/forecast/2f325944bde3b00d86bdabaf4ac091be/" +
            JSON.stringify(e.lngLat.lat) + "," + JSON.stringify(e.lngLat.lng) + "," +
            JSON.parse(localStorage.getItem('unixTime')) + "?exclude=minutely,hourly&units=si&callback=getWeatherDataWayPoints";
  let script = document.createElement('script'); // create script element in HTML
  script.src = url; // set link to sources
  document.body.appendChild(script); // to append script element into body.
})

function getWeatherDataWayPoints(data)
{
    let weatherWayPoint = data.currently.summary;

    //set coordinate for marker
    let markers = new mapboxgl.Marker({ "color": "#FF8C00" });
    markers.setLngLat([data.longitude,data.latitude]);

    //set weather on corresponding popup
    let popup = new mapboxgl.Popup({ offset: 45});
    popup.setText(weatherWayPoint);

    //set popup on marker
    markers.setPopup(popup)

    // Display the marker.
    markers.addTo(map);

    // Display the popup.
    popup.addTo(map);

    wayPointslat.push(data.latitude)//calculation purpose
    wayPointslng.push(data.longitude)
    currentMarkers.push(markers);//for reset purpose
}

function zoom()
{
  map.flyTo({
center: [
(JSON.parse(localStorage.getItem("portCoord")).lon[0]+JSON.parse(localStorage.getItem("portCoord")).lon[1])/2,(JSON.parse(localStorage.getItem("portCoord")).lat[0]+JSON.parse(localStorage.getItem("portCoord")).lat[1])/2],
zoom:2.5,
speed:1.5
});
}



function showRoute(){

  object.data.geometry.coordinates.unshift([JSON.parse(localStorage.getItem("portCoord")).lon[0].toString(),JSON.parse(localStorage.getItem("portCoord")).lat[0].toString()])
  object.data.geometry.coordinates.push([JSON.parse(localStorage.getItem("portCoord")).lon[1].toString(),JSON.parse(localStorage.getItem("portCoord")).lat[1].toString()])
  map.addLayer({
  id: "routes",
  type: "line",
  source: object,
  layout: { "line-join": "round", "line-cap": "round" },
  paint: { "line-color": "#888", "line-width": 6 }
  });
  localStorage.setItem('wayPointsCoordinate',JSON.stringify(object.data.geometry.coordinates))

}

function reset()
{
  removeLayerWithId('routes')
  if (currentMarkers!==null) {
      for (var i = 0; i < currentMarkers.length; i++) {
        currentMarkers[i].remove();
      }
}
currentMarkers=[];
wayPointlng=[];
wayPointslat=[];


}

function resetStorage()
{
  localStorage.removeItem('wayPointsCoordinate')
  localStorage.removeItem('routeDistance')
  object.data.geometry.coordinates=[];
  d=0;

  localStorage.setItem('wayPointsCoordinate',JSON.stringify(object.data.geometry.coordinates))
  localStorage.setItem('routeDistance', JSON.stringify(d))


}


function toRadians(value)
{
  return (value)*Math.PI/180
}

function calculateDistance()
{
  let earthRadius = 6371e3; // metres earth radius
  let d =0;

  wayPointslat.unshift((JSON.parse(localStorage.getItem("portCoord"))).lat[0])
  wayPointslng.unshift((JSON.parse(localStorage.getItem("portCoord"))).lon[0])

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
     d += (earthRadius * c)/1000;

  }
  localStorage.setItem('routeDistance', JSON.stringify(d))

  return d;
}
function calculateTime()
{
  let travelTime = Number(JSON.parse(localStorage.getItem('distanceCalculated')))/(Number(JSON.parse(localStorage.getItem('myShip')).maxSpeed)*0.51444);
  //1 knot = 0.51444m/s
  localStorage.setItem('totalTravelTime',JSON.stringify(travelTime));
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
