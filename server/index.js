const express = require('express')
const bodyParser = require('body-parser')
const controller = require(__dirname + '/controller')
const massive = require('massive')
require('dotenv').config()

// const cors = require('cors')
const app = express()

app.use( bodyParser.json())
// app.use(cors())

massive( process.env.CONNECTION_STRING ).then( dbInstance => {
    app.set('db', dbInstance)
}).catch( error => console.log(`Heroku Database Connection Error`, error) );

const apiBaseUrl = "/api/stuff"

const port = 3032
app.listen(port, () => (console.log(`Server is listening on port ${port}.`)))