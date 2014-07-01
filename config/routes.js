var main = require('../app/controllers/main');

module.exports = function(app,config){

    app.get('/',main.index);


};
