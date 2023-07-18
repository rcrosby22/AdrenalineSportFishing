const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Update user data
router.put('/update', userController.updateUser);

module.exports = router;
