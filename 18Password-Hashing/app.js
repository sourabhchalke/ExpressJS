const express=require('express');
const app=express();
const mongoose=require('mongoose');
const User=require('./mongodb/dbconnection');
const url="mongodb://localhost:27017/authentication";
const bcrypt=require('bcrypt');
const PORT=8033;

app.use(express.json());
app.use(express.urlencoded({extended:true}));

mongoose.connect(url)
.then(()=>{console.log("Database Connected")})
.catch((err)=>{console.log("Database not connected")});

app.post('/register',async(req,res)=>{
    // console.log(name,username,password,age);
    
    try{
        const {name,username,password,age}=req.body;

        const salt= await bcrypt.genSalt(10);
        const hashPassword= await bcrypt.hash(password,salt);

        const createUser= await User.create({
            name:name,
            username:username,
            password:hashPassword,
            age:age
        });
        await createUser.save();
        console.log("Data Inserted Successfully");
        console.log(createUser);
        res.send(createUser);
    }catch(error){
        res.send(error.stack);
        console.log(error.stack);
    }
})

app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`);
});