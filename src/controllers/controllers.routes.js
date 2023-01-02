const { db } = require('../DB/db');


const inicio = (req, res) => {
    let persons = [], events = [];
    db.getPerson().then(element => element.forEach(i => persons.push(i)));
    db.getEvent().then(element => element.forEach(i => events.push(i)))
    res.render('inicio', {persons, events});
};

const renderForm = (req, res) => {
    res.render('ingresarDatos');
}

const insertPerson = (req, res) => {
    const { nombre, apellido, desde, hasta, text }  = req.body;
    const dato = {
        nombre: nombre,
        apellido: apellido,
        desde: desde.toLocaleString('en-GB'),
        hasta: hasta.toLocaleString('en-GB'),
        categoria: 'persona',
        text: text
    };
    const resp = db.insertPerson(dato);
    resp.then(message => res.json(message));
};

const insertEvent = (req, res) => {
    const { nombre, desde, hasta, text }  = req.body;
    const dato = {
        nombre: nombre,
        desde: desde.toLocaleString('en-GB'),
        hasta: hasta.toLocaleString('en-GB'),
        categoria: 'evento',
        text: text
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
    resp.then(person => res.render('persona', {person}));
}

module.exports = { inicio, insertPerson, renderForm, insertEvent, getPerson, getEvent };