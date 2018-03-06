var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PatientSchema = new Schema({

    _id: String,

    username: String,

    firstName: String,
    
    lastName: String,

    address: String,

    password: String,

    hash: String


});

module.exports = mongoose.model('Patient', PatientSchema)