const mongoose = require("mongoose");

var roleschema = new mongoose.Schema({
    name :{
        type : String
    }
})
module.exports = mongoose.model('role',roleschema);