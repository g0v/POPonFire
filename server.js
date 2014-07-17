'use strict';

var express = require('express'),
    http = require('http');

// load configurations
var env = process.env.NODE_ENV || 'development',
    config = require('./config/config'),
    envConfig = config[env];

var app = express();

// setting the app name
app.set('appName', config.appName);

// bootstrap express configurations
require('./config/express')(app,envConfig);

// bootstrap routes configurations
require('./config/routes')(app,envConfig);

http.createServer(app).listen(app.get('port'),app.get('ip'), function(){
    console.log('Express server listening on port ' + app.get('port'));
});
