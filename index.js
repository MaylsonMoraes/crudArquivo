const express = require('express')
const mongoose = require('mongoose')
const app = express()

const Person = require('./models/Person')


//forma de ler JSON / middlewares
app.use(
    express.urlencoded({
        extended: true,
    }),
)

app.use(express.json())

//rotas da api
app.post('/person',async (req, res) => {

    //req.body
    const {modelo, ano, fabricante, portas, approved} = req.body

    const person = {
        modelo,
        ano,
        fabricante,
        portas,
        approved,
    }
    try {

        await Person.create(person)

        res.status(201).json({message: 'Pessoa inserida no sistema com sucesso!'})
        
    } catch (error) {
        res.status(500).json({error: error})
    }
})

//rota inicial / endpoint
app.get('/', (req, res) =>{

    //mostrar requisição
    res.json({message:'Oi Express'})
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