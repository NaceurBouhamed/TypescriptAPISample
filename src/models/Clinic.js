var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ClinicSchema = new Schema({
    
    _id: String,
    username: String,
    clnicName: String,
    address: String,
    password: String

});

module.exports = mongoose.model('Clinic', ClinicSchema)