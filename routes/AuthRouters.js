const router = require('express').Router()
const controller = require('../controllers/AuthControllers')


router.post('/login', controller.Login)
router.post('/register', controller.Register)
router.put('/update/:user_id',)


router.get('/session',)

module.exports = router