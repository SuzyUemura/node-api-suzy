const mongoose = require('mongoose')

const clientesSchema = new mongoose.Schema({
    cliente_nome: {
        type: String,
        required: true
    },
    cliente_nasc: {
        type: Date,
        require: true
    },
    is_active: {
        type: Boolean,
        require: false, default: true
    },
    endereco_id: {
        type: Number,
        require: true
    },
    contatos: {
        type: [String]
    }
})

const Clientes = mongoose.model('Clients', clientesSchema)
export default Clientes