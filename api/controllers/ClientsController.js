const ClientsService = require('../services/ClientsService')

class ClientsController {
    static async getAllclients(req, res) {
        try {
            const clients = await ClientsService.findAllClients()
            res.status(200).json(clients)
        } catch (error) {
            res.status(404).json({menssage: error.toString()})
        }
    }
}

module.exports = ClientsController