const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true // + its means=>its mendatory to enter the name ( this feild is must be filled)
    },
    age: {
        type: Number,

    },
    // work
    work: {
        type: String,
        // now workder is anyone okay so use enum for that
        enum: ['chef', 'manager', 'weighter'],
        required: true
    },
    mobile: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true  // for not entering same email id (2 person cant enter 2 same email id's so it will thorw error)
    },
    address: {
        type: String,
        required: true,
        unique: true
    },
    salary: {
        type: Number,
        required: true
    }
    // now after this schemea we make model for differnet operations


});
// create model
const Person = mongoose.model('Person', personSchema);

// now export 
module.exports = Person;
