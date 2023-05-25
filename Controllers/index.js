const express = require('express')
require('dotenv').config()
const {dbConnecion}=require('./database/config')
const app = express();

dbConnection();

app.use(express.json())

app.use(express.static('public'))

app.use('/api/auth', require('./routes/auth'))

app.listen(process.env.PORT, ()=>{
    console.log('Servidor corriendo en el puerto', process.env.PORT)
})