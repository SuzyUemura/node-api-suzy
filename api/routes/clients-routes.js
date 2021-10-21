const ClientsController = require('../controllers/ClientsController')
const router = require('express').Router()

router.get('/', ClientsController.getAllclients)
router.get('/:id', ClientsController.getOneClient)

module.exports = router