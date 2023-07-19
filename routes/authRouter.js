const router = require('express').Router()
const controller = require('../controllers/authController')

router.post('/login', controller.Login)
router.post('/register', controller.Register)
router.put('/update/:user_id', controller.UpdatePassword)

router.get('/session')

module.exports = router
