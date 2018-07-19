const mongoose = require('mongoose');
const Balance = require('./balance');

const userSchema = new mongoose.Schema({
  name: {type: String, required: true},
  email: {type: String, required: true},
  password: {type: String, required: true},
  balances: [Balance.schema],
});

module.exports = mongoose.model('User', userSchema);
