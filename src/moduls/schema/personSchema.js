const { Schema, model } = require('mongoose');

const personSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    apellido: {
        type: String,
        required: true
    },
    desde: {
        type: String,
        required: true
    },
    hasta: {
        type: String
    },
    categoria: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    }
});
const person = model('person', personSchema)
module.exports = {person};