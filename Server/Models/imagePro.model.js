const db = require('../Config/ConnectMySql')

const ImgProduct = function (imgproduct) {
    this.Id = imgproduct.Id
    this.Url = imgproduct.Url
    this.Id_Product = imgproduct.Id_Product
}

ImgProduct.get_all = function(result){
	db.query("SELECT * FROM ImageProduct", function(err,book){
		if(err) {
			result(null);
		}
		else result(book);
	});
}

ImgProduct.create = function(data, result){
	console.log(data)
	db.query('INSERT INTO ImageProduct  SET ?', data, function(err,book){
		if(err){
			result(null);
		}
		else{
			result({...data});
		}
	})

}

ImgProduct.remove = function([Id_pro,Id], result){
	db.query('DELETE FROM ImageProduct WHERE Id_Product=? AND Id=?', [Id_pro,Id], function(err,book){
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
ImgProduct.update = function([data,Id_pro,Id], result){
	db.query('UPDATE ImageProduct  SET ? WHERE Id_Product=? AND Id=?', [data,Id_pro,Id], function(err,book){
		if(err){
			result(null);
		}
		else{
			result({...data});
		}
	})
}
module.exports = ImgProduct;