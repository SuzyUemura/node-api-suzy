import Clients from '../models/clients'
import Phones from '../models/phones'
import Anddresses from '../models/anddresses'
import mongoose, { AnyObject } from 'mongoose'
class ClientesService {
     async criarCliente(dadosCliente : AnyObject) : Promise<any>  {
        const session = await mongoose.startSession()
        session.startTransaction()
        try {
            const {cliente_nome, cliente_nasc, is_active, enderecos, contatos} = dadosCliente
          
            console.log(dadosCliente)
           
                const listaEnderecos = await Anddresses.create(enderecos, {session: session})
                const enderecosAdicionados = listaEnderecos.map(e => e._id)
            
                const listaContatos = await Phones.create(contatos, {session: session})
                const contatosAdicionados = listaContatos.map(c => c._id)
    
            const cliente = await Clients.create({
                cliente_nome,
                cliente_nasc,
                is_active,
                enderecos: enderecosAdicionados,
                contatos: contatosAdicionados
            })
            await session.commitTransaction()
            session.endSession()
            return cliente
            
        } catch (error) {
            await session.abortTransaction()
            session.endSession()
            console.log('Erro ao criar novo cliente')
        }
    }

     async todosClientes() : Promise<any> {
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

     async buscarClienteId(idCliente : String) : Promise<any>  {
        try {
            const clienteEncontrado = await Clients.findById(idCliente)
            return clienteEncontrado
        } catch (error) {
            console.log('Erro ao buscar cliente no banco de dados')
        }
    }

     async deletarCliente(idCliente: String) : Promise<any>  {
        try {
            await Clients.findByIdAndDelete(idCliente)
        } catch (err) {
            console.log('Erro ao excluir cliente')
        }
    }

    async atualizarCliente(idCliente: String, clienteEditado : AnyObject) : Promise<any>  {
        try {
            await Clients.findByIdAndUpdate(idCliente, clienteEditado)
        } catch (err) {
            console.log('Erro ao atualizar cliente')
        }
    }
}

export default ClientesService