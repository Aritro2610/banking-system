const mongoose = require("mongoose");

const transactionSchema = mongoose.Schema({
    senderName:{
        type: String,
        required:true
    },
    receiverName:{
        type:String,
        required:true
    },
    moneyTransfer:{
        type:Number,
        required : true
    },
    createdAt:{
        type:Date,
        default: Date.now(),
    }
})

module.exports = mongoose.model('transaction',transactionSchema)