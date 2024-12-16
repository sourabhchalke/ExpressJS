const express=require('express');
const app=express();
const cors=require('cors');
const PORT=8019;

app.use(cors());
console.log(cors());

app.get('/cors',(req,res)=>{
    res.send("Basic Cors");
})

app.listen(PORT);
