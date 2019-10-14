function intPortWeather()
{
  let data = {
    latitude = JSON.parse(localStorage.getItem('intPort')).lat;
    longtitude = JSON.parse(localStorage.getItem('intPort')).lng;
  };
    //"https://api.darksky.net/forecast/f77205dbd3303a32b0147c56de128ed0/[latitude],[longitude]"
  let data_needed = {
    exclude:["minutely","hourly","daily","flags","offset"],
    units:"si"
  };
  let link_needed = "https://api.darksky.net/forecast/f77205dbd3303a32b0147c56de128ed0/" + data.latitude + "," + data.longitude + "?exclude=minutely&exclude=hourly&exclude=daily&exclude=flags&exclude=offset&units=si&callback=test"
  console.log(link_needed);
  //JSONP method
  //let url = "https://api.darksky.net/forecast/f77205dbd3303a32b0147c56de128ed0/";
  // let data =
  // {
  //
  // };

  //get darksky api data
  let script = document.createElement('script'); // create script element in HTML
  script.src = link_needed; // set link to sources
  document.body.appendChild(script); // to append script element into body.
}
//apikey: 2f325944bde3b00d86bdabaf4ac091be


function test(data)
{
  let listHTML = "";
  let stuff_needed = [data.latitude, data.longitude, data.currently.summary, data.currently.temperature, data.currently.pressure,data.currently.humidity, data.currently.dewPoint, data.currently.uvIndex];
  let header_needed = ["Latitude Obtained", "Longitude Obtained","Summary", "Current Temperature (&#8451;) ", "Pressure (Pa)", "Humidity", "Dew Point (&#8451;)","UV Index"];
  let symbol_needed = ["&#8451;", "Pa"]

  // need to redo .
  for(let i = 0; i < header_needed.length; i++)
  {
    listHTML += "<tr><th>" + header_needed[i] + "</th><td>" + stuff_needed[i] + "</td></tr>" + "<br>";
    document.getElementById('table-weather').innerHTML = listHTML
  }
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
