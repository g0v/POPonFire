'use strict';

var main = require('../app/controllers/main'),
    api = require('../app/controllers/api');

module.exports = function(app,config){
    app.get('/api/citymap',api.cityMap);

    app.get('/',main.index);
};
