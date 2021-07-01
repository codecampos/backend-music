const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
    thumbnail: String,
    name: String,
    description: String,
    tags: [String],
    price: Number,
    color: String,
    brand: String,
}, {
    toJSON: {
        virtuals: true,
    },
});

ProductSchema.virtual('thumbnail_url').get(function () {
    return `http://localhost:3333/files/${this.thumbnail}`
})

module.exports = mongoose.model('Product', ProductSchema);