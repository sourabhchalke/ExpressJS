const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    console.log(req.accepts('html'));
    console.log(req.get('content-type'));
    console.log(req.is('text/html'));
    console.log(req.params);
    res.send("Helo..");
})

app.listen(8006);