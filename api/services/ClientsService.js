const database = require('../models')

class ClientsService {
  static findAllClients() {
    try {
      const todosClientes = database.Clientes.findAll({
        attributes: ['cliente_nome', 'cliente_nasc', 'is_active'],
        include: [
          {
            model: database.Enderecos,
            as: 'endereco_res',
            attributes: ['rua', 'numero', 'complemento', 'bairro', 'cep', 'cidade']
          },
          {
            model: database.Enderecos,
            as: 'endereco_comerc',
            attributes: ['rua', 'numero', 'complemento', 'bairro', 'cep', 'cidade']
          },
          {
            model:database.Telefones,
            as: 'telefones',
            attributes: ['ddd', 'numero']
          },
          {
            model: database.Telefones,
            as: 'celulares',
            attributes: ['ddd', 'numero']
          }
        ]
      })
      return todosClientes
    } catch (error) {
      console.log('Dados não encontrados no banco')
    }
  }
}

module.exports = ClientsService