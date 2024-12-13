const express=require('express');
const app=express();

function fetchData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Data Fetched");
        },4000);
    });
}

app.get('/',async(req,res,next)=>{
    
    try{
        const data= await fetchData();
        res.send(dat);
    }catch(err){
        console.log("Something went wrong");
        next(err);
    }
})
app.use((err,req,res,next)=>{
    console.log(err.stack);
    res.status(500).send("Something went wrong");
})

app.listen(8017);