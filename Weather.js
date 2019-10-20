//Weather of initial port
//var ts = Math.round((new Date(2019,12,2,9,0)).getTime() / 1000); change to UNIX
let time;
let dateSet = JSON.parse(localStorage.getItem('date'));
let year = dateSet.substring(0,4);
//month have to minus 1 to have the correct data
let month = String(dateSet.substring(5,7) - 1);
localStorage.setItem('month', JSON.stringify(month))
let day = dateSet.substring(8,10);
if (day < 10)
{
  day = day.substring(1,2);
}
localStorage.setItem('day', JSON.stringify(day))
let unixTime = Math.round((new Date(year, month, day)).getTime() / 1000);
let unixTimeSevenDays = [];
for (let i = 0; i < 7; i++)
{
  unixTimeSevenDays.push(unixTime)
  unixTime += 86400;
}
localStorage.setItem('unixTimeSevenDays', JSON.stringify(unixTimeSevenDays))
unixTimeSevenDays.forEach(element => intPortWeather(element));
let store = [];
let num = 0;

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

function testInt(data)
{
  let listHTML = "";
  let stuff_needed = [JSON.parse(localStorage.getItem('day')) + "/" + (Number(JSON.parse(localStorage.getItem('month'))) + 1),
                      data.currently.summary, data.currently.temperature];
  store[num] = [data.currently.summary, data.currently.temperature]
  num += 1;
  localStorage.setItem('store', JSON.stringify(store))
  let header_needed = ["Time", "Weather", "Current Temperature (&#8451;) "];
  let symbol_needed = ["&#8451;"]
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

for (let c = 0; c < 7; c++)
{
  document.getElementById('intPortWeatherTable').innerHTML += "<tr>";
  for (let c = 0; c < 7; c++)
  {
    document.getElementById('intPortWeatherTable').innerHTML += "<td>" + JSON.parse(localStorage.getItem('store'))[c][0] + "</td>";
    document.getElementById('intPortWeatherTable').innerHTML += "<td>" + JSON.parse(localStorage.getItem('store'))[c][0] + "</td>";
    document.getElementById('intPortWeatherTable').innerHTML += "<td>" + JSON.parse(localStorage.getItem('store'))[c][1] + "</td>"
  }
  document.getElementById('intPortWeatherTable').innerHTML += "</tr>";
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


//Weather for final port
function finPortWeather()
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
  finCurrentTime = Number(JSON.parse(localStorage.getItem('unixTime'))) + 10000;
  let link_needed = "https://api.darksky.net/forecast/2f325944bde3b00d86bdabaf4ac091be/" + data.latitude + "," + data.longitude + "," + finCurrentTime +"?exclude=minutely&exclude=hourly&exclude=daily&exclude=flags&exclude=offset&units=si&callback=testFin"
  console.log(link_needed);
  let script = document.createElement('script'); // create script element in HTML
  script.src = link_needed; // set link to sources
  document.body.appendChild(script); // to append script element into body.
}
function testFin(data)
{
  let listHTML = "";
  let stuff_needed = [JSON.parse(localStorage.getItem('day')) + "/" + (Number(JSON.parse(localStorage.getItem('month'))) + 1), data.currently.summary, data.currently.temperature];
  let header_needed = ["Time", "Weather", "Current Temperature (&#8451;) "];
  let symbol_needed = ["&#8451;"]
  for(let i = 0; i < header_needed.length; i++)
  {
    listHTML += "<tr><th>" + header_needed[i] + "</th><td>" + stuff_needed[i] + "</td></tr>" + "<br>";
    document.getElementById('finPortWeatherTable').innerHTML = listHTML;
  }
  let weatherFinOverall = '.The ship will arrive at the destination port after 1 day. Therefore, the destination port date will be the 2019-10-18 and the weather forecast will be ' + data.currently.summary + ".";
  document.getElementById('weatherFinSummary').innerHTML = weatherFinOverall;
  localStorage.setItem('finWeather',JSON.stringify(data.currently.summary));
}

document.getElementById("totalDistance").innerHTML = JSON.parse(localStorage.getItem('routeDistance'))/1000;
document.getElementById("fuelOfTheBoat").innerHTML = JSON.parse(localStorage.getItem('myShip')).range;
document.getElementById("totalCost").innerHTML = JSON.parse(localStorage.getItem('myShip')).cost*document.getElementById("totalDistance").value;
//1 knots = 1.85 km per hour
document.getElementById("durations").innerHTML = document.getElementById("totalDistance").value/(JSON.parse(localStorage.getItem('myShip')).maxSpeed*1.85);
document.getElementById("totalPortsPass").innerHTML = JSON.parse(localStorage.getItem('wayPointsCoordinate')).length;
