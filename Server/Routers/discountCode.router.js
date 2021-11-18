module.exports = function(router){
	var Discount = require('../Controllers/discountCode.controller')
	router.post('/discount/add', Discount.add);
	router.get('/discount/list', Discount.get_list);
	router.delete('/discount/delete', Discount.remove);
	router.put('/discount/update', Discount.update);
};