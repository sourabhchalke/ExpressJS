const express=require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.render('registration');
    
})

router.post('/',(req,res)=>{
    res.send("Form submitted successfully");
    const {first_name,last_name,username,email,password}=req.body;
    console.log(first_name);
})

module.exports=router;