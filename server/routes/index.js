const Router = require('express')
const router = new Router()

const questionRouter = require('./questionRouter')
const departmentRouter = require('./departmentRouter')
const userRouter = require('./userRouter')
const methodologyRouter = require('./methodologyRouter')
const projectRouter = require('./projectRouter')

router.use('/departament', departmentRouter )
router.use('/user', userRouter)
router.use('/methodology', methodologyRouter)
router.use('/project', projectRouter)
router.use('/question', questionRouter)



module.exports = router