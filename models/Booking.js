const mongoose = require( 'mongoose');

const bookingSchema = new mongoose.Schema({
  date: { type: Date, required: true },
  details: { type: String, required: true },
});

const Booking = mongoose.model('Booking', bookingSchema);

module.exports=Booking
