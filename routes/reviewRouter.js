const express = require ('express');
const { getReviewsByService } = require('../controllers/reviewController');

const router = express.Router();

// Route to create a review
// router.post('/', createReview);

// Route to get reviews by service
router.get('/service/:serviceId', getReviewsByService);

module.exports = router;
