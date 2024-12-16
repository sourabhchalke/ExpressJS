const express=require('express');
const { type } = require('express/lib/response');
const mongoose=require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true
    },
    age:{
        type:Number,
        default:0
    },
});

module.exports=mongoose.model('User',userSchema);