import { Request, Response } from 'express'
import ClientesService from '../service/ClientesService'

const service = new ClientesService() 
class ClientesController {
    /**
     * a chamada para a criação de um novo cliente é feito pela service
     * @param {*} req.body dados onde o usuario solicita um novo cliente
     * @param {*} res 
     */
      async postClient(req: Request, res: Response) {
        try {
            const dadosCliente = req.body
            const novoCliente= await service.criarCliente(dadosCliente)
            res.status(201).json(novoCliente)
        } catch (err) {
            res.status(404).json({message: err})
        }
    }
    /**
     * Função busca todos os clientes cadastrados
     * @param req 
     * @param res 
     */
     async getClients(req: Request, res: Response) {
        try {
            const clientes = await service.todosClientes()
            res.status(200).json(clientes)
        } catch (err) {
            res.status(404).json({message: err})
        }
    }
    /**
     * Função busca um cliente por id
     * @param req.params.id
     * @param res 
     */
     async getOneClient(req: Request, res: Response) {
        try {
            const idCliente = req.params.id
            const clienteEncontrado = await service.buscarClienteId(idCliente)
            res.status(200).json(clienteEncontrado)
        } catch (err) {
            res.status(404).json({message: err})
        }
    }

    /**
     * Função exclui o cliente a partir do id
     * @param req.params.id
     * @param res 
     */
    async deleteClient(req: Request, res: Response) {
        try {
            const idCliente = req.params.id
            await service.deletarCliente(idCliente)
            res.status(200).end()
        } catch (err) {
            res.status(404).json({message: err})
        }
    }
}

export default ClientesController