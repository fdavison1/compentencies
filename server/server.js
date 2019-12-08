require('dotenv').config()
const express = require('express')
const { SERVER_PORT } = process.env
const a = require('./authController')

//TOP-LEVEL MIDDLEWARE
const app = express()
app.use(express.json())
app.use(express.static('public'))

//ENDPOINTS
app.post('/api/treasure', a.adminOnly, a.getTreasure)

//LISTENING
app.listen(SERVER_PORT, () => console.log(`PORT ${SERVER_PORT} is working`))
