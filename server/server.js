require('dotenv').config()
const express = require('express')
const massive = require('massive')
const { SERVER_PORT, CONNECTION_STRING } = process.env
const a = require('./authController')
const b = require('./bookController')

//TOP-LEVEL MIDDLEWARE
const app = express()
app.use(express.json())
app.use(express.static('public'))

//ENDPOINTS
app.post('/api/treasure', a.adminOnly, a.getTreasure)

app.get('/api/books', b.getAllBooks)
app.get('/api/books/author', b.getBooks)

//LISTENING
massive(CONNECTION_STRING).then(databaseConnection => {
    app.set('db', databaseConnection)
    app.listen(SERVER_PORT, () => console.log(`PORT ${SERVER_PORT} is working`))
})
