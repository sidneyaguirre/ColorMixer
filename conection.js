const mongoose = require('mongoose')
let config = require('config')

let url = config.DBHost

console.log('########### ', url)

exports.moon = mongoose.connect(url, { useNewUrlParser: true })