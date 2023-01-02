const mongoose = require('mongoose');
const { person }  = require('../moduls/schema/personSchema');
const { event } = require('../moduls/schema/eventSchema');

class DB {
    constructor(){
        this.connect();
    }

    connect(){
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

    async insertEvent(date){
        try {
            const newEvent = new event(date);
            await newEvent.save();
            return {Message: 'Dato guardado con exito.'};
        } catch (error) {
            return {Error: error};
        }
    }

    async getPerson(){
        try {
            return await person.find({}, { __v: 0 }).sort({$natural:-1}).limit(5).lean(); 
        } catch (error) {
            return {Error: error};
        }
    }

    async getPersonById(id){
        try {
            return await person.find({"_id": id}, { __v: 0 }).lean();
        } catch (error) {
            return {Error: error};
        }
    }

    async getEventById(id){
        try {
            return await event.find({"_id": id}, { __v: 0 }).lean();
        } catch (error) {
            return {Error: error};
        }
    }

    async getEvent(){
        try {
            return await event.find({}, { __v: 0 }).sort({$natural:-1}).limit(5).lean(); 
        } catch (error) {
            return {Error: error};
        }
    }
}

const db = new DB();

module.exports = { db };