const express=require('express');
const app=express();
const helmet=require('helmet');
const PORT=8019;

app.use(helmet.contentSecurityPolicy({
    useDefault:true,
    
}));

app.get('/csp',(req,res)=>{
    console.log(req.headers);
    res.send("Using Helmet for better security for applications");
})

app.listen(PORT);