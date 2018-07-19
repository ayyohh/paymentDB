const mongoose = require('mongoose');
const Payment = require('./payments');


const balanceSchema = new mongoose.Schema({
  name: {type: String, required: true},
  amount: {type: Number, required: true},
  desc: {type: String, required: false},
  payments: [Payment.schema],
});

module.exports = mongoose.model('Balance', balanceSchema);
