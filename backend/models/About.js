  
const mongoose = require('mongoose');

const AboutSchema = new mongoose.Schema({
  subHeading: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model('About', AboutSchema);