class ship
{
  constructor(boatName,maxSpeed,range,cost,status,comment)
  {

  this._boatName = boatName;
  this._maxSpeed = maxSpeed;
  this._range = range;
  this._cost = cost;
  this._status = status;
  this._comment = comment;
  }

  get boatName()
  {
    return this._boatName;
  }
  set boatName(newBoatName)
  {
    this._boatName = newBoatName;
  }
get maxSpeed()
{
  return this._maxSpeed;
}
set maxSpeed(newSpeed)
{
  this._maxSpeed = newSpeed;
}

get range()
{
  return this._range;
}
set range(newRange)
{
  this._range = newRange;
}
get cost()
{
  return this._cost;
}
set cost(newCost)
{
  this._cost = newCost;
}
get status()
{
  return this._status;
}
set status(newStatus)
  {
  if ( typeof newStatus =='string')
  {
  this._status = newStatus;
}
}
get comment()
{
  return this._comment;
}
set comment(newComment)
{
  this._comment = newComment;
}
}


class shipFaculty{
constructor(shipFacultyName)
{
this._shipFacultyName = shipFacultyName;
this._ships = [];
}
get shipFacultyName()
{
   return this._shipFacultyName;
  }
set shipFacultyName(newName)
{
  this._shipFacultyName = newName;
 }

_searchForShip(shipName)
{
let ships = this._ships;
let shipResult = -1; //let it be 'none'
if (ships.length >= 1)
{
    shipResult = ships.findIndex(
        function(arrayItem)
        {
            return arrayItem.boatName == shipName;
        }
    );
}
return shipResult;

}

createShip(newShip)
{
      // check if student is an instance of Student
      if (newShip instanceof ship)
      {
          // check if student already enrolled
          let searchResult = this._searchForShip(newShip.boatName);
          if (searchResult == -1)
          {
            this._ships.push(newShip);
          }

      else
      {
          console.log("Error: not an instance of ship!");
      }
  }



}
}

class port
{
constructor(portName,country,lat,lng)
{
  this._portName = portName;

  this._country = country;

  this._lat = lat;

  this._lng = lng;
}
get portName()
{
  return this._portName;
}
set portName(newPortName)
{
this._portName = newPortName;
}

get country()
{
  return this._country;
}
set Country(newCountry)
{
  this._country = newCountry;
}

get lat()
{
  return this._lat;
}
set lat(newLat)
{
  this._lat = newLat;
}

get lng()
{
  return this._lng;
}

set lng(newLng)
{
  this._lng = newLng;
}

innerData(portDetails)
{
  this._portName = portDetails._portName;
  this._country = portDetails._country;
  this._lat = portDetails._lat;
  this._lng = portDetails._lng;
}

}

class PortClass
{
constructor(portPlace)
{
this._portPlace= portPlace;
this._ports = [];
}
get portPlace()
{
  return this._portPlace;
}
set portPlace(newPort)
{
  this._portPlace = newPort;
}
get ports()
{
  return this._ports;
}
_searchForPorts(nameOfPort)
{
let ports = this._ports;
let portsResult = -1; //let it be 'none'
if (ports.length >= 1)
{
    portsResult = ports.findIndex(
        function(arrayItem)
        {
            return arrayItem.portName == nameOfPort;
        }
    );
}
return portsResult;

}

createPort(ownPort)
{
      // check if student is an instance of Student
      if (ownPort instanceof port)
      {
          // check if student already enrolled
          let searchResult = this._searchForPorts(ownPort.portName);
          if (searchResult == -1) // student not found
          {
              // we can enrol the student
              this._ports.push(ownPort);
          }
      }
      else
      {
          console.log("Error: not an instance of port!");
      }
  }

  overallPort(portDetails)
  {
this._portPlace = portDetails._portPlace;

for (let p=0; p<portDetails._ports.length; p++)
{
  var myPort = new port();
  myport.innerData(portDetails._ports[p]);
this._ports.push(myPort);
}
  }

}

class route
{
constructor(intPort, finPort, shipUsed, departDate, wayPoint, arrivalDate, routeDist, fuelCost)
{
this._intPort = intPort;
this._finPort = finPort;
this._shipUsed = shipUsed;
this._departDate = departDate;
this._wayPoint = wayPoint;
this._arrivalDate = arrivalDate;
this._routeDist = routeDist;
this._fuelCost = fuelCost;
this._routes =[];

}
get intPort()
{
  return this._intPort;
}
set intPort(newIntPort)
{
  this._intPort = newIntPort;
}
get finPort()
{
  return this._finport;
}
set finPort(newFinPort)
{
  this._finPort = newFinPort;
}
get shipUsed()
{
  return this._shipUsed;
}

set shipUsed(newShipUsed)
{
  this._shipUsed = newShipUsed;
}
get wayPoint()
{
  return this._departDate;
}

set wayPoint(newWayPoint)
{
  this._wayPoint = newWayPoint;
}

get departDate()
{
  return this._departDate;
}

set departDate(newDepartDate)
{
  this._departDate = newDepartDate;
}
get arrivalDate()
{
  return this._arrivalDate;
}

set arrivalDate(newArrivalDate)
{
  this._arrivalDate = newArrivalDate;
}
get routeDist()
{
  return this._routeDist;
}

set routeDist(newRouteDist)
{
  this._routeDist = newRouteDist;
}
get fuelCost()
{
  return this._fuelCost;
}

set fuelCost(newFuelCost)
{
  this._fuelCost = newFuelCost;
}


}

class routeStorage
{
constructor(setRoute)
{
  this._setRoute =setRoute;
  this._routes = [];
}

get setRoute()
{
  return this._setRoute;
}
set setRoute(newRoute)
{
this._setRoute = newRoute;
}
get routes()
{
  return this._routes;
}
_searchRoutes(intPort)
{
let routes = this._routes;
let routesResult = -1; //let it be 'none'
if (routes.length >= 1)
{
    routesResult = routes.findIndex(
        function(arrayItem)
        {
            return arrayItem.intPort == intPort;
        }
    );
}
return routesResult;

}

createRoute(ownRoute)
{
      // check if student is an instance of Student
      if (ownRoute instanceof route)
      {
          // check if student already enrolled
          let searchResult = this._searchRoutes(ownRoute.intPort);
          if (searchResult == -1) // student not found
          {
              // we can enrol the student
              this._routes.push(ownRoute);
          }
      }
      else
      {
          console.log("Error: not an instance of port!");
      }
  }

}


    function jsonpRequest(url, data)
  {
      // Build URL parameters from data object.
      let params = "";
      // For each key in data object...
      for (let key in data)
      {
          if (data.hasOwnProperty(key))
          {
              if (params.length == 0)
              {
                  // First parameter starts with '?'
                  params += "?";
              }
              else
              {
                  // Subsequent parameter separated by '&'
                  params += "&";
              }

              let encodedKey = encodeURIComponent(key);
              let encodedValue = encodeURIComponent(data[key]);

              params += encodedKey + "=" + encodedValue;
           }
      }
      let script = document.createElement('script');
      script.src = url + params;
      document.body.appendChild(script);
  }

  let portData={
      callback:"extractPort"
  }


  jsonpRequest("https://eng1003.monash/api/v1/ports/",portData)

  function extractPort(portData)
{
    let porto={
        name:[portData.ports[0].name] ,
        country:[portData.ports[0].country],
        type:[portData.ports[0].type],
        size:[portData.ports[0].size],
        locprecision:[portData.ports[0].locprecision],
        lat:[portData.ports[0].lat]   ,
        lng:[portData.ports[0].lng]

    }
    for (let i=1;i<(portData.ports.length);i++)
        {
            porto.name.push(portData.ports[i].name)
            porto.country.push(portData.ports[i].country)
            porto.type.push(portData.ports[i].type)
            porto.size.push(portData.ports[i].size)
            porto.locprecision.push(portData.ports[i].locprecision)
            porto.lat.push(portData.ports[i].lat)
            porto.lng.push(portData.ports[i].lng)

        }

    localStorage.setItem("portInformation",JSON.stringify(porto))

}

function shipInfo()
{
let boat_name, maxSpeed, range, cost, status, comments;

for (let i=0; i<JSON.parse(localStorage.getItem('shipInformation')).name.length ;i++)
{

if (document.getElementById("boatOpt").value == JSON.parse(localStorage.getItem('shipInformation')).name[i])
{
boat_name = document.getElementById("boatOpt").value;
maxSpeed = JSON.parse(localStorage.getItem('shipInformation')).maxSpeed[i];
range = JSON.parse(localStorage.getItem('shipInformation')).range[i];
cost = JSON.parse(localStorage.getItem('shipInformation')).cost[i];
status = JSON.parse(localStorage.getItem('shipInformation')).status[i];
comments = JSON.parse(localStorage.getItem('shipInformation')).comments[i];
}
}

if (document.getElementById("boatOpt").value == 'Other')
{
  boat_name = document.getElementById("shipName").value;
  maxSpeed = document.getElementById('shipSpeed').value;
  range = document.getElementById('fullTank').value;
  cost = document.getElementById('shipCost').value;
  status = document.getElementById('shipStatus').value;
  comments = document.getElementById('shipComments').value;
}

let myShip =
{

  boatName: boat_name,
  maxSpeed: maxSpeed,
  range: range,
  cost: cost,
  status: status,
  comments: comments


};
localStorage.setItem('myShip', JSON.stringify(myShip));

var shipA = new ship(myShip.boatName, myShip.maxSpeed, myShip.range, myShip.cost, myShip.status, myShip.comments)


if (localStorage.getItem('selectedShip') == null)
{
  let shipVer1 = new shipFaculty([]);
  shipVer1.createShip(shipA);
  localStorage.setItem('selectedShip', JSON.stringify(shipVer1))

}

else if(localStorage.getItem('selectedShip') !== null)
{


 let invData = JSON.parse(localStorage.getItem('selectedShip'))
 invData._ships.push(shipA);

 localStorage.setItem('selectedShip',JSON.stringify(invData))

}
else
{
  alert("Your Browser does not support local storage.");
}
  return shipA;
}




function intPortInfo()
{
let portName, country, lat, lng;


for (let i=0; i<JSON.parse(localStorage.getItem('portInformation')).name.length ;i++)
{
  if (document.getElementById("departure").value == JSON.parse(localStorage.getItem('portInformation')).name[i])
  {

    portName = JSON.parse(localStorage.getItem('portInformation')).name[i];
    country = JSON.parse(localStorage.getItem('portInformation')).country[i];
    lat = JSON.parse(localStorage.getItem('portInformation')).lat[i];
    lng = JSON.parse(localStorage.getItem('portInformation')).lng[i];

  }

  else if (document.getElementById("departure").value == "Other" || document.getElementById("departure").value == "other")
  {
    portName = document.getElementById("depPort").value;
    country = document.getElementById("depCountry").value;
    lat = document.getElementById("depLat").value;
    lng = document.getElementById("depLng").value;

  }

}


  let intPort =
  {

    portName: portName,
    country: country,
    lat: lat,
    lng: lng

  };
  localStorage.setItem('intPort', JSON.stringify(intPort));

let firstPort = new port(intPort.portName, intPort.country, intPort.lat, intPort.lng);


if (localStorage.getItem('initialPort') == null)
{
  let intPorts = new PortClass('Initial Port');
  intPorts.createPort(firstPort);
  localStorage.setItem('initialPort', JSON.stringify(intPorts));
}

else if(localStorage.getItem('initialPort') !== null)
{
  let intPortStr = JSON.parse(localStorage.getItem('initialPort'));
  intPortStr._ports.push(firstPort);
  localStorage.setItem('initialPort',JSON.stringify(intPortStr));

}

else
{
  alert("Your Browser does not support local storage.");
}

return firstPort;
}

function finPortInfo()
{
  let portName, country, lat, lng;
  for (let i=0; i<JSON.parse(localStorage.getItem('portInformation')).name.length ;i++)
  {
    if (document.getElementById("destination").value == JSON.parse(localStorage.getItem('portInformation')).name[i])
    {

      portName = JSON.parse(localStorage.getItem('portInformation')).name[i];
      country = JSON.parse(localStorage.getItem('portInformation')).country[i];
      lat = JSON.parse(localStorage.getItem('portInformation')).lat[i];
      lng = JSON.parse(localStorage.getItem('portInformation')).lng[i];

    }
    else if(document.getElementById("destination").value == "Other" || document.getElementById("destination").value == "other")
    {
      portName = document.getElementById("desPort").value;
      country = document.getElementById("desCountry").value;
      lat = document.getElementById("desLat").value;
      lng = document.getElementById("desLng").value;

    }
  }

let finPort =
{
  portName: portName,
  country: country,
  lat: lat,
  lng: lng

};
  localStorage.setItem('finPort', JSON.stringify(finPort))

let secPort = new port(finPort.portName, finPort.country, finPort.lat, finPort.lng);

if (localStorage.getItem('finalPort') == null)
{
  let finPorts = new PortClass('final Port');
  finPorts.createPort(secPort);
  localStorage.setItem('finalPort', JSON.stringify(finPorts))
}

else if(localStorage.getItem('finalPort') !== null)
{
  let finPortStr = JSON.parse(localStorage.getItem('finalPort'));
  finPortStr._ports.push(secPort);
  localStorage.setItem('finalPort',JSON.stringify(finPortStr))

}
else
{
  alert("Your Browser does not support local storage.");
}

return secPort;
}


function storingRoute()
{
  let shipUsed = shipInfo();
  let departPort = intPortInfo();
  let destiPort = finPortInfo();
  let date = document.getElementById('date').value;

  let routeA = new route(departPort, destiPort, shipUsed, date, wayPoint, arrivalDate, routeDist, fuelCost);

  if (localStorage.getItem('Routes') == null)
  {
    let new_route = new routeStorage([]);
    new_route.createRoute(routeA);
    localStorage.setItem('Routes', JSON.stringify(new_route))
  }

  else if(localStorage.getItem('Routes') !== null)
  {

    let finRouteStr = JSON.parse(localStorage.getItem('Routes'));
    finRouteStr._routes.push(routeA);
    localStorage.setItem('Routes',JSON.stringify(finRouteStr));

  }
  else
  {
    alert("Your Browser does not support local storage.");
  }


}

function storeDate()
{
  let date = document.getElementById('date').value;
  localStorage.setItem('date', JSON.stringify(date))
}

function storeTime()
{
  let time = document.getElementById('time').value;
  localStorage.setItem('time', JSON.stringify(time))
}

  let shipData={
      callback:"extractShip"
  }

  jsonpRequest("https://eng1003.monash/api/v1/ships/",shipData)

  function extractShip(shipData)
{
    let shippies={
        name:[shipData.ships[0].name] ,
        maxSpeed:[shipData.ships[0].maxSpeed],
        range:[shipData.ships[0].range],
        desc:[shipData.ships[0].desc],
        cost:[shipData.ships[0].cost],
        status:[shipData.ships[0].status]   ,
        comments:[shipData.ships[0].comments]
    }

    for (let i=1;i<(shipData.ships.length);i++)
        {
            shippies.name.push(shipData.ships[i].name)
            shippies.maxSpeed.push(shipData.ships[i].maxSpeed)
            shippies.range.push(shipData.ships[i].range)
            shippies.desc.push(shipData.ships[i].desc)
            shippies.cost.push(shipData.ships[i].cost)
            shippies.status.push(shipData.ships[i].status)
            shippies.comments.push(shipData.ships[i].comments)
        }

    localStorage.setItem("shipInformation",JSON.stringify(shippies))


}
