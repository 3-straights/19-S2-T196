let dateSet = JSON.parse(localStorage.getItem('date'));// get date set by user
let year = dateSet.substring(0,4);// extract year from full date
//month have to minus 1 to have the correct data
let month = String(dateSet.substring(5,7) - 1);
localStorage.setItem('month', JSON.stringify(month))
let day = dateSet.substring(8,10);
if (day < 10)
{
  day = day.substring(1,2);
}
localStorage.setItem('day', JSON.stringify(day))
let unixTime = Math.round((new Date(year, month, day)).getTime() / 1000);//change local date to UNIX time
let unixTimeSevenDays = [];
for (let i = 0; i < 7; i++)
{
  unixTimeSevenDays.push(unixTime)
  unixTime += 86400;
}
localStorage.setItem('unixTimeSevenDays', JSON.stringify(unixTimeSevenDays))
unixTimeSevenDays.forEach(element => intPortWeather(element));
let time;

//Weather of initial port
function intPortWeather(time)
{
  document.getElementById("intPortName").innerHTML = JSON.parse(localStorage.getItem('portCoord')).name[0];
  let data =
    {
      latitude: JSON.parse(localStorage.getItem('portCoord')).lat[0],
      longitude: JSON.parse(localStorage.getItem('portCoord')).lon[0]
    };
  //apikey: 2f325944bde3b00d86bdabaf4ac091be
  //"https://api.darksky.net/forecast/2f325944bde3b00d86bdabaf4ac091be/[latitude],[longitude]"
  let data_needed = {
    exclude:["minutely","hourly","daily","flags","offset"],
    units:"si"
  };
  let link_needed = "https://api.darksky.net/forecast/2f325944bde3b00d86bdabaf4ac091be/" + data.latitude + "," + data.longitude + "," + `${time}` +"?exclude=minutely&exclude=hourly&exclude=daily&exclude=flags&exclude=offset&units=si&callback=testInt"
  console.log(link_needed);
  //JSONP method
  //let url = "https://api.darksky.net/forecast/2f325944bde3b00d86bdabaf4ac091be/";
  // let data =
  // {
  //
  // };

  //get darksky api data
  let script = document.createElement('script'); // create script element in HTML
  script.src = link_needed; // set link to sources
  document.body.appendChild(script); // to append script element into body.
}

let storeInt = [];
let num = 0;

function testInt(data)
{
  let listHTML = "";
  let stuff_needed = [JSON.parse(localStorage.getItem('day')) + "/" + (Number(JSON.parse(localStorage.getItem('month'))) + 1),
                      data.currently.summary, data.currently.temperature];
  storeInt[num] = [data.currently.summary, data.currently.temperature]
  num += 1;
  localStorage.setItem('storeInt', JSON.stringify(storeInt))

  // need to redo .

// for(let i = 0; i < header_needed.length; i++)
// {
//   document.getElementById('timeSevenDays').innerText += "<td>" + stuff_needed[i] + "</td>";
// }

//<tr><th>Weather</th></tr>
//<tr><th>Current Temperature</th></tr>
//  let weatherIntOverall = 'Source port current date is ' + JSON.parse(localStorage.getItem('date')) + ', and the current weather is ' + data.currently.summary;
//  document.getElementById('weatherIntSummary').innerHTML = weatherIntOverall;
//  localStorage.setItem('intWeather',JSON.stringify(data.currently.summary));
}


function intWeatherTable()
{
  let rowsA = "<tr><th>Date</th><th>Weather</th><th>Current temperature (℃) </th></tr>" ;
  let dateA = parseInt(JSON.parse(localStorage.getItem('date')).split('-')[2]);
  let monthA = parseInt(JSON.parse(localStorage.getItem('date')).split('-')[1]);
  for (let c = 0; c < JSON.parse(localStorage.getItem('store')).length; c++)
  {
      rowsA += "<tr>";

      rowsA += "<td>" + dateA + '/' +monthA + "</td>";
      rowsA += "<td>" + JSON.parse(localStorage.getItem('store'))[c][0] + "</td>";
      rowsA += "<td>" + JSON.parse(localStorage.getItem('store'))[c][1] + "</td>"
      rowsA += "</tr>";
      dateA++;
  }
  document.getElementById('intPortWeatherTable').innerHTML += rowsA;
}





    //need to use forloop somehow, problem is between JSONP request and the publish of info. No idea how to extract it.


// ?exclude=minutely,hourly,daily&units=si

//  TODO 5:  callback function for DarkSky API.
//  Extract the weather information and display as a table.(include units)
// javscript code for modifing the HTML table is :
//    let outputTableRef = document.getElementById('table-weather'); // create a reference to outputTableRef
//    let rowHTML="";
//    rowHTML+='<tr><th>'+'property name+'</th><td>'+property value+'</td></tr>';
//
//<!-- sample rows-->

unixTimeSevenDays.forEach(element => finPortWeather(element));
//Weather for final port
function finPortWeather(time)
{
  document.getElementById("finPortName").innerHTML = JSON.parse(localStorage.getItem('portCoord')).name[1];
  let data =
    {
      latitude: JSON.parse(localStorage.getItem('portCoord')).lat[1],
      longitude: JSON.parse(localStorage.getItem('portCoord')).lon[1]
    };
  let data_needed = {
    exclude:["minutely","hourly","daily","flags","offset"],
    units:"si"
  };
  let link_needed = "https://api.darksky.net/forecast/2f325944bde3b00d86bdabaf4ac091be/" + data.latitude + "," + data.longitude + "," + `${time}` +"?exclude=minutely&exclude=hourly&exclude=daily&exclude=flags&exclude=offset&units=si&callback=testFin"
  console.log(link_needed);
  let script = document.createElement('script'); // create script element in HTML
  script.src = link_needed; // set link to sources
  document.body.appendChild(script); // to append script element into body.
}

let storeFin = [];
let numFin = 0;
function testFin(data)
{
  let listHTML = "";
  let stuff_needed = [JSON.parse(localStorage.getItem('day')) + "/" + (Number(JSON.parse(localStorage.getItem('month'))) + 1), data.currently.summary, data.currently.temperature];
  let header_needed = ["Time", "Weather", "Current Temperature (&#8451;) "];
  let symbol_needed = ["&#8451;"]

  storeFin[numFin] = [data.currently.summary, data.currently.temperature]
  numFin += 1;
  localStorage.setItem('storeFin', JSON.stringify(storeFin))
//  let weatherFinOverall = '.The ship will arrive at the destination port after 1 day. Therefore, the destination port date will be the 2019-10-18 and the weather forecast will be ' + data.currently.summary + ".";
//  document.getElementById('weatherFinSummary').innerHTML = weatherFinOverall;
//  localStorage.setItem('finWeather',JSON.stringify(data.currently.summary));
}

function finWeatherTable()
{
  let rowsB = "<tr><th>Date</th><th>Weather</th><th>Current temperature (℃) </th></tr>" ;
  let dateB = parseInt(JSON.parse(localStorage.getItem('date')).split('-')[2]);
  let monthB = parseInt(JSON.parse(localStorage.getItem('date')).split('-')[1]);
  for (let c = 0; c < JSON.parse(localStorage.getItem('storeFin')).length; c++)
  {
      rowsB += "<tr>";
      rowsB += "<td>" + dateB + '/' + monthB + "</td>";
      rowsB += "<td>" + JSON.parse(localStorage.getItem('storeFin'))[c][0] + "</td>";
      rowsB += "<td>" + JSON.parse(localStorage.getItem('storeFin'))[c][1] + "</td>"
      rowsB += "</tr>";
      dateB++;
  }
  document.getElementById('finPortWeatherTable').innerHTML += rowsB;
}

let storeWayPoints = [];
let numWayPoints = 0;
let totalWayPoints = JSON.parse(localStorage.getItem('wayPointsCoordinate')).length - 2;
let wayPointsArraylength = totalWayPoints * 3;
let wayPointsArray = [];
for (let i = 0; i < totalWayPoints; i++)
{
  wayPointsArray.push(JSON.parse(localStorage.getItem('wayPointsCoordinate'))[i+1]);
}
localStorage.setItem('wayPointsArray', JSON.stringify(wayPointsArray))

for (let i = 0; i < totalWayPoints; i++)
{
  for (let j = 0; j < 7; j++)
  {
    wayPointsWeather(wayPointsArray[i][1], wayPointsArray[i][0], unixTimeSevenDays[j]);
  }
}

//Find weather for waypoints
function wayPointsWeather(lat, lon, time)
{

    let data_needed = {
      exclude:["minutely","hourly","daily","flags","offset"],
      units:"si"
    };
    let link_needed = "https://api.darksky.net/forecast/2f325944bde3b00d86bdabaf4ac091be/" + `${lat},${lon},${time}` +
                      "?exclude=minutely&exclude=hourly&exclude=daily&exclude=flags&exclude=offset&units=si&callback=testWayPoints"
    console.log(link_needed);
    let script = document.createElement('script'); // create script element in HTML
    script.src = link_needed; // set link to sources
    document.body.appendChild(script); // to append script element into body.

}


function testWayPoints(data)
{
  let listHTML = "";
  let stuff_needed = [JSON.parse(localStorage.getItem('day')) + "/" + (Number(JSON.parse(localStorage.getItem('month'))) + 1), data.currently.summary, data.currently.temperature];
  let header_needed = ["Time", "Weather", "Current Temperature (&#8451;) "];
  let symbol_needed = ["&#8451;"]

  storeWayPoints[numWayPoints] = [data.currently.summary, data.currently.temperature]
  numWayPoints += 1;
  localStorage.setItem('storeWayPoints', JSON.stringify(storeWayPoints))
//  let weatherFinOverall = '.The ship will arrive at the destination port after 1 day. Therefore, the destination port date will be the 2019-10-18 and the weather forecast will be ' + data.currently.summary + ".";
//  document.getElementById('weatherFinSummary').innerHTML = weatherFinOverall;
//  localStorage.setItem('finWeather',JSON.stringify(data.currently.summary));
}

function wayPointsTable()
{
  let rowsC = "";
  let dateC = parseInt(JSON.parse(localStorage.getItem('date')).split('-')[2]);
  let monthC = parseInt(JSON.parse(localStorage.getItem('date')).split('-')[1]);
  for (let i = 0; i < totalWayPoints; i++)
  {
    rowsC += "<tr><th>Date</th><th>Weather</th><th>Current temperature (℃) </th></tr>" ;
    dateC = parseInt(JSON.parse(localStorage.getItem('date')).split('-')[2]);
    monthC = parseInt(JSON.parse(localStorage.getItem('date')).split('-')[1]);
    for (let c = 0; c < 7; c++)
    {
      rowsC += "<tr>";
      rowsC += "<td>" + dateC + '/' + monthC + "</td>";
      rowsC += "<td>" + JSON.parse(localStorage.getItem('storeWayPoints'))[c + i*7][0] + "</td>";
      rowsC += "<td>" + JSON.parse(localStorage.getItem('storeWayPoints'))[c + i*7][1] + "</td>"
      rowsC += "</tr>";
      dateC++;
    }
  }
  document.getElementById('wayPointsWeatherTable').innerHTML = rowsC;
}







//print out results
document.getElementById("totalDistance").innerHTML = JSON.parse(localStorage.getItem('routeDistance'));
document.getElementById("fuelOfTheBoat").innerHTML = JSON.parse(localStorage.getItem('myShip')).range;
document.getElementById("totalCost").innerHTML = (JSON.parse(localStorage.getItem('myShip')).cost*document.getElementById("totalDistance").value).toFixed(2);
//1 knots = 1.85 km per hour
document.getElementById("durations").innerHTML = (document.getElementById("totalDistance").value/((JSON.parse(localStorage.getItem('myShip')).maxSpeed*1.852).toFixed(2))).toFixed(2);
document.getElementById("totalPortsPass").innerHTML = JSON.parse(localStorage.getItem('wayPointsCoordinate')).length;
let weather = "";
weather += "Source port current date is " + dateSet + " and the current weather is " +
            JSON.parse(localStorage.getItem('storeInt'))[0][0] +
            ". The ship will arrive at the destination port after " + document.getElementById("durations").value + " hours." +
            "Therefore, the destination port date will be " +
            JSON.parse(localStorage.getItem('arrivalDate')) + " and the weather forecast will be " +
            JSON.parse(localStorage.getItem('storeFin'))[0][0] + "."
document.getElementById("weather").innerHTML += weather;
