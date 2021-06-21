  
const mongoose = require('mongoose');

const AboutCardsSchema = new mongoose.Schema({
  subHeading: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model('AboutCards', AboutCardsSchema);