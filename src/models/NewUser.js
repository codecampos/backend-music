const mongoose = require('mongoose');
const NewUserSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  admin: Boolean
})

module.exports = mongoose.model('NewUser', NewUserSchema);