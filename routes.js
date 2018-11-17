const Router = require('express').Router
let router = new Router()

let routeColor = require('')

router.use('/v1', routeColor)

module.exports = router