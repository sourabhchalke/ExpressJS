const express=require('express');
const app=express();
const PORT = 8018;

function logRequest(req,res,next){
    console.log(`${req.method} and ${req.url}`);
    
    next();
}
// Use custom middleware globally
app.use(logRequest);

app.get('/',(req,res)=>{
    res.send("Example of Custom Logging Middleware");
})

app.listen(PORT);