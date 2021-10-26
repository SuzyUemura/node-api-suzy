import { Request, Response } from "express"

import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from 'mongoose'

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