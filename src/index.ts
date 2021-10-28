import { Request, Response } from "express"

import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import routes from './routes'
import morgan from 'morgan'

dotenv.config()
const app = express()
const port = process.env.PORT
const mongodb = process.env.MONGO_DB || ''

app.use(morgan('dev'))
app.use(express.json(), cors ())
app.use(routes)

app.get('/', (req : Request, res : Response) => {
    res.status(200).json({
        message: 'API está funcionando.'
    })
})
 
mongoose.connect(mongodb, (err) => {
    if(err) {
        console.log('MongoDB: Falha na conexão', err)
    } else {
        console.log('MongoDB: Conectado com sucesso')
    }
})

app.listen(port, () => {
    console.log(`API iniciada | Porta ${port}`)
})