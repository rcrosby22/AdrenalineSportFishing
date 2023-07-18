const User = require('../models/User');
const { verifyToken } = require('../middleware/index')

const updateUser = async (req, res) => {
  try {
    const { email, phoneNumber } = req.body;
    const user = await User.findOneAndUpdate(
      { _id: req.user.id }, // Assuming you have authentication middleware to set req.user.id
      { email, phoneNumber },
      { new: true }
    );

    if (!user) {
      throw Error('User not found');
    }

    res.json({ message: 'User updated successfully', user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while updating the user' });
  }
};

module.exports = {
  updateUser,
};
