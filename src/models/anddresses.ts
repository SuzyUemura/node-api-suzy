import mongoose from 'mongoose'

const enderecosDoc = new mongoose.Schema({
    rua: {
        type: String,
        required: true
    },
    numero: {
        type: String,
        required: true
    },
    complemento: {
        type: String
    },
    bairro: {
        type: String
    },
    cep: {
        type: String
    },
    cidade: {
        type: String
    },
})
const endereco = mongoose.model('Addresses', enderecosDoc)
    
export default endereco