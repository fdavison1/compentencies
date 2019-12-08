require('dotenv').config()
const express = require('express')
const { SERVER_PORT } = process.env

//TOP-LEVEL MIDDLEWARE
const app = express()
app.use(express.json())

//LISTENING
app.listen(SERVER_PORT, () => console.log(`PORT ${SERVER_PORT} is working`))