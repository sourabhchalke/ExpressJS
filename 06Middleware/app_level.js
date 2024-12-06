const express=require('express');
const app = express();

app.use((req,res,next)=>{
    console.log("Middleware Function...");
    next();
})
app.get('/',(req,res)=>{
    res.send("Home page...");
})

app.listen(8012);