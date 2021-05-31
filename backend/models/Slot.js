const mongoose = require('mongoose');

const SlotSchema = new mongoose.Schema({
  date: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  clientLimit: {
    type: Number,
    required: true,
  },
  instructor: {
    type: String,
    required: true,
  },
  bookings :[{
    type: String,
  }]
});

module.exports = mongoose.model('Slot', SlotSchema);
