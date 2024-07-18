var mongoose = require('mongoose');

var referenceschema = new mongoose.Schema({
    name:{
        type : String
    }
})

module.exports = mongoose.model('reference',referenceschema);