const database = require('../models')

class ClientsService {
    static formatacaoGet() {
    const formatacao = { 
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
    }
    return formatacao
   } 

   static async findAllClients() {
    try {
      const todosClientes = await database.Clientes.findAll(this.formatacaoGet())
      return todosClientes
    } catch (error) {
      console.log('Dados não encontrados no banco')
    }
  }

  static findOneClient(id) {
    try {
      const cliente = database.Clientes.findOne(this.formatacaoGet(), {where: {id: id}})
      return cliente
    } catch (error) {
      console.log('Dados não encontrados no banco')
    }
  }
}

module.exports = ClientsService