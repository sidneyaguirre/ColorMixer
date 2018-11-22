/* jshint esversion: 6 */

const express = require('express')
const config = require('./config')
const static = express.static('./public')

let app = express()

app.set('port', config.port)
app.use(static)

module.exports = app