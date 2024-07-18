var mongoose = require('mongoose');

var followupschema = new mongoose.Schema({
    reason:{
        type : String
    },
    date:{
        type:String
    },
    by:{
        type:String
    },
    inquiry:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"inquiry"
    }
})

module.exports = mongoose.model('followup',followupschema);