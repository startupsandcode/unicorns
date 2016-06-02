
//Globals
var locations = ['corral', 'pasture', 'barn'];
var colors = ['red','yellow','green','blue','purple','white','grey'];
var allUnicorns = [];

//Unicorn Constructor
function Unicorn(id, name, color, location) {
    this.id = id
    this.name = name
    this.color = color
    this.location = location;
}

//Generate random location from array
var currentLocation = function () {
    return Math.floor(Math.random() * locations.length);
}

var currentColor = function(){
    return Math.floor(Math.random() * colors.length);
}

//Generate 13 new Unicorns
for (var i = 0; i < 14; i++) {
    allUnicorns.push(new Unicorn(i, 'Tom - ' + i, colors[currentColor()], locations[currentLocation()]));
}

//Create dropdown of locations
function showLocations(current) {
    var locationList = document.createElement('select');
    locationList.addEventListener('change', updateLocation);
    for (var i = 0; i < locations.length; i++) {
        var currentOption = document.createElement('option');
        currentOption.value = locations[i];
        currentOption.text = locations[i];
        if (current === locations[i]) {
            currentOption.selected = true;
        }
        locationList.appendChild(currentOption);
    }
    return locationList;
}

//Update Location of unicorn
function updateLocation(event) {
    var id = event.currentTarget.parentElement.parentElement.id;
    allUnicorns[id].location = event.currentTarget.value;
    //Refreshes display on update
    displayUnicornInformation();
}

//Show information of unicorns
function displayUnicornInformation() {
    var unicornTable = document.getElementById('unicorns');
    unicornTable.innerHTML = '';
    allUnicorns.forEach(function (currentUnicorn) {
        var uni = document.createElement('tr');
        var locationList = showLocations(currentUnicorn.location);
        unicornData = '<td class="unicornData" style="background-color:' + currentUnicorn.color + '"></td><td class="unicornStatus">' + currentUnicorn.name + '</td><td>' + currentUnicorn.color + '</td><td>' + currentUnicorn.location + '</td>';
        var locationTd = document.createElement('td');
        locationTd.appendChild(locationList);
        uni.innerHTML = unicornData;
        uni.id = currentUnicorn.id;
        uni.appendChild(locationTd);
        unicornTable.appendChild(uni);
    })
}

document.addEventListener('DOMContentLoaded', function () {
    //Initial display of unicorn information
    displayUnicornInformation();
})





