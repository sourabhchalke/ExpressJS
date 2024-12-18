const express=require('express');
const dbConnect=require('./mongodb.js');
const PORT = 8021;
const app = new express();

//Getting data from database
app.get('/getData',async(req,res)=>{
    let data = await dbConnect();
    let response = await data.find().toArray();
    res.send(response);
    // console.log(response);
    
})

app.listen(PORT);