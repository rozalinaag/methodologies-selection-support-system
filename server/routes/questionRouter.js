const Router = require('express')
const router = new Router()
const questionController = require('../controllers/questionController');

router.post('/', )
//router.get('/', questionController.show )
router.get('/1', questionController.show1 )
router.get('/2', questionController.show2 )
router.get('/3', questionController.show3 )

module.exports = router