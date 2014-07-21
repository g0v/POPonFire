'use strict';

var util = require('util');
var path = require('path');
var rootPath = path.normalize(__dirname + '/..');


module.exports = {
    appName: '公有地大行動',

    development: {
        port: process.env.PORT || '8089',
        ip: process.env.IP || '0.0.0.0',
        hostname: process.env.DNS || 'localhost',
        root: rootPath,
        viewPath: rootPath + '/app/views',
        staticPath: rootPath + '/public',
        viewEngine: 'jade',
    },

    test: {
    },

    production:{
    }
};
