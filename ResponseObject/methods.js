const express = require("express");
const app = express();

app.get('/',(req,res)=>{
    // res.send("Hello...");
    // res.append('Warning','199 Mixellaneous Warning');
    // res.attachment('./car.jpg');
    // res.download('car.jpg');
    // res.end("End...");
    // res.status(404).end();
    // res.json({name:'Ram'});
    // res.location('car.jpg');
    // res.sendFile('./Coffee/index.html',function(err){
    //     console.log(err);
    // })
})

app.listen(8007);