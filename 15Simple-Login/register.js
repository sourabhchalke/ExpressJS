const express=require('express');
const router = express.Router();
const dbConnect=require('./dbconnection/mongodb.js');

router.get('/',(req,res)=>{
    res.render('registration');
    
})

router.post('/',async(req,res)=>{
    
    res.send("Submitted Succesfully");
    const {first_name,last_name,username,email,password}=req.body;
    console.log(first_name,last_name,username,email,password);

    let db= await dbConnect();
    db.insertMany(
        [{
            first_name:first_name,
            last_name:last_name,
            username:username,
            email:email,
            password:password

        }]
    )
    console.log("Data Inserted");
})

module.exports=router;