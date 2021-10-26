import Clients from '../models/clients'
import Phones from '../models/phones'
import Anddresses from '../models/anddresses'

class ClientesService {
    static async criarCliente(dadosCliente : any) {
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
            enderecosAdicionados.push(endereco.enderecos)
            await endereco.save()
        }
        
        for(let c of dadosCliente.contatos) {
            const contato = await Phones.create({
                ddd: c.ddd,
                numero: c.numero,
                descricao: c.descricao
            })
            contatosAdicionados.push(contato.contatos)
            await contato.save()
        }

        const cliente = await Clients.create({
            cliente_nome,
            cliente_nasc,
            is_active,
            endercos: enderecosAdicionados,
            contatos: contatosAdicionados
        })
        await cliente.save()
    }

    static async todosClientes() {
        
    }
}

export default ClientesService