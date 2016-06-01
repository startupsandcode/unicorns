
//Globals
var locations = ['corral','pasture','barn'];
var allUnicorns = [];

//Unicorn Constructor
function Unicorn(id, name,color,location){
        this.id =  id
        this.name = name
        this.color = color
        this.location = location;
}

//Generate random location from array
var currentLocation = function(){
    return Math.floor(Math.random() * locations.length);
}

//Generate 13 new Unicorns
for (var i = 0; i < 14; i++){
    allUnicorns.push(new Unicorn(i, 'Tom - ' + i,'Color ' + i,locations[currentLocation()]));
}

//Create dropdown of locations
function showLocations(current){
    var locationList = document.createElement('select');
    locationList.addEventListener('change',updateLocation);
    for(var i = 0; i < locations.length; i++){
        var currentOption = document.createElement('option');
        currentOption.value = locations[i];
        currentOption.text = locations[i];
        if (current === locations[i]){
            currentOption.selected = true;
        }
        locationList.appendChild(currentOption);
    }
    return locationList;
}

//Update Location of unicorn
function updateLocation(event){
    var id = event.currentTarget.parentElement.id;
    allUnicorns[id].location = event.currentTarget.value;
    //Refreshes display on update
    displayUnicornInformation();
}

//Show information of unicorns
function displayUnicornInformation(){
    var list = document.getElementById('unicorns');
    list.innerHTML = '';
    allUnicorns.forEach(function(currentUnicorn){
        var uni = document.createElement('li');
        var locationList = showLocations(currentUnicorn.location);
        uni.innerHTML =  '<span class="unicornStatus">' + currentUnicorn.name + ' : ' + currentUnicorn.color + ' : ' + currentUnicorn.location + '</span>';
        uni.id = currentUnicorn.id;
        uni.appendChild(locationList);
        list.appendChild(uni); 
    })
}

document.addEventListener('DOMContentLoaded', function(){
    //Initial display of unicorn information
    displayUnicornInformation();    
})





