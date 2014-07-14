
exports.cityMap = function(req,res,next) {

    // Fake JSON Data
    var citymap = {};

    citymap['taipei101'] = {
        "addr": 'Taipei 101',
        "area": 100
    };

    citymap['president'] = {
        "addr": '中華民國總統府',
        "area": 10
    };

    citymap['ntuh'] = {
        "addr": '臺大醫院',
        "area": 50
    };

    citymap['somewhere']  = {
        "addr": "新北市新店區青潭段楣子寮小段0095-0002地號",
        "area": 719.22
    }; 

    res.send(citymap);
};
