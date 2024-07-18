var mongoose = require('mongoose');

var inquiryschema = new mongoose.Schema({
    branch: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'branch'
    },
    name: {
        type: String
    },
    contact: {
        type: String
    },
    joindate: {
        type: String
    },
    reference: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'reference'
    },
    ref_by: {
        type: String
    },
    inquiry_by: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'admin'
    },
    status: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'status'
    },
    status_date: {
        type: String
    },
    inquiry_date: {
        type: String
    },
    email: {
        type: String
    },
    otp: {
        type: Number
    },
    verify: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('inquiry', inquiryschema);