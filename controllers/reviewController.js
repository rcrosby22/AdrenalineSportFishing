const Review = require('../models/Review')

const createReview = async (req, res) => {
  console.log(req)
  try {
    console.log('lets go!')
    const { name, comment } = req.body
    const newReview = new Review({ name, comment })
    const savedReview = await newReview.save()
    return res.status(201).json(savedReview)
  } catch (error) {
    console.error('Error creating review:', error)
    return res
      .status(500)
      .json({ error: 'An error occurred while creating the review.' })
  }
}

const deleteReview = async (req, res) => {
  const { id } = req.params

  try {
    const deletedReview = await Review.findOneAndDelete({
      _id: id,
      user: req.user._id
    })
    if (!deletedReview) {
      return res
        .status(404)
        .json({ error: 'Review not found or you are not authorized' })
    }
    res.json({ message: 'Review deleted successfully' })
  } catch (error) {
    console.error('Error deleting review:', error)
    return res
      .status(500)
      .json({ error: 'An error occurred while deleting the review' })
  }
}

const updateReview = async (req, res) => {
  const { id } = req.params
  const { name, comment } = req.body

  try {
    const updatedReview = await Review.findOneAndUpdate(
      { _id: id, user: req.user._id },
      { name, comment },
      { new: true }
    )
    if (!updatedReview) {
      return res
        .status(404)
        .json({ error: 'Review not found or you are not authorized' })
    }
    res.json(updatedReview)
  } catch (error) {
    console.error('Error updating review:', error)
    return res
      .status(500)
      .json({ error: 'An error occurred while updating the review' })
  }
}

const getReviews = async (req, res) => {
  console.log('hello')

  try {
    const reviews = await Review.find({})

    console.log(reviews)
    console.log('hello')
    return res.send(JSON.stringify(reviews))
  } catch (error) {
    console.error('Error fetching reviews:', error)
    return res
      .status(500)
      .json({ error: 'An error occurred while fetching the reviews' })
  }
}

module.exports = {
  getReviews,
  createReview,
  deleteReview,
  updateReview
}
