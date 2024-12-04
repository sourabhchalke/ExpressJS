const express=require('express');
const app=express();
const PORT=8010;

app.get('/user/:id',(req,res)=>{
    const userID=req.params.id;
    res.send(`User ID is : ${userID}`);
    console.log(req.params);
})

app.get('/search',(req,res)=>{
    const query= req.query;
    res.send(`Search query : ${query}`);
    console.log(req.query);
})

app.listen(PORT);