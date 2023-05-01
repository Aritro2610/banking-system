const mongoose = require("mongoose");
const AccountDetailsSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    balance:{
        type:Number,
        required:true
    },
    accountType:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now(),
        
    }
})

module.exports = mongoose.model('accountDetails',AccountDetailsSchema)