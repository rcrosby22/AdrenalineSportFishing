
import express from 'express';
import { createBooking } from '../controllers/bookingController';

const router = express.Router();

// Route to create a booking
router.post('/', createBooking);



export default router;