
exports.cityMap = function(req,res,next) {

    // Fake JSON Data
    var citymap = {};

    citymap['taipei101'] = {
      x: 25.033493, 
      y: 121.564101,
      population: 50
    };

    citymap['president'] = {
      x: 25.039941, 
      y: 121.512812,
      population: 30
    };

    res.send(citymap);
};
