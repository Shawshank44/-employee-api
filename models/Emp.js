const mongoose = require('mongoose')

const empschema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    number : {
        type : Number,
        required : true,
    },
    gender : {
        type : String,
        required : true
    }
})

const details = new mongoose.model("Employees",empschema)

module.exports = details