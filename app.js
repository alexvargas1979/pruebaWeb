
const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const { resourceLimits } = require('worker_threads')
require('dotenv').config()
const PORT = process.env.PORT || 4000

mongoose.connect(
  'mongodb+srv://innovaid:Alex8523$@cluster0.ldadk3f.mongodb.net/BDPrueba?retryWrites=true&w=majority'
  ).then((result) => console.log('conexion exitosa'))
  .catch((err) => console.log(err))

const ProductosSchema = mongoose.Schema({
  NombreProducto : {type: String, require: true},
  PrecioProducto : Number,

},
{timestamps: true})

const MProducto = mongoose.model('MProducto', ProductosSchema,'Productos')


const app = express()
app.use(express.static(path.join(__dirname,'public')))
app.use(express.json())


app.post('/api/v1/productos', (req, res) => {
 //NombreProducto: req.body.NomProducto,
//PrecioProducto: req.body.PrecProducto
 const NuevoProducto = new MProducto(req.body)
console.log({body: req.body})
 NuevoProducto
 .save()
 .then((result) => {
  res.status(201).json({ OK: true})
 })
 .catch((err) => console.log(err))

  
    //res.send('<h1>hola mundo </h1>')
  //  next()
})

//app.get('/', (req, res, next) => {
    //console.log('peticion recibida')
  //  res.status(200).sendFile('index.html',{root: __dirname})
    //res.send('<h1>hola mundo </h1>')
  //  next()
//})



app.listen(PORT,()=> {
  //consola del conputador
    console.log('servidor escuchando' )
})