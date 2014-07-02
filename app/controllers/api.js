var model_path = '../models/',models={};

var _getModel = function(container){
    if (!(container in models)){
        models[container] = _loadModel(container);
    }

    return models[container].model;
};

var _getModelName = function(container) {
    if (!(container in models)){
        models[container] = _loadModel(container);
    }

    return models[container].name;
};

var _loadModel = function(container){
    // TODO: check file is exist.
    var model = require(model_path + container);
    var name = model.modelName.toLowerCase();
    var result = {
        name : name,
        model : model
    };

    return result;
};

exports.findAll = function(req,res,next){
    var container = req.params.container;
    var model = _getModel(container);

	model.find(function(err,objs){
        var modelName = _getModelName(container);
        var result = {};
        result[modelName] = objs;
		res.send(result);
	});
};

exports.findById = function(req,res,next){
    var container = req.params.container;
    var model = _getModel(container);

	model.findById(req.params.id,function(err,obj){
        var modelName = _getModelName(container);
        var result = {};
        result[modelName] = obj;
		res.send(result);
	});
};

exports.createNew = function(req,res){
    var container = req.params.container;
    var model = _getModel(container);
    var modelName = _getModelName(container);
    var record = new model(req.body[modelName]);

	record.save(function(err,obj){
        var result = {};
        result[modelName] = obj;

		res.send(result);
	});
};

exports.updateById = function(req,res,next){
    var container = req.params.container;
    var model = _getModel(container);
    var modelName = _getModelName(container);

	model.findByIdAndUpdate(req.params.id,req.body[modelName],
        function(err,numberAffected,raw){
            if (err)
                console.log(err);
            res.send(200);
	    });
};

exports.removeById = function(req,res,next){
    var container = req.params.container;
    var model = _getModel(container);

	model.findByIdAndRemove(req.params.id,
        function(err){
		    if (err)
			    next(err);
            res.send(200);
	    });
};
