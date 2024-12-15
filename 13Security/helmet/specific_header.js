const express=require('express');
const app=express();
const helmet=require('helmet');
const PORT=8019;

//You can use individual helmet middleware to configure specific  security features

app.use(helmet.dnsPrefetchControl({
    allow:false,
}));
app.use(helmet.xPoweredBy({
    allow:false,
}));

app.use(helmet.hsts({
    maxAge:20000,
    includeSubDomains:true, //by default
}));


app.get('/specific',(req,res)=>{
    console.log(req.headers);
    res.send("Using Helmet for better security for applications");
})

app.listen(PORT);