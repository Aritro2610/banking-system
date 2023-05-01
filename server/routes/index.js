const express = require("express");
const router = express.Router();
const User = require("../models/AccDatails");
const Transact = require("../models/transact")

router.get('/users',async(req,res)=>{
    try {
        const user = await User.find();
        console.log(user);
        res.json({status:"ok",user});
        
    } catch (error) {
        console.log(error);
    }
})

router.get('/user/:id',async(req,res)=>{
    try {
        console.log(typeof(req.params.id))
        const user = await User.findById(req.params.id)
        console.log(user)
        res.json({status:"ok",user});
    } catch (error) {
        console.log(error);
    }
})

router.get('/transactions',async(req,res)=>{
    try {    
        const transactions = await Transact.find();
        res.json(transactions)
    } catch (error) {
    }
    
})

// Route for Add money to wallet    

router.post('/add-money',(req,res)=>{
    const {name, balance, accountType} = req.body;

})
router.post('/transfer',async(req,res)=>{
    try {
        const {lender, borrower_name, amount} = req.body;
        const find_Borrower = await User.findOne({name:borrower_name});
        const find_sender = await User.findOne({name:lender});
        const transact = new Transact({
            senderName:lender,
            receiverName:borrower_name,
            moneyTransfer:amount
        })
        await transact.save();
        console.log(transact);
        if(amount<find_sender.balance && find_Borrower.name!=find_sender.name){
            const updateReceiverUser = await User.findOneAndUpdate({name:find_Borrower.name}, {balance:find_Borrower.balance+Number(amount)},{new:true})
            const updateSenderUser = await User.findOneAndUpdate({name:find_sender.name}, {balance:find_sender.balance-Number(amount)},{new:true})
            // const user = await User.find()
            res.json({status:"transaction successfull", data:true});
        }
        else{
            res.json("You are not autorized to send your self money")
        }
        
    } catch (error) {
        res.json({message:error})
    }

})


module.exports = router