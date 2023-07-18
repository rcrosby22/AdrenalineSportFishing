const express = require ('express');
const { getReviews, createReview, deleteReview } = require('../controllers/reviewController');

const router = express.Router();

// Route to create a review
 router.post('/review', createReview);

// Route to get reviews by service
router.get('/review', getReviews);

//owner can delete a review
router.delete('/review/:id', deleteReview);

module.exports = router;
