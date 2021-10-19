const dotenv = require('dotenv')
const express = require('express');
const cors = require('cors');
const routes = require('./routes')

const app = express();
dotenv.config()

app.use(
    express.json(),
    cors()
    )

app.listen(process.env.PORT, () => {
    console.log('API Iniciada: Porta 3030');
  })