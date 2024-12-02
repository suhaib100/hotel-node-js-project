const { uniqWith, uniqueId } = require("lodash");

const mongoose = require('mongoose');


const personSchema = new mongoose.Schema({
    name: {
        type : String,
        required: true
    },
    age: {
        type: Number
    },
    work: {
        type : String,
        enum: ['chef' , 'writer' , 'manager'],
        required:true
    },
    mobile: {
        type:String,
        required:true
    },
    email: {
        type:String,
        required:true,
        unique:true

    },
    address: {
        type:String
    },
    salary: {
        type: Number,
        required:true
    }
});


const Person = mongoose.model('Person' , personSchema);
module.exports = Person;