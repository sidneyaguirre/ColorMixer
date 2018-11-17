//const axios = require('axios')
let color = "FFFF00"
let encodedUrl = encodeURI(color)
let link = `http://www.thecolorapi.com/id?format=svg&hex=${encodedUrl}`
console.log(link)
result.innerHTML = result.innerHTML + " <img src = " + link + "/>"