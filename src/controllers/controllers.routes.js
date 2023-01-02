const { db } = require('../DB/db');


const inicio = (req, res) => {
    db.getPerson().then(element => res.render('inicio', {element}));
};

const datos = (req, res) => {
    const { nombre }  = req.body;
    const dato = {
        nombre: nombre
    };
    const resp = db.insertPerson(dato);
    resp.then(message => res.send(message));
};

module.exports = { inicio, datos };