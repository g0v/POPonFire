(function(){


  // catch the cities json data from API
  
  $.getJSON('/api/citymap', function(citymap){
      console.log("entry get city map json");
      createMaps(citymap);
  });
  

  // intial the dropdown items
  $('.ui.dropdown').dropdown();
  
})();