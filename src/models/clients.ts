import mongoose from 'mongoose'

const clientesDoc= new mongoose.Schema({
    cliente_nome: {
        type: String,
        required: true,
    },
    cliente_nasc: {
        type: Date,
        required: true
    },
    is_active: {
        type: Boolean,
        required: true, default: true
    },
    enderecos: [{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Addresses'
    }],
    contatos: [{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Phones'
    }]
})

const Clientes = mongoose.model('Clients', clientesDoc)

export default Clientes