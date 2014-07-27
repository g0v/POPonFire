function Search() {
  this.vars = {};
}
Search.prototype.setCity = function (city) {
  this.vars.city = city;
  this.run();
}
Search.prototype.setDevWay = function (devWay) {
  this.vars.devWay = devWay;
  this.run();
}
Search.prototype.setUnit = function (unit) {
  this.vars.unit = unit;
  this.run();
}
Search.prototype.setKeyword = function (keyword) {
  this.vars.keyword = keyword;
  this.run();
}
Search.prototype.run = function () {
  var vars = this.vars;
  var query = ['city', 'devWay', 'unit', 'keyword'].map(function (field) {
    return field + '=' + (vars[field] ? vars[field] : '');
  }).join('&');
  $.getJSON('/api/search?' + query, function(searchJSON){
    createPieceMap(searchJSON);
  });
}

search = new Search();

(function(){

  // catch the onFire json data from API
  $.getJSON('/api/onfire', function(onFireJSON){
      console.log("entry get city map json");
      createOnFireMap(onFireJSON);
  });

  search.run();

  // intial the dropdown items
  $('.ui.dropdown').dropdown();
  
})();
