const ClientsService = require('../services/ClientsService')

class ClientsController {
    /**
     * pega todos os clientes pelo ClientsService
     * @param {*} req 
     * @param {*} res 
     * @return lista de objetos 
     */
    static async getAllclients(req, res) {
        try {
            const clients = await ClientsService.findAllClients()
            console.log('teste controller' + clients)
            res.status(200).json(clients)
        } catch (error) {
            res.status(404).json({message: error.toString()})
        }
    }

    /**
     * Pega um cliente pela service
     * @param {*} req.params.id
     * @param {*} res 
     * @return lista de objetos
     */ 
    static async getOneClient(req, res) {
        try {
            const clientId = req.params.id
            const client = await ClientsService.findOneClient(clientId)
            res.status(200).json(client)
        } catch (error) {
            res.status(404).json({message: error.toString()})
        }
    }

    /**
     * criar um novo cliente pelo service pegando do corpo da requisição
     * @param {*} req.boy
     * @param {*} res 
     */
    static async postClient(req, res) {
        try {
            const dadosNovoCliente = req.body
            const novoCliente= await ClientsService.criarCliente(dadosNovoCliente)
            res.status(201).json(novoCliente)
        } catch (error) {
            res.status(404).json({message: error.toString()})
        }
    }
}

module.exports = ClientsController