const express = require('express')
const {
  getReviews,
  createReview,
  deleteReview
} = require('../controllers/reviewController')

const router = express.Router()

router.post('/review', createReview)

router.get('/review', getReviews)

router.delete('/review/:id', deleteReview)

module.exports = router
