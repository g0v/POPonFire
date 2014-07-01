var util = require('util'),
    path = require('path'),
    rootPath = path.normalize(__dirname + '/..');


module.exports = {
    appName: '公有地大行動',

    development: {
        port: process.env.PORT || '8080',
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
