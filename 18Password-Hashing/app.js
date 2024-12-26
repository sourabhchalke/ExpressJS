const express=require('express');
const app=express();
const mongoose=require('mongoose');
const User=require('./mongodb/dbconnection');
const url="mongodb://localhost:27017/authentication";
const PORT=8033;

mongoose.connect(url)
.then(()=>{console.log("Database Connected")})
.catch((err)=>{console.log("Database not connected")});


app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`);
});