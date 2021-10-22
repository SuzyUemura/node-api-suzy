import { Request, Response } from "express"

const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const mongoose = require('mongoose')

dotenv.config()
const app = express()
const port = process.env.PORT
app.use(express.json(), cors ())

app.get('/', (req : Request, res : Response) => {
    res.status(200).json({
        message: 'API está funcionando.'
    })
})

mongoose.connect("mongodb+srv://admin:admin@nodedb.g6rw3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", (err : Error) => {
    if(err) {
        console.log('MongoDB: Falha na conexão', err)
    } else {
        console.log('MongoDB: Conectado com sucesso')
    }
})

app.listen(port, () => {
    console.log(`API iniciada | Porta ${port}`)
})