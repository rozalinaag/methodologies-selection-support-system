const Router = require('express')
const router = new Router()
const methodologyController = require('../controllers/methodologyController');
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', checkRole('ADMIN'), methodologyController.create)
router.get('/', methodologyController.getAll)
router.get('/:id', methodologyController.getOne)

module.exports = router