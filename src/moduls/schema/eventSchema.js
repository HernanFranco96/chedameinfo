const { Schema, model } = require('mongoose');

const eventSchema = new Schema({
    nombre: {
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
const event = model('event', eventSchema)
module.exports = {event};