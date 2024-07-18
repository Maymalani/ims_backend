var mongoose = require('mongoose');

var statusschema = new mongoose.Schema({
    name:{
        type : String
    }
})

module.exports = mongoose.model('status',statusschema);