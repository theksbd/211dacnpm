const Product = require('../Models/product.model')

exports.getAll = (req, res) => {
    const result = data => res.send(data)

    Product.getAllProduct(result)
}

exports.getCompreAllProduct = (req, res) => {
    const result = data => res.send(data)

    Product.getCompreAllProduct(result)
}