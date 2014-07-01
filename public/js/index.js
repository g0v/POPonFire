
var citymap = {};
citymap['taipei101'] = {
  center: new google.maps.LatLng(25.033493, 121.564101),
  population: 50
};
citymap['president'] = {
  center: new google.maps.LatLng(25.039941, 121.512812),
  population: 30
};

var cityCircle;

function initialize() {
  // Create the map.
  var mapOptions = {
    zoom: 14,
    center: new google.maps.LatLng(25.033493, 121.564101),
    mapTypeId: google.maps.MapTypeId.TERRAIN
  };

  var map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);

  // Construct the circle for each value in citymap.
  // Note: We scale the area of the circle based on the population.
  for (var city in citymap) {
    var populationOptions = {
      strokeColor: '#FF0000',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#FF0000',
      fillOpacity: 0.35,
      map: map,
      center: citymap[city].center,
      radius: Math.sqrt(citymap[city].population) * 100
    };
    // Add the circle for this city to the map.
    cityCircle = new google.maps.Circle(populationOptions);
    
    google.maps.event.addListener(cityCircle, 'click', function(ev) {
      alert('[Demo] On fire');
    });
  }
}

google.maps.event.addDomListener(window, 'load', initialize);


