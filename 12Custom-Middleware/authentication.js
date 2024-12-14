const express=require('express');
const app=express();
const PORT=8018;

function authenticate(req,res,next){

    console.log(req.headers);
    const token = req.headers['authorization'];
    console.log(req.headers);
    console.log(token);
    if(token==="valid-token"){
        next();
    }
    else{
        res.status(400).send("Invalid Token");
    }
}

app.get('/',authenticate,(req,res)=>{
    res.status(200).send("This is protected route");
})

app.listen(PORT);