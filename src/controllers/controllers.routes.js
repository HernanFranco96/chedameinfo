const { db } = require('../DB/db');


const inicio = (req, res) => {
    db.getPerson().then(element => res.render('inicio', {element}));
};

const getPerson = (req, res) => {
    res.render('ingresarPersona');
}

const insertPerson = (req, res) => {
    const { nombre, apellido, edad }  = req.body;
    const dato = {
        nombre: nombre,
        apellido: apellido,
        edad: edad
    };
    const resp = db.insertPerson(dato);
    resp.then(message => res.send(message));
};


module.exports = { inicio, insertPerson, getPerson };