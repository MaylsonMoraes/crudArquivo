//configinicial
require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const app = express()



//forma de ler JSON / middlewares
app.use(
    express.urlencoded({
        extended: true,
    }),
)

app.use(express.json())

//rotas da api
const fileRoutes = require('./routes/FileRoutes')

app.use('/file', fileRoutes)

//rota inicial / endpoint
app.get('/', (req, res) =>{

    //mostrar requisição
    res.json({message:'Funciona'})
})
//entregar uma porta

mongoose.connect(
    'mongodb+srv://maylson:moraes@cluster0.t8qjc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    )
.then(()=> {
    console.log('Conectamos ao MongoDB!')
    app.listen(3000)
})
.catch((err)=> console.log(err))

//entregar uma porta