const express=require('express');
const app=express();

app.get('/user/:id',(req,res,next)=>{
    res.send("User Info....");
    next();
}),(req,res)=>{
    res.send("Second route...");
}

app.listen(8012);