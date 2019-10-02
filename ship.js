
class ship
{
  constructor(boatName,maxSpeed,range,cost,status)
  {

  this._boatName = boatName;
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
          if (searchResult!== isNaN)
          {
            this._ships.push(newShip);
          }
          else if (searchResult == -1)
          {
            newShip.maxSpeed = document.getElementById('');
            newShip.range = document.getElementById('');
            newShip.maxSpeed = document.getElementById('');
            newShip.cost = document.getElementById('');
            newShip.status = document.getElementById('');

            this._ships.push(newShip);
          }
      }
      else
      {
          console.log("Error: not an instance of ship!");
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



}

class PortClass
{
constructor(portPlace)
{
this._portPlace= portPlace;
this._ports = [];
}
get portName()
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



function insertShip()
{
  let ship_name = document.getElementById("chooseBoat").value;
  let ship_new =
  {
    Name: ship_name,
    maxRange:  [_searchForShip(ship_name)],
    maxSpeed:  document.getElementById("first_name").value,
    cost:  document.getElementById("first_name").value,
    status:  document.getElementById("first_name").value,
    comment:  document.getElementById("first_name").value
  };

    let shipA = new ship(ship_new.Name, ship_new.maxSpeed, ship_new.maxRange, ship_new.cost, ship_new.status, ship_new.comment);
  	ship_faculty.createShip(shipA);


  /

    //check if current browser support local storage.
    if(typeof (Storage) !== "undefined") //
    {
      let faculty_of_ship = JSON.stringify(ship_faculty); // never able to store the data in the code if u dun do
      // this is to stringify it and convert it to JSON file , so that all class attribute/method is removed.
      // it is an in build black-box method.

      localStorage.setItem('shipArray',faculty_of_ship);
      // this is an in build method that requires 2 method, which requires a Storage key and the JSON file.
      // SO you need a KEY with its Value. You use key to retrieve a data.

    }
    else
    {
      alert("Your Browser does not support local storage.");
    }
}

let myShipArray = new shipFaculty("ship1");
//faculty.enrolStudent(s0);
//faculty.enrolStudent(s1);
//faculty.enrolStudent(s2);

/* code to run on load to display content on page */
document.getElementById("studentList").innerHTML = generateStudentList(faculty);
document.getElementById("studentInfoCard").style.visibility = "hidden";

// retrieve data
const STORAGE_KEY = "FACULTY"; //

//check if current browser support local storage.
if(typeof (Storage) !== "undefined" && "FACULTY" in localStorage) //
	{
		let data = localStorage.getItem(STORAGE_KEY); // get the data using an existing key.
		console.log(data); // just display json file
		data = JSON.parse(localStorage.getItem(STORAGE_KEY)); // get JSON data from local storage, and convert back to JS object.
		console.log(data); // just display
		// convert JSON object to the JS object. Intermediate Step, not sufficient for restoring polygon class instance.

		//let faculty_storage = new Faculty([]); // before calling the poly.fromData, we create empty array so that it initialize private attribute value (points) with empty array.
		//console.log(faculty_storage); // will display empty array as the points.
		// this empty array will set under this._points. an empty array of private attribute for Polygon Class.
		faculty.fromData(data);// restore completely. --> pass from wat i have into the
		//console.log(faculty_storage); // manage to call out the stuff
		document.getElementById("studentList").innerHTML = insertShip(myShipArray);
		document.getElementById("studentInfoCard").style.visibility = "hidden";
	}
else if(typeof (Storage) == "undefined")
	{
		alert("Your Browser does not support local storage.");
	}
