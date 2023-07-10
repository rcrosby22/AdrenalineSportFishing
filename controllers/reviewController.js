const Review = require ( '../models/Review');

const getReviewsByService = async (req, res) => {
  const { serviceId } = req.params;

  try {
    const reviews = await Review.find({ serviceId });
    res.json(reviews);
  } catch (error) {
    console.error('Error fetching reviews:', error);
  }
};

module.exports = {
  getReviewsByService,
};