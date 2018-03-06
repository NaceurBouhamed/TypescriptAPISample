var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DoctorSchema = new Schema({

    _id: String,

    username: String,

    address: String,

    password: String,

    patients: [],

    checks: []


});

module.exports = mongoose.model('Doctor', DoctorSchema)