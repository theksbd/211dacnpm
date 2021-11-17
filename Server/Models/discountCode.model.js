const db = require('../Config/ConnectMySql')

const Discount = function (discount) {
	this.Id_Product = discount.Id_Product
    this.Id_Discount = discount.Id_Discount
	this.Price = discount.Price
}

Discount.get_all = function(result){
	db.query("SELECT * FROM discountCode", function(err,book){
		if(err) {
			result(null);
		}
		else result(book);
	});
}

Discount.create = function(data, result){
	db.query('INSERT INTO discountCode  SET ?', data, function(err,book){
		if(err){
			result(null);
		}
		else{
			result({...data});
		}
	})

}

Discount.remove = function([Id_pro,Id_dis], result){
	db.query('DELETE FROM discountCode WHERE Id_Product=? AND Id_Discount=?', [Id_pro,Id_dis], function(err,book){
		if(err){
			result(null);
			console.log(err)
		}
		else{
			console.log("delete successfully")
			result(null);
		}
	})
}
Discount.update = function([data,Id_pro,Id_dis], result){
	db.query('UPDATE discountCode  SET ? WHERE Id_Product=? AND Id_Discount=?', [data,Id_pro,Id_dis], function(err,book){
		if(err){
			result(null);
		}
		else{
			result({...data});
		}
	})
}
module.exports = Discount;