const express=require('express');
const app=express();
const helmet=require('helmet');
const PORT=8019;

app.use(helmet());

app.get('/',(req,res)=>{
    console.log(req.headers);
    res.send("Using Helmet for better security for applications");
})

app.listen(PORT);