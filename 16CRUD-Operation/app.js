require('dotenv').config();
const express=require('express');
const routers=require('./routes/router.js');
const app=express();
const Employee=require('./dbconnection/mongodb.js');
const { name } = require('ejs');

app.set('view engine','ejs');
app.set('../views','views');

app.get('/emp-list',async(req,res)=>{

    try{
       
        const data = await Employee.find();
        console.log(data);
        res.render('emp_list',{details:data});
    }catch(error){
        // res.status(400).send("Something went wrong",error);
        console.error("Something went wrong",error);
    }

    
})

app.use(express.json());

app.use('/api',routers);



app.listen(process.env.PORT);

