require('dotenv').config()
const sequelize = require('./db')
const express = require('express')
const models = require('./models/models')
const cors = require('cors')
const router = require('./routes/index')
const path = require('path')
const errorHandler = require('./middleware/ErrorHandlingMiddleware')

const PORT = process.env.PORT || 5000

const app = express()

app.use(cors())
app.use(express.json())
app.use('/api', router)
app.use(express.static(path.resolve(__dirname, 'static')))

// Обработка ошибок, последний Middleware
app.use(errorHandler)

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start()