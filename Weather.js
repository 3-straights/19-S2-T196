//Weather of initial port
function intPortWeather()
{
  document.getElementById("intPortName").innerHTML = JSON.parse(localStorage.getItem('intPort')).portName;
  let data =
    {
      latitude: JSON.parse(localStorage.getItem('intPort')).lat,
      longitude: JSON.parse(localStorage.getItem('intPort')).lng
    };
  //apikey: 2f325944bde3b00d86bdabaf4ac091be
  //"https://api.darksky.net/forecast/2f325944bde3b00d86bdabaf4ac091be/[latitude],[longitude]"
  let data_needed = {
    exclude:["minutely","hourly","daily","flags","offset"],
    units:"si"
  };
  let link_needed = "https://api.darksky.net/forecast/2f325944bde3b00d86bdabaf4ac091be/" + data.latitude + "," + data.longitude + "?exclude=minutely&exclude=hourly&exclude=daily&exclude=flags&exclude=offset&units=si&callback=testInt"
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
  let stuff_needed = [data.currently.time, data.currently.summary, data.currently.temperature, data.currently.pressure,data.currently.humidity, data.currently.dewPoint, data.currently.uvIndex];
  let header_needed = ["Time", "Weather", "Current Temperature (&#8451;) ", "Pressure (Pa)", "Humidity", "Dew Point (&#8451;)","UV Index"];
  let symbol_needed = ["&#8451;", "Pa"]
  // need to redo .
  for(let i = 0; i < header_needed.length; i++)
  {
    listHTML += "<tr><th>" + header_needed[i] + "</th><td>" + stuff_needed[i] + "</td></tr>" + "<br>";
    document.getElementById('intPortWeatherTable').innerHTML = listHTML;
  }
  let weatherIntOverall = 'Source port current date is' + 'and the current weather is ' + data.currently.summary;
  document.getElementById('weatherIntSummary').innerHTML = weatherIntOverall;
  localStorage.setItem('intWeather',JSON.stringify(data.currently.summary));
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
  document.getElementById("finPortName").innerHTML = JSON.parse(localStorage.getItem('finPort')).portName;
  let data =
    {
      latitude: JSON.parse(localStorage.getItem('finPort')).lat,
      longitude: JSON.parse(localStorage.getItem('finPort')).lng
    };
  let data_needed = {
    exclude:["minutely","hourly","daily","flags","offset"],
    units:"si"
  };
  let link_needed = "https://api.darksky.net/forecast/2f325944bde3b00d86bdabaf4ac091be/" + data.latitude + "," + data.longitude + "?exclude=minutely&exclude=hourly&exclude=daily&exclude=flags&exclude=offset&units=si&callback=finTime"
  console.log(link_needed);
  let script = document.createElement('script'); // create script element in HTML
  script.src = link_needed; // set link to sources
  document.body.appendChild(script); // to append script element into body.
}
function finTime(data)
{
  finCurrentTime = Number(data.currently.time) + 10000;
  let link_needed = "https://api.darksky.net/forecast/2f325944bde3b00d86bdabaf4ac091be/" + data.latitude + "," + data.longitude + "," + finCurrentTime + "?exclude=minutely&exclude=hourly&exclude=daily&exclude=flags&exclude=offset&units=si&callback=testFin"
  console.log(link_needed);
  let script = document.createElement('script'); // create script element in HTML
  script.src = link_needed; // set link to sources
  document.body.appendChild(script); // to append script element into body.
}
function testFin(data)
{
  let listHTML = "";
  let stuff_needed = [data.currently.time, data.currently.summary, data.currently.temperature, data.currently.pressure,data.currently.humidity, data.currently.dewPoint, data.currently.uvIndex];
  let header_needed = ["Time", "Weather", "Current Temperature (&#8451;) ", "Pressure (Pa)", "Humidity", "Dew Point (&#8451;)","UV Index"];
  let symbol_needed = ["&#8451;", "Pa"]
  for(let i = 0; i < header_needed.length; i++)
  {
    listHTML += "<tr><th>" + header_needed[i] + "</th><td>" + stuff_needed[i] + "</td></tr>" + "<br>";
    document.getElementById('finPortWeatherTable').innerHTML = listHTML;
  }
  let weatherFinOverall = '.The ship will arrive at the destination port after 7 days. Therefore, the destination port date will be the 6th of Sept 2019 and the weather forecast will be ' + data.currently.summary + ".";
  document.getElementById('weatherFinSummary').innerHTML = weatherFinOverall;
  localStorage.setItem('finWeather',JSON.stringify(data.currently.summary));
}


document.getElementById("fuelOfTheBoat").innerHTML = JSON.parse(localStorage.getItem('myShip')).range;
