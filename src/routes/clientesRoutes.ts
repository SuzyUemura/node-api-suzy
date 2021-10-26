import express from 'express'
import ClientesController from '../controller/ClientesController'
const router = express.Router()

router.post('/', ClientesController.postClient)

export default router