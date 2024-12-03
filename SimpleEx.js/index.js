const express = require('express');

const app = express();

app.get('/',(req,res)=>{
    res.send("Hello World...");
})

app.listen(8004,()=>{
    console.log("Server running on PORT = 8004");
})

