const router = require('express').Router()
const Person = require('../models/Person')

router.post('/',async (req, res) => {

    //req.body
    const {modelo, ano, fabricante, portas, approved} = req.body

    if (!modelo) {
        res.status(422).json({ error: 'O nome é obrigatório!' })
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

module.exports = router