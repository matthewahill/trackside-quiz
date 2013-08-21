// this won't work on a local file loaded in chrome
// either load it from a server or use safari and allow it access

// use Modernizr to check that the browser supports geolocation
// if it does then get the current position

// when the DOM is fully loaded...
$(document).ready(function() {
var myLocation;

//this stops the function from running on page load
$('a.findme').click(function (e) {
e.preventDefault();				

// check if browser supports geolocation

  if (Modernizr.geolocation) {
// get user's current position
navigator.geolocation.getCurrentPosition(function (position) {   

// get latitude and longitude
var latitude = position.coords.latitude;
var longitude = position.coords.longitude;
myLocation = latitude + "," + longitude;

// send starting location and destination to goToGoogleMaps function
goToGoogleMaps(myLocation);
});
}

// fallback for browsers without geolocation
else {
// get manually entered postcode from input box
myLocation = $('.manual-location').val();
// if user has entered a starting location, send starting location and destination to goToGoogleMaps function
if (myLocation != '') {
goToGoogleMaps(myLocation);
}
// else fade in the manual postcode field
else {
$('.no-geolocation').fadeIn();
}
}
  
// the following function receives your location and then sets the google map into an iframe already in the html file
// you must also add "&output=embed" at the end else it won't work

function goToGoogleMaps(myLocation) {
top.document.getElementById('googleFrame').src = "https://maps.google.com/maps?saddr=" + myLocation + "&output=embed";

// this causes the map to open in a new window which you don't want in an app
//window.location = "https://maps.google.com/maps?saddr=" + myLocation ;
}

});

});

