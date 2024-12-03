const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    // console.log(res.app);
    // console.log(res.headersSent);
    console.log(res.locals);
    res.end("Response Object");
})

app.listen(8007);