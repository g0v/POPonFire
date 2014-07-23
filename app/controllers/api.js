'use strict';

exports.onFire = function(req,res,next) {

    // Fake JSON Data
    var firePoints = {};

    firePoints = {
        
        'taipei101': {
            "addr": 'Taipei 101',
            "area": 100
        },

        'president': {
            "addr": '中華民國總統府',
            "area": 10
        },

        'ntuh': {
            "addr": '臺大醫院',
            "area": 50
        },

        'somewhere': {
            "addr": "新北市新店區青潭段楣子寮小段0095-0002地號",
            "area": 719.22
        }
    }; 

    res.send(firePoints);
};

exports.toSearch = function(req, res, next) {
    var city = req.query.city;
    var devWay = req.query.devWay;
    var unit = req.query.unit;

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
        },
        "item02": {
            "addr": "新北市三峽區隆恩段0292-0000地號",
            "area": 473.38
        }
    };

    res.send(result);
};




