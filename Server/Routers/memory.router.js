module.exports = function(router){
	var Memory = require('../Controllers/memory.controller')
	router.post('/memory/add', Memory.add);
	router.get('/memory/list', Memory.get_list);
	// router.delete('/book/delete/:id', BookController.remove_book);
	// router.put('/book/update', BookController.update_book);
};