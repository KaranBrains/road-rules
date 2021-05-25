const mongoose = require('mongoose');

const RideSchema = new mongoose.Schema({
  client: {
    type: String,
    required: true,
  },
  instructor: {
    type: String,
    required: true,
  },
  slot: {
    type: String,
    required: true,
  },
  status :{
    type: String,
    required: true,
  },
  feedback :{
    type: String,
  },
  rating: {
    type: String,
  }
});

module.exports = mongoose.model('Ride', RideSchema);
