const database = require('../models')

class ClientsService {
    static findAllClients() {
        try {
            const todosClientes = database.Clientes.findAll()
            return todosClientes
        } catch (error) {
            console.log('Dados não encontrados no banco')
        }
    }
}

module.exports = ClientsService