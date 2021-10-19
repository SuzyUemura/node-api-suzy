const ClientsController = require('../controllers/ClientsController')
const router = require('express').Router()

router.get('/', ClientsController.getAllclients)

module.exports = router