const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const { verifyToken, stripToken } = require('../middleware/index')

router.put('/update', stripToken, verifyToken, userController.updateUser)
router.get('/', stripToken, verifyToken, userController.getUser)

module.exports = router
