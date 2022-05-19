const Router = require('express')
const router = new Router()
const userController = require('../controllers/userController')
const authMiddleware = require('../middleware/authMiddleware')

router.post('/registration', userController.registration)

router.post('/login', userController.login)

//авторизован пользователь или нет. проверка
//router.get('/auth', authMiddleware, userController.check)  //второй параметр - промежуточная проверка на валидность данных
router.get('/', userController.form)

module.exports = router