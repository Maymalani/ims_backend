var mongoose = require('mongoose');

var adminschema = new mongoose.Schema({
    admin_name: {
        type: String
    },
    admin_email: {
        type: String
    },
    password: {
        type: String
    },
    role: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "role"
    },
    branch: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "branch"
    },
    contact: {
        type: String
    },
    image: {
        type: String
    }

});

module.exports = mongoose.model('admin', adminschema);