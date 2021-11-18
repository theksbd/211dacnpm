module.exports = function(router){
	var ImgController = require('../Controllers/imagePro.controller')
	router.post('/imageproduct/add', ImgController.add_img);
	router.get('/imageproduct/list', ImgController.get_list);
	// router.delete('/book/delete/:id', BookController.remove_book);
	// router.put('/book/update', BookController.update_book);
};