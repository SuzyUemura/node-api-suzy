import express from 'express'
import ClientesController from '../controller/ClientesController'
const controller = new ClientesController()
const router = express.Router()

router.post('/', controller.postClient)
router.get('/', controller.getClients)
router.get('/:id', controller.getOneClient)
router.delete('/:id', controller.deleteClient)
export default router