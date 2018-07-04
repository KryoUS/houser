const express = require('express')
const bodyParser = require('body-parser')
const controller = require(__dirname + '/controller')
// const cors = require('cors')
const app = express()

app.use( bodyParser.json())
// app.use(cors())

const apiBaseUrl = "/api/stuff"

const port = 3032
app.listen(port, () => (console.log(`Server is listening on port ${port}.`)))