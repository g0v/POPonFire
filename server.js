'use strict';

var express = require('express'),
    http = require('http');

// load configurations
var env = process.env.NODE_ENV || 'development',
    config = require('./config/config')[env];

var app = express();

// bootstrap express configurations
require('./config/express')(app,config);

// bootstrap routes configurations
require('./config/routes')(app,config);

http.createServer(app).listen(app.get('port'),app.get('ip'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
