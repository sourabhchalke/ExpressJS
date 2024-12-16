const express=require('express');
const app=express();
const mongoose=require('mongoose');
const PORT=8020;

mongoose.connect("mongodb://localhost:27017/demo2DB")
.then(()=>{console.log("Connected to database...")})
.catch((err)=>{console.log(err)});

app.listen(PORT);