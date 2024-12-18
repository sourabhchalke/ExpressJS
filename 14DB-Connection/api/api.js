const express=require('express');
const dbConnect=require('./mongodb.js');
const PORT = 8021;
const app = new express();

//Pasing json data
app.use(express.json());

//Getting data from database
app.get('/getData',async(req,res)=>{
    let data = await dbConnect();
    let response = await data.find().toArray();
    res.send(response);
    // console.log(response);
    
})

//Using post api method to insert/create new data
app.post('/postData',async(req,res)=>{
    let db = await dbConnect();
    response = await db.insertOne(req.body);
    
    console.log(response);
    res.send(req.body);
})

app.listen(PORT);