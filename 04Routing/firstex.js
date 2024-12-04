const express = require('express');
const app  = express();

app.get('/',(req,res)=>{
    res.send("Home Page , Using GET Method");
})

app.get('/about',(req,res)=>{
    res.send("About Page, Using GET Method");
})

app.post('/',(req,res)=>{
    res.send("Home Page , Using POST Method");
})

app.post('/about',(req,res)=>{
    res.send("About Page, Using POST Method");
})

app.listen(8010);