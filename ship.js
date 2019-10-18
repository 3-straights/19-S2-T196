class ship //creating ship object using class
{
  constructor(boatName,maxSpeed,range,cost,status,comment,desc)
  {

  this._boatName = boatName; //extracting the ship name
  this._maxSpeed = maxSpeed; //extracting the maximum speed of ship
  this._range = range; //extracting the ship full tank data
  this._cost = cost; // cost of oil per range
  this._status = status; //the availability of ship
  this._comment = comment; //feedback of the ship
  this._desc = desc; //providing description(size) of the boat object
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

get desc()
{
  return this._desc;
}

set desc(newDesc)
{
this._desc = newDesc;
}
}


class shipFaculty{  //creating a place that stores all the called ships into an array called _ships with class
constructor(shipFacultyName)
{
this._shipFacultyName = shipFacultyName; //creating a name for the ships storage
this._ships = []; //creating an empty array to store selected ships
}
get shipFacultyName()
{
   return this._shipFacultyName;
  }
set shipFacultyName(newName)
{
  this._shipFacultyName = newName;
 }

_searchForShip(shipName) //searching the ships information by finding the index of the ship name
{
let ships = this._ships;
let shipResult = -1; //initiate the index value to be 'none'
if (ships.length >= 1)
{
    shipResult = ships.findIndex(
        function(arrayItem)
        {
            return arrayItem.boatName == shipName; //shipResults = index of ship from the API
        }
    );
}
return shipResult; //An index value should be obtained

}

createShip(newShip)
{
      // check if chosen ship is an instance of the ship class
      if (newShip instanceof ship)
      {
          // check if student already enrolled
          let searchResult = this._searchForShip(newShip.boatName); //searching ship with the found index
          if (searchResult == -1)
          {
            this._ships.push(newShip); //storing the newly selected ships into an array
          }

      else
      {
          alert("Error: not an instance of ship!"); //if it doesn't meet the condition, alert the user
      }
  }



}
}

class port //creating an object that refers to port
{
constructor(portName,country,lat,lng,type,size,locPrec)
{
  this._portName = portName; //name of port

  this._country = country; //the country of port

  this._lat = lat; //the latitude of the selected port

  this._lng = lng; //the longitude of the selected port
  this._type = type; //locations of port(eg: river, sea...)
  this._size = size; //size of port(large, small)
  this._locPrec = locPrec; //precised location
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

get type()
{
  return this._type;
}

set type(newType)
{
this._type = newType;
}

get size()
{
  return this._size;
}

set size(newSize)
{
  this._size = newSize;
}

get locPrec()
{
  return this._locPrec;
}

set locPrec(newLocPrec)
{
  this._locPrec = newLocPrec;
}
}

class PortClass //creating a class that stores port object
{
constructor(portPlace)
{
this._portPlace= portPlace; //name of port storage
this._ports = []; // same as in ship faculty, _ports initiates with an empty array to store selected ports
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
_searchForPorts(nameOfPort) //finding the index of port in the array list by using the selected port name
{
let ports = this._ports;
let portsResult = -1; //initiate the value to be undefined
if (ports.length >= 1)
{
    portsResult = ports.findIndex(
        function(arrayItem)
        {
            return arrayItem.portName == nameOfPort; //portsResult is the index found
        }
    );
}
return portsResult;

}

createPort(ownPort)
{
      // check if port is instance of Port class
      if (ownPort instanceof port)
      {
          // check if student already enrolled
          let searchResult = this._searchForPorts(ownPort.portName);//using index found in the method _searchForPorts
          if (searchResult == -1) // if port not found
          {
              // we can enrol the student
              this._ports.push(ownPort); // push into _ports array
          }
      }
      else
      {
          alert("Error: not an instance of port!"); //else, alerting the user to input correct value
      }
  }



}

class route //route that stores all the chosen information by users
{
constructor(intPort, finPort, shipUsed, departDate, wayPoint, arrivalDate, routeDist, fuelCost)
{
this._intPort = intPort; //departed port
this._finPort = finPort; // destination
this._shipUsed = shipUsed; //selected ship
this._departDate = departDate; //started date
this._wayPoint = wayPoint; //selected way points
this._arrivalDate = arrivalDate; // date arrival
this._routeDist = routeDist; //total distance of selected route
this._fuelCost = fuelCost; //fuel cost

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

class routeStorage //class that stores all the chosen routes
{
constructor(setRoute)
{
  this._setRoute =setRoute;
  this._routes = []; //empty array that stores route
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
let routesResult = -1; //let it be undefined at first
if (routes.length >= 1)
{
    routesResult = routes.findIndex(
        function(arrayItem)
        {
            return arrayItem.intPort == intPort; //returning index of selected route
        }
    );
}
return routesResult;

}

createRoute(ownRoute)
{
      // check if selected route is an instance of route
      if (ownRoute instanceof route)
      {
          // check if route already present in array list
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
      callback:"extractPort" //calling back the function: extractPort()
  }


  jsonpRequest("https://eng1003.monash/api/v1/ports/",portData) //retrieving port informations from API

  function extractPort(portData)
{
    let porto={
        name:[portData.ports[0].name] ,  //storing the ports values from API into arrays from porto
        country:[portData.ports[0].country],
        type:[portData.ports[0].type],
        size:[portData.ports[0].size],
        locprecision:[portData.ports[0].locprecision],
        lat:[portData.ports[0].lat]   ,
        lng:[portData.ports[0].lng]

    }
    for (let i=1;i<(portData.ports.length);i++) //pushing all the ports information one by one into the created array through for loop
        {
            porto.name.push(portData.ports[i].name)
            porto.country.push(portData.ports[i].country)
            porto.type.push(portData.ports[i].type)
            porto.size.push(portData.ports[i].size)
            porto.locprecision.push(portData.ports[i].locprecision)
            porto.lat.push(portData.ports[i].lat)
            porto.lng.push(portData.ports[i].lng)

        }

    localStorage.setItem("portInformation",JSON.stringify(porto)) //storing the new array extracted from API into local Storage

}

function shipInfo()
{
let boat_name, maxSpeed, range, cost, status, comments,desc;

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
desc = JSON.parse(localStorage.getItem('shipInformation')).desc[i]
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
  desc = document.getElementById('shipDesc').value;
}

let myShip =
{

  boatName: boat_name,
  maxSpeed: maxSpeed,
  range: range,
  cost: cost,
  status: status,
  comments: comments,
  desc: desc


};
localStorage.setItem('myShip', JSON.stringify(myShip));

var shipA = new ship(myShip.boatName, myShip.maxSpeed, myShip.range, myShip.cost, myShip.status, myShip.comments, myShip.desc)


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
let portName, country, lat, lng, type, size, locPrec;

portName = JSON.parse(localStorage.getItem('portCoord')).name[0];
country = JSON.parse(localStorage.getItem('portCoord')).country[0];
lat = JSON.parse(localStorage.getItem('portCoord')).lat[0];
lng = JSON.parse(localStorage.getItem('portCoord')).lon[0];
type = JSON.parse(localStorage.getItem('portCoord')).type[0];
size = JSON.parse(localStorage.getItem('portCoord')).size[0];
locPrec = JSON.parse(localStorage.getItem('portCoord')).locprecision[0];

  let intPort =
  {

    portName: portName,
    country: country,
    lat: lat,
    lng: lng,
    type: type,
    size: size,
    locprecision: locPrec

  };

  if (!localStorage.getItem('intPort'))
  {
  localStorage.setItem('intPort', JSON.stringify(intPort));
  }

  else if (localStorage.getItem('intPort') !== null)
  {
    localStorage.removeItem('intPort');
    localStorage.setItem('intPort', JSON.stringify(intPort));
  }
let firstPort = new port(intPort.portName, intPort.country, intPort.lat, intPort.lng, intPort.type, intPort.size, intPort.locprecision);


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
  let portName, country, lat, lng, type, size, locPrec;

  portName = JSON.parse(localStorage.getItem('portCoord')).name[1];
  country = JSON.parse(localStorage.getItem('portCoord')).country[1];
  lat = JSON.parse(localStorage.getItem('portCoord')).lat[1];
  lng = JSON.parse(localStorage.getItem('portCoord')).lon[1];
  type = JSON.parse(localStorage.getItem('portCoord')).type[1];
  size = JSON.parse(localStorage.getItem('portCoord')).size[1];
  locPrec = JSON.parse(localStorage.getItem('portCoord')).locprecision[1];

let finPort =
{
  portName: portName,
  country: country,
  lat: lat,
  lng: lng,
  type: type,
  size: size,
  locprecision: locPrec

};
if (!localStorage.getItem('finPort'))
{
  localStorage.setItem('finPort', JSON.stringify(finPort));
}

else if (localStorage.getItem('finPort') !== null)
{
  localStorage.removeItem('finPort');
  localStorage.setItem('finPort', JSON.stringify(finPort));
}

let secPort = new port(finPort.portName, finPort.country, finPort.lat, finPort.lng, finPort.type, finPort.size, finPort.locprecision);

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
  let date = JSON.parse(localStorage.getItem('date'));
  let routeDist = JSON.parse(localStorage.getItem('routeDistance'));
  let fuelCost = JSON.parse(localStorage.getItem('myShip')).cost * routeDist;
  wayPoint =3;
  arrivalDate =17;
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
  if (!localStorage.getItem('date'))
  {
    localStorage.setItem('date', JSON.stringify(date))
  }

  else if (localStorage.getItem('date') !== null)
  {
    localStorage.removeItem('date');
    localStorage.setItem('date', JSON.stringify(date))

  }
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
