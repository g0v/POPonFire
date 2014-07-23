
var search = function(city, devWay, unit){              

    // initial the query condition
    var condition = {
        "city": city,
        "devWay": devWay,
        "unit": unit
    };

    // send the query to api/search
    $.getJSON('/api/search', condition, function(searchJSON) {
        // clear all piece maps
        $('.piece-column').remove();

        // render the piece map
        createPieceMap(searchJSON);
    });
};

(function(){

  // catch the onFire json data from API
  $.getJSON('/api/onfire', function(onFireJSON){
      createOnFireMap(onFireJSON);
  });

   $.getJSON('/api/search', function(searchJSON){
      createPieceMap(searchJSON);
  });

  // intial the dropdown items
  $('.ui.dropdown').dropdown({
        onChange: function(){
            var city = $("input[name=city]").val();
            var devWay = $("input[name=devWay]").val();
            var unit = $("input[name=unit]").val();

            search(city, devWay, unit);
        }
  });
  
})();