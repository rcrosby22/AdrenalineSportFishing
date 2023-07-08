import Review from '../models/Review';

const getReviewsByService = async (req, res) => {
  const { serviceId } = req.params;

  try {
    const reviews = await Review.find({ serviceId });
    res.json(reviews);
  } catch (error) {
    console.error('Error fetching reviews:', error);
    // You can choose to log the error for debugging purposes
    // or simply ignore it without sending a response
  }
};

module.exports = {
  getReviewsByService,
};