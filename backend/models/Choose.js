  
const mongoose = require('mongoose');

const ChooseSchema = new mongoose.Schema({
  point: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model('Choose', ChooseSchema);