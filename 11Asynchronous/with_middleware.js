const express = require('express');
const app  = express();


function fetchData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Data Fetch Successfully, using middleware.");
        },3000);
    });
}


app.get('/', async(req,res,next)=>{
    try{
        const data = await fetchData();

        if(!data){
            next(err);
        }
        res.send(data);
    }catch(err){
        res.status(500).send("Something went wrong");
    }
})
app.listen(8017);