
var google;

function init() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var myLatlng = new google.maps.LatLng(52.1658, 4.70694);
    // 39.399872
    // -8.224454
    
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 16,

        // The latitude and longitude to center the map (always required)
        center: myLatlng,

        // How you would like to style the map. 
        scrollwheel: false
    };

    

    // Get the HTML DOM element that will contain your map 
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');

    // Create the Google Map using out element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);
    
    var addresses = ['Ter Aar'];

    for (var x = 0; x < addresses.length; x++) {
        $.getJSON('http://maps.googleapis.com/maps/api/geocode/json?address='+addresses[x]+'&sensor=false&key=AIzaSyBVWaKrjvy3MaE7SQ74_uJiULgl1JY0H2s', null, function (data) {
            console.log(data)
            var p = data.results[0].geometry.location
            var latlng = new google.maps.LatLng(p.lat, p.lng);
            new google.maps.Marker({
                position: latlng,
                map: map,
                icon: 'images/loc.png'
            });

        });
    }
    
}
google.maps.event.addDomListener(window, 'load', init);