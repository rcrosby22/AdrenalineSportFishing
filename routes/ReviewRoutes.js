import express from 'express';
import { createReview, getReviewsByService } from '../controllers/reviewController';

const router = express.Router();

// Route to create a review
router.post('/', createReview);

// Route to get reviews by service
router.get('/service/:serviceId', getReviewsByService);

export default router;
