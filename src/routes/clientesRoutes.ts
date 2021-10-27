import express from 'express'
import ClientesController from '../controller/ClientesController'
const router = express.Router()

router.post('/', ClientesController.postClient)
router.get('/', ClientesController.getClients)
router.get('/:id', ClientesController.getOneClient)
export default router