const mongoose = require('mongoose');
const { person }  = require('../moduls/schema/personSchema');

class DB {
    constructor(){
        this.#connect();
    }

    #connect(){
        try{
            mongoose.set('strictQuery', false);
            const db = mongoose.connect('mongodb://localhost:27017/chedameinfo',{
                    useNewUrlParser: true,
                    useUnifiedTopology: true
                });
            console.log('Base de datos conectada con exito.');
        }catch(err){
            console.log(err);
        }
    }

    async insertPerson(date){
        try {
            const newPerson = new person(date);
            await newPerson.save();
            return {Message: 'Dato guardado con exito.'};
        } catch (error) {
            return {Error: error};
        }
    };

    async getPerson(){
        try {
            return person.find({}, { __v: 0, _id: 0 }).lean(); 
        } catch (error) {
            return {Error: error};
        }
    }
}

const db = new DB();

module.exports = { db };