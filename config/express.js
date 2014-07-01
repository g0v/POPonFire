var express = require('express');

module.exports = function(app,config,passport){
    var setConfigs = {
        'port'          : config.port,
        'ip'            : config.ip,
        'views'         : config.viewPath,
        'view engine'   : config.viewEngine
    };

    var useConfigs = [
        express.favicon(),
        express.logger('dev'),
        express.cookieParser(),
        express.bodyParser(),
    ];
    for (var key in setConfigs){
        app.set(key,setConfigs[key]);
    }
    useConfigs.forEach(function(val){
        app.use(val);
    });

    // Notice: static document url must before router.
    app.use(express.static(config.staticPath));
    app.use(app.router);

    // development only
    if ('development' == app.get('env')) {
        app.use(express.errorHandler());
    }

    app.all('/*',function(req,res,next){
        res.header('Access-Control-Allow-Origin','*');
        res.header('Access-COntrol-Allow-Headers','X-Requested-With');
        next();
    });


};
