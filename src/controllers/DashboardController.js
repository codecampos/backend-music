const Product = require('../models/Product');

module.exports = {
    async show(req, res) {

        const products = await Product.find()
        return res.json(products);
    }
}