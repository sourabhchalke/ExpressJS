const express=require('express');

const router=express.Router();

router.get('/teacher/all',(req,res)=>{
    res.send("Getting all teachers details");
});

router.post('/teacher/create',(req,res)=>{
    res.send("Creating new details");
});

router.put('/teacher/update',(req,res)=>{
    res.send("Updating details");
});

router.delete('/teacher/delete',(req,res)=>{
    res.send("Deleting the details");
});

exports.Router=router;