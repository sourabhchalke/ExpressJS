const express = require('express');
const app  = express();


function fetchData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Data Fetch Successfully , without using async/await.");
        },4000);
    });
}


app.get('/',(req,res)=>{
    fetchData()
    .then(data=>{
        res.send(data);
    })
    .catch(err=>{
        res.status(500).send("Error fetching data");
    })
})
app.listen(8017);