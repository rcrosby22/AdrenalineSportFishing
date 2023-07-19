const express = require('express')
const router = express.Router()
const {
  createBooking,
  getBookingById,
  updateUserBooking,
  deleteUserBooking,
  getUserBookings
} = require('../controllers/bookingController')
const { verifyToken, stripToken } = require('../middleware/index')

router.post('/', stripToken, verifyToken, createBooking)
router.get('/', stripToken, verifyToken, getUserBookings)
router.get('/:id', stripToken, verifyToken, getBookingById)
router.put('/:id', stripToken, verifyToken, updateUserBooking)
router.delete('/:id', stripToken, verifyToken, deleteUserBooking)

module.exports = router
