const Product = require('../Models/product.model')

exports.getAll = (req, res) => {
    const result = data => res.send(data)

    Product.getAllProduct(result)
}

exports.getAllDiscountCode = (req, res) => {
    const result = data => res.send(data)

    Product.getAllDiscountCode(result)
}

exports.getCompreAllProduct = (req, res) => {
    const result = data => res.send(data)

    Product.getCompreAllProduct(result)
}