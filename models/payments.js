const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  amount: {type: Number, required: true},
  date: {type: String, required: true},
  desc: {type: String, required: false},
});


module.exports = mongoose.model('Payment', paymentSchema);
