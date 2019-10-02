
class ship
{
  constructor(boatName,maxSpeed,range,cost,status)
  {

  this._boatName = boat
  this._maxSpeed = maxSpeed;
  this._range = range;
  this._cost = cost;
  this._status = status;
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
          if (searchResult == -1) // student not found
          {
              // we can enrol the student
              this._ships.push(newShip);
          }
      }
      else
      {
          console.log("Error: not an instance of ship!");
      }
  }

}


class port{
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



}
class route()
{
constructor()
{



}
  shortestRoute()
  {



  }



}
