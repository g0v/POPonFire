(function(){

  // catch the onFire json data from API
  $.getJSON('/api/onfire', function(onFireJSON){
      console.log("entry get city map json");
      createOnFireMap(onFireJSON);
  });

  // intial the dropdown items
  $('.ui.dropdown').dropdown();
  
})();
