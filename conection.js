//Conexion a base de datos MongoDB
const mongoose = require('mongoose')
let config = require('config')

let url = config.DBHost

exports.moon = mongoose.connect(url, { useNewUrlParser: true })