const mongoose = require('mongoose');
const balanceSchema = new mongoose.Schema({
  amount: {type: Number, required: true},
  date: {type: String, required: true},
});

module.exports = mongoose.model('Balance', balanceSchema);
