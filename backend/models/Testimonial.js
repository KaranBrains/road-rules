  
const mongoose = require('mongoose');

const AboutCardsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model('AboutCards', AboutCardsSchema);