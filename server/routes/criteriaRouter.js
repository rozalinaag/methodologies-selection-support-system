//критерии юзера
const Router = require('express')
const router = new Router()
const criteriaController = require('../controllers/criteriaController');

router.post('/',criteriaController.create)
router.get('/',criteriaController.getAll)

module.exports = router