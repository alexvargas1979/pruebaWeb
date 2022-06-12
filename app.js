
const express = require('express')

require('dotenv').config()

const app = express()

app.get('/', (req, res) => {

    console.log('peticion recibida')
    res.send('<h1>hola mundo </h1>')
})

const PORT = process.env.PORT || 4000

app.listen(PORT,()=> {
    console.log('servidor escuchando ${PORT}' )
})