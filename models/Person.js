const { required } = require("nodemon/lib/config");

const mongoose = require ('mongoose')

const Person = mongoose.model('Person',{
    modelo: String,
    ano: Number,
    fabricante: String,
    portas: Number,
    approved: Boolean,
})

module.exports = Person