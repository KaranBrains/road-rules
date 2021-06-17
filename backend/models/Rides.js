const mongoose = require('mongoose');

const RideSchema = new mongoose.Schema({
  client : {
    type: String,
    required: true,
  },
  clientName : {
    type: String,
    required: true,
  },
  instructor : {
    type: String,
  },
  booking: { },
  instructorName : {
    type: String,
  },
  slot : {
    type: String,
  },
  date : {
    type: String,
    required: true,
  },
  time : {
    type: String,
  },
  status : {
    type: String,
    required: true,
  },
  modeOfPayment : {
    type: String,
    required: true,
  },
  price : {
    type: String,
  },
  feedback : {
    type: String,
  },
  address : {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
  }
});

module.exports = mongoose.model('Ride', RideSchema);