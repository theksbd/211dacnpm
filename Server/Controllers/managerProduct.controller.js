var Product = require('../Models/managerProduct.model')
var ImgProduct = require('../Models/imagePro.model')

exports.get_list = function(req, res){
	Product.get_all((function(data){
		res.send({result: data});
	}))
}
//body-parser
exports.add = function(req, res){
	var data =req.body;
	product = data.product;
	image = data.image;
	Product.create(data, function(response){
		image.Id_Product = response.Id;
		ImgProduct.create(image, function(response){
			res.send({result: response});
		});
	});
}

exports.remove = function(req, res){
	Product.remove(req.query.id, function(response){
		res.send({result: response});
	});
}

exports.update = function(req, res){
	var data =req.body;
	console.log(data)
	Product.update([data,data.Id], function(response){
		res.send({result: response});
	});
}