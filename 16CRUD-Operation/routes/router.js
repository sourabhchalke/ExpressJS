const express=require('express');
const app=express();
const Employee=require('../dbconnection/mongodb');
const { name } = require('ejs');
const router=new express.Router();

app.use(express.json());

router.get('/getData',async(req,res)=>{

    try{
        const getData=await Employee.find();
        console.log(getData);
        res.send(getData);
    }catch(error){
        res.status(400).send("Something went wrong");
    }
});

router.post('/create',async(req,res)=>{
    res.send(req.body);
    console.log(req.body);
    const {name,address,email,age}=req.body;
    try{
        const createData= await new Employee({
            name:name,
            address:address,
            email:email,
            age:age
        })
        createData.save();
        console.log(createData);
        console.log("Data Inserted");

    }catch(error){
        console.error(error.stack);
    }

});

router.put('/update',async(req,res)=>{
    res.send("Updated");
    try{
        const {name,address,email,age}=req.body;
        const updateData=await Employee.updateMany(
            {name:name},
            // {$set:{name:name}},
            // {$set:{address:address}},
            // {$set:{email:email}},
            {$set:{age:age}},
        );
        console.log("Data Updated");
        console.log(updateData);
    }catch(error){
        res.status(400).send("Something went wrong");
    }
});

router.delete('/delete',async(req,res)=>{
    const {name,address,email,age}=req.body;
    res.send(req.body);
    try{
        const deleteData=await Employee.deleteOne(
            {name:name},{address:address},{email:email},{age:age}
        )
        console.log("Data Deleted");
    }catch(error){
        res.send("Something went wrong");
        console.log(error.stack);
    }
});

module.exports=router;

