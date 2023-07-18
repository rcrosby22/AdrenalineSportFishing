const Booking = require('../models/Booking')

const createBooking = async (req, res) => {
  try {
    const { date, details, numberOfPeople } = req.body
    const user = req.user
    console.log(user.email)
    const booking = new Booking({
      date,
      details,
      numberOfPeople,
      email: user.email
    })
    await booking.save()

    res.status(201).json({ message: 'Booking created successfully!', booking })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'An error occurred.' })
  }
}

const getBookingById = async (req, res) => {}
const getUserBookings = async (req, res) => {
  try {
    const user = req.user

    const bookings = await Booking.find({ email: user.email })

    return res.json(bookings)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'An error occurred.' })
  }
}

const updateUserBooking = async (req, res) => {
  try {
    const { id } = req.params
    const { date, details, numberOfPeople } = req.body

    // Find the booking by ID
    const booking = await Booking.findById(id)

    if (!booking) {
      return res.status(404).json({ error: 'Booking not found.' })
    }
    // Update the booking fields
    booking.date = date
    booking.details = details
    booking.numberOfPeople = numberOfPeople

    // Save the updated booking
    await booking.save()

    res.json({ message: 'Booking updated successfully!', booking })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'An error occurred.' })
  }
}

const deleteUserBooking = async (req, res) => {
  try {
    const user = req.user
    const { id } = req.params

    const bookingIndex = user.bookings.findIndex(
      (booking) => booking._id.toString() === id
    )

    if (bookingIndex === -1) {
      return res.status(404).json({ error: 'Booking not found.' })
    }

    user.bookings.splice(bookingIndex, 1) // Remove the booking from the user's bookings array
    await user.save()

    await Booking.findByIdAndDelete(id)

    res.json({ message: 'Booking deleted successfully!' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'An error occurred.' })
  }
}

module.exports = {
  createBooking,
  getUserBookings,
  deleteUserBooking,
  getBookingById,
  updateUserBooking
}
