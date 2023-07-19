const User = require('../models/User')

const updateUser = async (req, res) => {
  try {
    const { email, phoneNumber } = req.body
    console.log(email, phoneNumber)
    const user = await User.findOneAndUpdate(
      { _id: req.user.id },
      { email, phoneNumber },
      { new: true }
    )
    console.log(user.phoneNumber)
    if (!user) {
      throw Error('User not found')
    }

    res.json({ message: 'User updated successfully', user })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'An error occurred while updating the user' })
  }
}
const getUser = async (req, res) => {
  const user = await User.findById(req.user._id)
  return res.json(user.toJSON())
}

module.exports = {
  updateUser,
  getUser
}
