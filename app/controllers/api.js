'use strict';

exports.onFire = function(req,res,next) {

    // Fake JSON Data
    var firePoints = {};

    firePoints['taipei101'] = {
        "addr": 'Taipei 101',
        "area": 100
    };

    firePoints['president'] = {
        "addr": '中華民國總統府',
        "area": 10
    };

    firePoints['ntuh'] = {
        "addr": '臺大醫院',
        "area": 50
    };

    firePoints['somewhere']  = {
        "addr": "新北市新店區青潭段楣子寮小段0095-0002地號",
        "area": 719.22
    }; 

    res.send(firePoints);
};

exports.toSearch = function(req, res, next) {

    // TODO : need a search engine for catch data

    // Fake search result JSON data
    var result = {
        
        "item00": {
            "addr": '臺大醫院',
            "area": 50
        },
         "item01": {
            "addr": "新北市新店區青潭段楣子寮小段0095-0002地號",
            "area": 719.22
        }
    };

    res.send(result);
};




