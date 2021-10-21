const ClientsService = require('../services/ClientsService')

class ClientsController {
    /**
     * pega todos os clientes pelo ClientsService
     * @param {*} req 
     * @param {*} res 
     */
    static async getAllclients(req, res) {
        try {
            const clients = await ClientsService.findAllClients()
            console.log('teste controller' + clients)
            res.status(200).json(clients)
        } catch (error) {
            res.status(404).json({menssage: error.toString()})
        }
    }

    /**
     * Pega um cliente pela service
     * @param {*} req.params.id
     * @param {*} res 
     */
    static async getOneClient(req, res) {
        try {
            const clientId = req.params.id
            const client = await ClientsService.findOneClient(clientId)
            res.status(200).json(client)
        } catch (error) {
            res.status(404).json({menssage: error.toString()})
        }
    }
}

module.exports = ClientsController