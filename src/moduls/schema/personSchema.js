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
    edad: {
        type: Date,
        required: true
    }
});
const person = model('person', personSchema)
module.exports = {person};