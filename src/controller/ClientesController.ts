import { Request, Response } from 'express'
import ClientesService from '../service/ClientesService'

class ClientesController {
    /**
     * a chamada para a criação de um novo cliente é feito pela service
     * @param {*} req.boy dados onde o usuario solicita um novo cliente
     * @param {*} res 
     */
     static async postClient(req: Request, res: Response) {
        try {
            const dadosCliente = req.body
            const novoCliente= await ClientesService.criarCliente(dadosCliente)
            res.status(201).json(novoCliente)
        } catch (err) {
            res.status(404).json({message: err})
        }
    }
}

export default ClientesController