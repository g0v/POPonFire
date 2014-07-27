'use strict';

exports.onFire = function(req,res,next) {

    // Fake JSON Data
    var firePoints = {};

    firePoints = [
      {
          "number": "21",
          "addr": 'Taipei 101',
          "city": "花蓮市",
          "devWay": "標售",
          "unit": "國防部",
          "area": 100,
          "feature": {}
      },
      {
          "number": "31",
          "addr": '中華民國總統府',
          "city": "台北市",
          "devWay": "暫時性使用",
          "unit": "國民黨黨產",
          "area": 10,
          "feature": {}
      },
      {
          "number": "10",
          "addr": '臺大醫院',
          "city": "台北市",
          "devWay": "優先承購",
          "unit": "學產地",
          "area": 50,
          "feature": {}
      },
      {
          "number": "18",
          "addr": "新北市新店區青潭段楣子寮小段0095-0002地號",
          "city": "新北市",
          "devWay": "眷村/營區改建",
          "unit": "官股銀行",
          "area": 719.22,
          "feature": {}
      } 
    ];

    res.send(firePoints);
};

exports.toSearch = function(req, res, next) {

    // TODO : need a search engine for catch data
    function by_query(data) {
      var fields = ['city', 'devWay', 'unit'];
      for (var i = 0; i < fields.length; i++) {
        if (req.query[fields[i]] && data[fields[i]] !== req.query[fields[i]])
          return false;
      }
      if (req.query.keyword && data.addr.indexOf(req.query.keyword) == -1)
        return false;
      return true;
    }

    // Fake search result JSON data
    var fakedata = [
      {
          "number": "10",
          "addr": '臺大醫院',
          "city": "台北市",
          "devWay": "優先承購",
          "unit": "學產地",
          "area": 50,
          "feature": {}
      },
      {
          "number": "18",
          "addr": "新北市新店區青潭段楣子寮小段0095-0002地號",
          "city": "新北市",
          "devWay": "眷村/營區改建",
          "unit": "官股銀行",
          "area": 719.22,
          "feature": {}
      } 
    ];

    res.send(fakedata.filter(by_query));
};



