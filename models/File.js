const { required } = require("nodemon/lib/config");

const mongoose = require ('mongoose')

const File = mongoose.model('File',{
    Categoria: String,
    SubCategoria: String,
    TitulodoDocumento: String,
    Sintese: String,
    DatadeValidade: Number,
    Renova: String,
    AreaResponsavel: String,
    comentarios: String,
    Versao: Number,
    Status: String,
    Prioridade: String,
    Criadopor: String,
    Criadoem: Number,
    Modificadopor: String,
    Modificadoem: Number,
    responsavel1: String,
    responsavel2: String,
    responsavel3: String,
    approved: Boolean,
})

module.exports = File