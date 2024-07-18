var mongoose = require('mongoose');

var courseschema = new mongoose.Schema({
    name:{
        type : String
    }
})

module.exports = mongoose.model('course',courseschema);