
class ship
{
  constructor(boatName,maxSpeed,range,cost,status,comment)
  {

  this._boatName = boat
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
  return this._comment
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
this._portName = portName;
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
constructor()
{



}
  shortestRoute()
  {



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


  function portInfo(myPort)
  {
    let portVer1 = new PortClass(myPort.portPlace)
    for (let p=0; p< myPort.ports.length; p++)
    {
      var singlePort = new port(myPort.ports[p].portName, myPort.ports[p].country, myPort.ports[p].lat, myPort.ports[p].lng)

      portVer1.addPort(singlePort)
    }
    if(typeof (Storage) !== "undefined") //
  	{
  		let portStorage = JSON.stringify(portVer1); // never able to store the data in the code if u dun do
  		// this is to stringify it and convert it to JSON file , so that all class attribute/method is removed.
  		// it is an in build black-box method.
  		localStorage.setItem('portList', portStorage);


      /*let portData = JSON.parse(localStorage.getItem('portList'));

      let portA = new PortClass([]);
      portA.innerData(portData);

    return portData*/
  	}
  	else
  	{
  		alert("Your Browser does not support local storage.");
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
