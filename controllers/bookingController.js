import Booking from '../models/Booking';

const createBooking = async (req, res) => {
  try {
    const { date, details } = req.body;
    const booking = new Booking({ date, details });
    await booking.save();
    res.status(201).json({ message: 'Booking created successfully!', booking });
  } catch (error) {
    throw error
  }
};



module.exports = {
  CreateBooking,
  
}