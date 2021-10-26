import mongoose from 'mongoose'

const telefonesDoc = new mongoose.Schema({
    ddd: {
        type: String,
        required: true
    },
    numero: {
        type: String,
        required: true
    },
    descricao: {
        type: String,
        required: true
    },
})
    
const telefones = mongoose.model('Phones', telefonesDoc);
    
export default telefones;