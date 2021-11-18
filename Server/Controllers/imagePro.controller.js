var ImgProduct = require('../Models/imagePro.model')

exports.get_list = function(req, res){
	ImgProduct.get_all((function(data){
		res.send({result: data});
	}))
}
//body-parser
exports.add_img = function(req, res){
	var data =req.body;
	console.log(data)
	ImgProduct.create(data, function(response){
		res.send({result: response});
	});
}

exports.remove_img = function(req, res){
	var id =req.param.id;
	ImgProduct.remove(id, function(response){
		res.send({result: response});
	});
}

exports.update_img = function(req, res){
	var data =req.body;
	ImgProduct.update(data, function(response){
		res.send({result: response});
	});
}