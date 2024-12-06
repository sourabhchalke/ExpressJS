const express=require('express');
const app = express();

app.use((err,req,res,next)=>{
    console.log("Middleware Function...");
    // next();
    console.log(err);
})
app.get('/',(req,res)=>{
    res.send("Home page...");
})

app.listen(8012);