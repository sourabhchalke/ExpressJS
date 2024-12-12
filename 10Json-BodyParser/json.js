const express=require('express');
const app=express();

app.use(express.json());

app.post('/user',(req,res)=>{
    // res.send("Post request");
    res.send(req.body.name);
    console.log(req.body);
})

app.listen(8016);