const Product = require('../models/Product');

module.exports = {
    async index(req, res) {
        const { tag } = req.query;

        const products = await Product.find({ tags: tag });

        return res.json(products);
    },

    async store(req, res) {
        const { filename } = req.file;
        const { name, description, tags, price, color, brand } = req.body;


        const product = await Product.create({
            thumbnail: filename,
            name,
            description,
            tags: tags.split(',').map(tech => tech.trim()),
            price,
            color,
            brand
        })
        return res.json(product);

    },

    async delete(req, res) {
        const { id } = req.body;

        const products = await Product.findByIdAndDelete(id)

        return res.json(products);
    }
};
