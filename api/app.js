const dotenv = require('dotenv')
const express = require('express');
const cors = require('cors');
const routes = require('./routes')
const morgan = require('morgan')

const app = express();
dotenv.config()

app.use(morgan('dev'))
app.use(
    express.json(),
    cors(),
    routes
    )

app.listen(process.env.PORT, () => {
    console.log('API Iniciada: Porta 3030');
  })