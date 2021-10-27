import Clients from '../models/clients'
import Phones from '../models/phones'
import Anddresses from '../models/anddresses'
import mongoose from 'mongoose'
class ClientesService {
    static async criarCliente(dadosCliente : any) {
        const session = await mongoose.startSession()
        try {
            const {cliente_nome, cliente_nasc, is_active, enderecos, contatos} = dadosCliente
            const enderecosAdicionados : any[] = []
            const contatosAdicionados : any[] = []
    
            for(let i of dadosCliente.enderecos) {
                const endereco = await Anddresses.create({
                    rua: i.rua,
                    numero: i.numero,
                    complemento: i.complemento,
                    bairro: i.bairro,
                    cep: i.cep,
                    cidade: i.cidade
                })
                await endereco.save()
                enderecosAdicionados.push(endereco._id)
            }
            
            for(let c of dadosCliente.contatos) {
                const contato = await Phones.create({
                    ddd: c.ddd,
                    numero: c.numero,
                    descricao: c.descricao
                })
                await contato.save()
                contatosAdicionados.push(contato._id)
            }
    
            const cliente = await Clients.create({
                cliente_nome,
                cliente_nasc,
                is_active,
                enderecos: enderecosAdicionados,
                contatos: contatosAdicionados
            })
            await cliente.save()
            return cliente
            
        } catch (error) {
            
        }
    }

    static async todosClientes() {
        try {
            const clientes = await Clients.find().populate({ 
                path: 'enderecos', 
                populate: {
                    path:'contatos',
                },
            })
            return clientes
            
        } catch (error) {
            console.log('Erro ao buscar clientes no banco de dados')
        }
    }

    static async buscarClienteId(idCliente : String) {
        try {
            const clienteEncontrado = await Clients.findById(idCliente)
            return clienteEncontrado
        } catch (error) {
            console.log('Erro ao buscar clientes no banco de dados')
        }
    }
}

export default ClientesService