const routers = require('express').Router()
const controller = require('../controllers/PostControllers')


router.get('/', controller.GetPosts)

router.post('/',)

router.put('/:post_id',

)
router.delete('/:post_id',)

module.exports = routers