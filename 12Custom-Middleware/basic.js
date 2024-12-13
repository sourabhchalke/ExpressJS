const express = require('express');
const app = express();
const PORT = 8018;

function basic(req,res,next){
    setTimeout(()=>{
        // res.send("Basic Custom Middleware");
        console.log("Basic Custom Middleware");
    },3000)

    next();
}

app.use(basic);

app.get('/',(req,res)=>{
    res.send("Hello");
})

app.listen(PORT);