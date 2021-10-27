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

    static async getClients(req: Request, res: Response) {
        try {
            const clientes = await ClientesService.todosClientes()
            res.status(200).json(clientes)
        } catch (err) {
            res.status(404).json({message: err})
        }
    }

    static async getOneClient(req: Request, res: Response) {
        try {
            const idCliente = req.params.id
            const clienteEncontrado = await ClientesService.buscarClienteId(idCliente)
            res.status(200).json(clienteEncontrado)
        } catch (err) {
            res.status(404).json({message: err})
        }
    }
}

export default ClientesController