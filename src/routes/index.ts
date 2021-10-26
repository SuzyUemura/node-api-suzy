import express from 'express'
import clientesRoutes from './clientesRoutes'

const router = express.Router()

router.use('/clientes', clientesRoutes)

export default router