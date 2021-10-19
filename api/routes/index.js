const clientsRoutes = require('./clients-routes')
const routes = require('express').Router()


routes.use('/clients', clientsRoutes)
module.exports =  routes