const express = require('express');
const router = express.Router();
const productController = require('../Controllers/product.controller')

router.get('/comprehension', productController.getCompreAllProduct )
router.get('/', productController.getAll)

module.exports = router;