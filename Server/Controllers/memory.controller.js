var Memory = require('../Models/memory.model')

exports.get_list = function(req, res){
	Memory.get_all((function(data){
		res.send({result: data});
	}))
}
//body-parser
exports.add = function(req, res){
	var data =req.body;
	console.log(data)
	Memory.create(data, function(response){
		res.send({result: response});
	});
}

exports.remove = function(req, res){
	var id =req.param.id;
	Memory.remove(id, function(response){
		res.send({result: response});
	});
}

exports.update = function(req, res){
	var data =req.body;
	Memory.update(data, function(response){
		res.send({result: response});
	});
}
