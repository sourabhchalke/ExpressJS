const express = require('express');
const PORT = 8030;
const app = express();
const User = require('./mongodb.js');

app.use(express.json());



app.post('/post', async (req, res) => {
    try {
        res.send(req.body);
        const {name,address,mob_no}=req.body;
        const insertData = await new User({
            name: name,
            address: address,
            mob_no: mob_no
        })

        const result = await insertData.save();
        console.log(result);
    }catch(error){
        console.log(error.stack);
    }
})

app.get('/get', async (req, res) => {
    res.send("Getting Data");
    const getData = await User.find();
    console.log(getData);
});

app.put('/put/:name',async(req,res)=>{
    try{
        res.send(req.body);
        const {name,address,mob_no}=req.body;
        const updateData=await User.updateMany(
            {name:name},
            {$set:{address:address}},
            {$set:{mob_no:mob_no}}
        )
        console.log(updateData);
    }catch(error){
        console.log(error.stack);
    }
})

app.delete('/delete',async(req,res)=>{
    const {name}=req.body;
    console.log(name);
    
    try{

        const deleteData=await User.deleteOne({name:name});
        console.log(deleteData);

    }catch(error){
        console.log(error.stack);
    }
})


app.listen(PORT);