const express=require('express');
const app=express();

app.set('view engine','pug');

app.get('/',(req,res)=>{
    // res.send("Using PUG Template Engine");
    res.render('index');
})

app.listen(8015);