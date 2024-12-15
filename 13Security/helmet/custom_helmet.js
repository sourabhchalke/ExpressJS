const express=require('express');
const app=express();
const PORT = 8019;

const helmet=require('helmet');

// app.use(helmet());
app.use(helmet({
    contentSecurityPolicy:false, //Disable CSP if not needed
    frameguard:{action:'deny'}, //Prevent emedding in frames
    // referrerPolicy:{policy:'no-referrer'}
    crossOriginOpenerPolicy:false, //Disable COOP if not needed

}));

app.get('/custom',(req,res)=>{
    res.send("Customizing Helmet");
})


app.listen(PORT);