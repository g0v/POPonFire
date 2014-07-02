
var config = require('../../config/config');

exports.index = function(req, res){
    res.render('index', { title: config.appName ,userName: 'Guest' });
};
