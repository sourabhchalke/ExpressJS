const express = require('express');
const app=express();

app.get('/',(req,res,next)=>{
    try{
        throw new Error("Something went wrong");
    }catch(error){
        next(error);
    }
});
app.use((err,req,res,next)=>{
    console.error(err.stack);
    res.status(507).send(message = "OOPS ! Something Wrong");
});

app.listen(8015);