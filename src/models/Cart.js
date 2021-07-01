const mongoose = require('mongoose');
const CartSchema = new mongoose.Schema({
  name: String,
  price: String
})

module.exports = mongoose.model('Cart', CartSchema);