var createFireCircle = function(map,addr,area) {

    var geocoder = new google.maps.Geocoder();

    geocoder.geocode({'address': addr}, function(results,status){

        if (status == google.maps.GeocoderStatus.OK) {
            var areaOptions = {
            strokeColor: '#FF0000',
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: '#FF0000',
            fillOpacity: 0.35,
            map: map,
            center: results[0].geometry.location,
            radius: Math.sqrt(area/3.14)*50
            }; 
           
          // Add the circle for this city to the map.
          cityCircle = new google.maps.Circle(areaOptions);
          
          google.maps.event.addListener(cityCircle, 'click', function(ev) { alert('[Demo] On fire:' + addr);});
        }
    }); 
};

var createMaps = function(citymap) {

    // Create the map.
    var cityCircle,mapOptions = {
      zoom: 14,
      center: new google.maps.LatLng(25.033493, 121.564101),
      mapTypeId: google.maps.MapTypeId.TERRAIN
    };

    var map = new google.maps.Map(document.getElementById('map-canvas'),
        mapOptions);


    for (var city in citymap) {
        var addr = citymap[city].addr,
        area = citymap[city].area;
    
        createFireCircle(map,addr,area);
    }
};