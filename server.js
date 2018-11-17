/* jshint esversion: 6 */

const express = require('express')
const bodyParser = require('body-parser');
const config = require('./config')
const routes = require('./routes')
const static = express.static('./public')

let app = express()

app.set('port', config.port)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(static)

app.use('/', routes)

module.exports = app