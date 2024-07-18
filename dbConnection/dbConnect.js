var mongoose = require('mongoose');

module.exports = mongoose.connect(`${process.env.MONGO_URI}`)
    .then(() => console.log("dbConnect Successfully")).catch((e) => console.log(e))