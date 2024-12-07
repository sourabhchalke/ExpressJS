const express=require('express');
const app=express();


app.use((req,res,next)=>{
    console.log("Middleware 1");
    req.Name="From middleware 1";
    console.log(req.Name);
    next();
})
app.use((req,res,next)=>{
    console.log("Middleware 2");
    console.log(req.Name);
    next();
})

app.get('/',(req,res)=>{
    console.log(req.Name);
    res.send("Home Page");
})

app.listen(8012);