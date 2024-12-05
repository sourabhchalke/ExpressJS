const express=require('express');

const router=express.Router();

router.get('/student/all',(req,res)=>{
    res.send("Getting all student details");
});

router.post('/student/create',(req,res)=>{
    res.send("Creating new details");
});

router.put('/student/update',(req,res)=>{
    res.send("Updating details");
});

router.delete('/student/delete',(req,res)=>{
    res.send("Deleting the details");
});

exports.Router=router;