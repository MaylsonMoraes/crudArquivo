const router = require('express').Router()
const req = require('express/lib/request')
const { find, update } = require('../models/File')
const File = require('../models/File')


//create - criação de dados
router.post('/',async (req, res) => {

    //req.body
    const {Categoria, SubCategoria, TitulodoDocumento, Sintese, DatadeValidade,
        Renova, AreaResponsavel, comentarios, Versao, Status, Prioridade, Criadopor, 
        Criadoem, Modificadopor, Modificadoem, responsavel1, responsavel2, responsavel3, 
        approved} = req.body

    if (!modelo) {
        res.status(422).json({ error: 'O nome é obrigatório!' })
        return
    }

    const file = {
        Categoria,
        SubCategoria,
        TitulodoDocumento,
        Sintese,
        DatadeValidade,
        Renova,
        AreaResponsavel,
        comentarios,
        Versao,
        Status,
        Prioridade,
        Criadopor,
        Criadoem,
        Modificadopor,
        Modificadoem,
        responsavel1,
        responsavel2,
        responsavel3,
        approved
    }
    try {

        await File.create(file)

        res.status(201).json({message: 'Arquivo inserido no sistema com sucesso!'})
        
    } catch (error) {
        res.status(500).json({error: error})
    }
})

//read - leitura de dados
router.get('/', async (req, res)=>{
    try {

        const files = await File.find()
        
        res.status(200).json(files)
      } catch (error) {
        res.status(500).json({error: error})
    }
})
router.get('/:id', async (req, res) =>{
    // extrair o dado da requisição, pela url = req.params
    const id = req.params.id

    try {

        const file = await File.findOne({ _id: id })

        if(!file) {
            res.status(422).json({message: 'O arquivo não foi encontrado!'})
            return
        }

      res.status(200).json(file)  
    } catch (error) {
        res.status(500).json({ error: error })
    }
})

//Update - atualização de dados (PUT, PATCH)
router.patch('/:id', async (req, res) =>{
    const id = req.params.id

    const {Categoria, SubCategoria, TitulodoDocumento, Sintese, DatadeValidade,
        Renova, AreaResponsavel, comentarios, Versao, Status, Prioridade, Criadopor, 
        Criadoem, Modificadopor, Modificadoem, responsavel1, responsavel2, responsavel3, 
        approved} = req.body

    const file = {
        Categoria,
        SubCategoria,
        TitulodoDocumento,
        Sintese,
        DatadeValidade,
        Renova,
        AreaResponsavel,
        comentarios,
        Versao,
        Status,
        Prioridade,
        Criadopor,
        Criadoem,
        Modificadopor,
        Modificadoem,
        responsavel1,
        responsavel2,
        responsavel3,
        approved,
    }
    
    try {
        
        const updatedFile = await File.updateOne({_id: id}, file)
        
        if(updatedFile.matchedCount === 0){
            res.status(422).json({message: 'O arquivo não foi encontrado!'})
        }
        
            res.status(200).json(file)

    } catch (error) {
        res.status(500).json({ error: error })
    }
})
//DELETE - deletar dados
router.delete('/:id', async (req, res) =>{

    const id = req.params.id

    const file = await File.findOne({ _id: id })

        if(!file) {
            res.status(422).json({message: 'O arquivo não foi encontrado!'})
            return
        }

        try {
            
            await File.deleteOne({ _id: id})

            res.status(200).json({message: 'Arquivo removido com sucesso!'})

        } catch (error) {
            res.status(500).json({ error: error })
        }
    })

module.exports = router