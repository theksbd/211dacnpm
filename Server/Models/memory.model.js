const db = require('../Config/ConnectMySql')

const Memory = function (memory) {
    this.Id = memory.Id
    this.Id_Product = memory.Id_Product
	this.Rom_Capacity = memory.Rom_Capacity
	this.Ram_Capacity = memory.Ram_Capacity
	this.Price = memory.Price
}

Memory.get_all = function(result){
	db.query("SELECT * FROM memory", function(err,book){
		if(err) {
			result(null);
		}
		else result(book);
	});
}

Memory.create = function(data, result){
	db.query('INSERT INTO memory  SET ?', data, function(err,book){
		if(err){
			result(null);
		}
		else{
			result({...data});
		}
	})

}

Memory.remove = function([Id_pro,Id], result){
	db.query('DELETE FROM memory WHERE Id_Product=? AND Id=?', [Id_pro,Id], function(err,book){
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
Memory.update = function( [data,Id_pro,Id], result){
	db.query('UPDATE discountCode  SET ? WHERE Id_Product=? AND Id=?', [data,Id_pro,Id], function(err,book){
		if(err){
			result(null);
		}
		else{
			result({...data});
		}
	})
}
module.exports = Memory;