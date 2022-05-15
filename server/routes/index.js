const Router = require('express')
const router = new Router()

const criteriaRouter = require('./criteriaRouter')
const departmentRouter = require('./departmentRouter')
const userRouter = require('./userRouter')
const methodologyRouter = require('./methodologyRouter')
const projectRouter = require('./projectRouter')

router.use('/criteria', criteriaRouter)
router.use('/departament', departmentRouter )
router.use('/user', userRouter)
router.use('/methodology', methodologyRouter)
router.use('/project', projectRouter)


module.exports = router