const Booking = require( '../models/Booking');

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
// get all bookings
const getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({});
    res.json(bookings);
  } catch (error) {
   throw error
  }
};

// Get a single booking by ID
const getBookingById = async (req, res) => {
  try {
    const { id } = req.params;
    const booking = await Booking.findById(id);

    if (!booking) {
      return res.status(404).json({ error: 'Booking not found.' });
    }

    res.json(booking);
  } catch (error) {
    throw error
  }
};

// update a booking
const updateBooking = async (req, res) => {
  try {
    const { id } = req.params;
    const { date, details } = req.body;

    const booking = await Booking.findByIdAndUpdate(id, { date, details }, { new: true });

    if (!booking) {
      return res.status(404).json({ error: 'Booking not found.' });
    }
    await booking.save()

    res.json(booking);
  } catch (error) {
    throw error
  }
};

// delete a booking
const deleteBooking = async (req, res) => {
  try {
    const { id } = req.params;
    const booking = await Booking.findByIdAndDelete(id);

    if (!booking) {
      return res.status(404).json({ error: 'Booking not found.' });
    }
    const today = new Date()
    const bookingDate = booking.date
    const timeDifference = bookingDate.getTime() - today.getTime();
    const daysDifference = Math.ceil(timeDifference / (1000 * 3600 * 24));
    
    if (req.user.role === 'owner' || (req.user.role === 'user' && daysDifference <= 30)) {
      await Booking.findByIdAndDelete(id);
      res.json({ message: 'Booking deleted successfully!' });
      await booking.save()
    } else {
      res.status(403).json({ error: 'Unauthorized access' });
    }
  } catch (error) {
    throw error
  }
};


module.exports = {
  createBooking,
  getAllBookings,
  getBookingById,
  updateBooking,
  deleteBooking
  
}