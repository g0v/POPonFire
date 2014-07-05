var createMaps = function(citymap) {

    // Create the map.
    var cityCircle,mapOptions = {
      zoom: 14,
      center: new google.maps.LatLng(25.033493, 121.564101),
      mapTypeId: google.maps.MapTypeId.TERRAIN
    },
    map = new google.maps.Map(document.getElementById('map-canvas'),
        mapOptions);

    for (var city in citymap) {
        var populationOptions = {
            strokeColor: '#FF0000',
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: '#FF0000',
            fillOpacity: 0.35,
            map: map,
            center: new google.maps.LatLng(citymap[city].x,citymap[city].y) ,
            radius: Math.sqrt(citymap[city].population) * 100
        };
      // Add the circle for this city to the map.
      cityCircle = new google.maps.Circle(populationOptions);
      
      google.maps.event.addListener(cityCircle, 'click', function(ev) {
        alert('[Demo] On fire');
      });
    }
};