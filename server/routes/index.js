const Router = require('koa-router')
const router = new Router()

const auth = require('../controllers/user')

router.get('/api/user/:id', auth.getUserInfo)
router.post('/api/login', auth.postUserAuth)
router.post('/api/signup', auth.signup)

module.exports = router
