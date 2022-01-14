const router = require('express').Router()
const req = require('express/lib/request')
const { find, update } = require('../models/Person')
const Person = require('../models/Person')


//create - criação de dados
router.post('/',async (req, res) => {

    //req.body
    const {modelo, ano, fabricante, portas, approved} = req.body

    if (!modelo) {
        res.status(422).json({ error: 'O nome é obrigatório!' })
        return
    }

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

//read - leitura de dados
router.get('/', async (req, res)=>{
    try {

        const people = await Person.find()
        
        res.status(200).json(people)
      } catch (error) {
        res.status(500).json({error: error})
    }
})
router.get('/:id', async (req, res) =>{
    // extrair o dado da requisição, pela url = req.params
    const id = req.params.id

    try {

        const person = await Person.findOne({ _id: id })

        if(!person) {
            res.status(422).json({message: 'O usuário não foi encontrado!'})
            return
        }

      res.status(200).json(person)  
    } catch (error) {
        res.status(500).json({ error: error })
    }
})

//Update - atualização de dados (PUT, PATCH)
router.patch('/:id', async (req, res) =>{
    const id = req.params.id

    const {modelo, ano, fabricante, portas, approved} = req.body

    const person = {
        modelo, 
        ano, 
        fabricante, 
        portas, 
        approved
    }
    
    try {
        
        const updatedPerson = await Person.updateOne({_id: id}, person)
        
        if(updatedPerson.matchedCount === 0){
            res.status(422).json({message: 'O usuário não foi encontrado!'})
        }
        
            res.status(200).json(person)

    } catch (error) {
        res.status(500).json({ error: error })
    }
})
//DELETE - deletar dados
router.delete('/:id', (req, res) =>{

    const id = req.params.id

    const person = Person.findOne({ _id: id })

        if(!person) {
            res.status(422).json({message: 'O usuário não foi encontrado!'})
            return
        }
    })

module.exports = router