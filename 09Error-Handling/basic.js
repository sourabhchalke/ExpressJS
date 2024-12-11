const express = require('express');
const app=express();

app.get('/',(req,res)=>{
    try{
        res.sendFile('../html');
    }catch(error){
        console.error(error.stack);
        res.status(506).send("Invalid Request");
    }
});

app.listen(8015);