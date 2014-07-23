// Utility helper
var createUUID = function() {
    // http://www.ietf.org/rfc/rfc4122.txt
    var s = [];
    var hexDigits = "0123456789abcdef";
    for (var i = 0; i < 36; i++) {
        s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
    }
    s[14] = "4";  // bits 12-15 of the time_hi_and_version field to 0010
    s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);  // bits 6-7 of the clock_seq_hi_and_reserved to 01
    s[8] = s[13] = s[18] = s[23] = "-";

    var uuid = s.join("");
    return uuid;
};

/*
    create a red cicle on the map.
*/
var createFireCircle = function(map, addr, area) {

    var geocoder = new google.maps.Geocoder();

    geocoder.geocode({'address': addr}, function(results, status){

        if (status == google.maps.GeocoderStatus.OK) {

            // re-locate the map center
            map.setCenter(results[0].geometry.location);

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
          var cityCircle = new google.maps.Circle(areaOptions);
          
          google.maps.event.addListener(cityCircle, 'click', function(ev) { alert('[Demo] On fire:' + addr);});
        }
    }); 
};

/*
    create the on-fire map.
*/
var createOnFireMap = function(onFireJSON) {

    var mapOptions = {
      zoom: 11,
      center: new google.maps.LatLng(25.033493, 121.564101),
      mapTypeId: google.maps.MapTypeId.TERRAIN
    };

    var map = new google.maps.Map(document.getElementById('fire-map-canvas'),
        mapOptions);


    for (var onFire in onFireJSON) {

        var addr = onFireJSON[onFire].addr;
        var area = onFireJSON[onFire].area;
    
        createFireCircle(map,addr,area);
    }
};

/*
    create the piece map.
*/
var createPieceMap = function(searchJSON) {

    for (var s in searchJSON) {

        var result = searchJSON[s];
        var addr = result.addr;
        var area = result.area;

        // add a map DOM element
        var id = createUUID();
        var column = $("<div>").addClass('column').addClass('piece-column');
        var segment = $("<div>").addClass('ui segment').addClass("piece-map-segment");
        var mapElement = $("<div>").attr('id',id).addClass("piece-map-canvas");

        segment.append(mapElement);
        column.append(segment);

        $(".piece-map > .column.grid").append(column);

        // create a new piece map
        var mapOptions = {
              zoom: 12,
              mapTypeId: google.maps.MapTypeId.TERRAIN
            };

        var newMap = new google.maps.Map(document.getElementById(id),
                        mapOptions);

        createFireCircle(newMap, addr, area);
    }
};