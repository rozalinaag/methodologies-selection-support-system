const Router = require('express')
const router = new Router()
const questionController = require('../controllers/questionController');

router.get('/', questionController.show1 )
//router.get('/', questionController.show )
router.get('/1', questionController.show1 )
router.get('/2', questionController.show2 )
router.get('/3', questionController.show3 )
router.get('/4', questionController.show4 )
router.get('/5', questionController.show5 )
router.get('/6', questionController.show6 )
router.get('/7', questionController.show7 )
router.get('/8', questionController.show8 )
router.get('/9', questionController.show9 )

router.post('/1', questionController.answer1 )
router.post('/2', questionController.answer1 )
router.post('/3', questionController.answer2 )
router.post('/4', questionController.answer3 )
router.post('/5', questionController.answer4 )
router.post('/6', questionController.answer5 )
router.post('/7', questionController.answer6 )
router.post('/8', questionController.answer7 )
router.post('/9', questionController.answer8 )
router.post('/result', questionController.answer9 )

module.exports = router