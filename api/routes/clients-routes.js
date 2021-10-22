const ClientsController = require('../controllers/ClientsController')
const router = require('express').Router()

router.get('/', ClientsController.getAllclients)
router.get('/:id', ClientsController.getOneClient)
router.post('/', ClientsController.postClient)

module.exports = router