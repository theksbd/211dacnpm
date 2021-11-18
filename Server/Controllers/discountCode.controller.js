var Discount = require('../Models/discountCode.model')

exports.get_list = function(req, res){
	Discount.get_all((function(data){
		res.send({result: data});
	}))
}
//body-parser
exports.add = function(req, res){
	var data =req.body;
	console.log(data)
	Discount.create(data, function(response){
		res.send({result: response});
	});
}

exports.remove = function(req, res){
	Discount.remove([req.query.id_pro,req.query.id_dis], function(response){
		res.send({result: response});
	});
}

exports.update = function(req, res){
	var data =req.body;
	Discount.update([data,data.Id_Product,data.Id_Discount], function(response){
		res.send({result: response});
	});
}