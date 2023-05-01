const express = require("express");
const router = express.Router();
const User = require("../models/user")
const bcrypt = require("bcrypt")
const {allot} = require("../middleware/random")

router.post('/login',async(req,res)=>{
    try{
        const {accountNo,password} = req.body;
        const accNo = Number(accountNo)
        const user = await User.findOne({accountNo:accNo});
        const result = await bcrypt.compare(password,user.password)
        if(!user){
            res.json({message:'user does not exist'})
        }
        else{
            if(result === true && user.accountNo===accNo )
            res.json({message:'loggedIn',user})
            console.log('logg')
        }
    }catch(err){
        console.log(err)
    }finally{
        console.log('success');
    }
})
router.post('/signup',async(req,res)=>{
    try{
        let hashedPassword;
        const accountNo = allot(100,999);
        console.log(accountNo)
        const {name,email,password} = req.body;
        await bcrypt.hash(password,10).then((hash)=>{
            hashedPassword = hash;
        })
        const user = new User({
            name,
            email,
            accountNo,
            password:hashedPassword
        })
        await user.save();
        console.log(user)
    }catch(err){
        console.log(err)
    }finally{
        console.log('success');
    }
})

module.exports = router;