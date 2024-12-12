const express=require('express');
const app=express();

app.use(express.urlencoded({extended:true}));

app.get('/form',(req,res)=>{
    res.sendFile(__dirname+'/index.html');
})

app.post('/form',(req,res)=>{
    res.send("Form Submitted Successfully");
    const {username,password}=req.body;
    console.log(username);
    console.log(password);
})

app.listen(8016);