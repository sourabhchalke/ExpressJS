const express = require('express');
const app  = express();


function fetchData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Data Fetching");
        },4000);
    });
}

app.get('/', async(req,res)=>{
    try{
        const dat = await fetchData();
        res.send(data);
    }catch(err){
        res.status(500).send("Something went wrong");
    }
})
app.listen(8017);