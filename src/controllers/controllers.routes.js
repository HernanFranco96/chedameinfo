const { db } = require('../DB/db');
const { person } = require('../moduls/schema/personSchema');

const inicio = (req, res) => {
    let persons = [], events = [];
    db.getPerson().then(element => element.forEach(i => persons.push(i)));
    db.getEvent().then(element => element.forEach(i => events.push(i)))
    res.render('inicio', {persons, events});
};

const renderForm = (req, res) => {
    res.render('ingresarDatos');
}

const crearFecha = () => {
    const today = new Date();
    return today.toLocaleString('en-GB');
}

const insertPerson = (req, res) => {
    const { nombre, apellido, desde, hasta, text1 }  = req.body;
    let myfile = req.file;
    if(!myfile) {
        const err = new Error('No cargo el archivo,');
        err.httpStatusCode = 400;
        return next(err);
    }
    const dato = {
        nombre: nombre,
        apellido: apellido,
        desde: desde.toLocaleString('en-GB'),
        hasta: hasta.toLocaleString('en-GB'),
        categoria: 'persona',
        text: text1,
        fechaRegistro: crearFecha(),
        foto: myfile.path
    };
    const resp = db.insertPerson(dato);
    resp.then(message => res.json(message));
};

const insertEvent = (req, res) => {
    const { nombre, desde, hasta, text2 }  = req.body;
    const dato = {
        nombre: nombre,
        desde: desde.toLocaleString('en-GB'),
        hasta: hasta.toLocaleString('en-GB'),
        categoria: 'evento',
        text: text2,
        fechaRegistro: crearFecha()
    };
    console.log(dato);
    const resp = db.insertEvent(dato);
    resp.then(message => res.json(message));
}

const getPerson = (req, res) => {
    const id = req.params.id;
    const resp = db.getPersonById(id);
    resp.then(person => res.render('persona', {person}));
}

const getEvent = (req, res) => {
    const id = req.params.id;
    const resp = db.getEventById(id);
    resp.then(event => res.render('evento', {event}));
}


module.exports = { inicio, insertPerson, renderForm, insertEvent, getPerson, getEvent };