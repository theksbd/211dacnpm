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

Memory.create = function(data){
	db.query('INSERT INTO memory  SET ?', data);
}

Memory.remove = function(Id_pro){
	db.query('DELETE FROM memory WHERE Id_Product=?', Id_pro)
}
Memory.update = function( [data,Id_pro,Id]){
	db.query('UPDATE memory  SET ? WHERE Id_Product=? AND Id=?', [data,Id_pro,Id])
}
module.exports = Memory;