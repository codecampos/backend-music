const Cart = require('../models/Cart');

module.exports = {
  async show(req, res) {

    const carts = await Cart.find()
    return res.json(carts);
  },
  async store(req, res) {
    const { name, price } = req.body;

    cart = await Cart.create({ name, price });

    return res.json(cart);
  },

  async delete(req, res) {
    const { _id } = req.body;

    const cart = await Cart.findByIdAndDelete(_id)

    return res.json(cart);
  }
};
