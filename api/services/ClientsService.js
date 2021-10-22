const { sequelize } = require('../models')
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

  static async findOneClient(id) {
    try {
      const cliente = await database.Clientes.findOne(this.formatacaoGet(), {where: {id: id}})
      return cliente
    } catch (error) {
      console.log('Dado não encontrado no banco')
    }
  }

  static async criarCliente(corpoRequisicao) {
    const t = await sequelize.transaction()
    try {
      const endereco_resid = corpoRequisicao.endereco_resid
      const residencia = database.Enderecos.create(endereco_resid, {transaction: this.t})
      const endereco_comer = corpoRequisicao.endereco_comer
      const comercial = database.Enderecos.create(endereco_comer, {transaction: this.t})

      const tel = corpoRequisicao.telefone
      const telefone = database.Telefones.create(tel, {transaction: this.t})
      const cel = corpoRequisicao.celular
      const celular = database.Telefones.create(cel, {transaction: this.t})
      
      const cliente = {
        cliente_nome: corpoRequisicao.cliente_nome,
        cliente_nasc: corpoRequisicao.cliente_nasc,
        is_active: corpoRequisicao.is_active,
        endereco_resid: residencia.id,
        endereco_comer: comercial.id,
        telefone: telefone.id,
        celular: celular.id
      }

      const novoCliente =  await database.Clientes.create(cliente, {transaction: this.t})
      await t.commit()
      return novoCliente
    } catch (error) {
      await t.rollback()
     console.log('Falha ao criar cliente') 
    }
  }
}

module.exports = ClientsService