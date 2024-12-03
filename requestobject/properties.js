const express = require('express');

const app = express();

app.get('/about',(req,res)=>{
    console.log(req.app);
    console.log(req.baseUrl);
    console.log(req.body);
    console.log(req.cookies);
    console.log(req.fresh);
    console.log(req.hostname);
    console.log(req.ip);
    console.log(req.ips);
    console.log(req.originalUrl);
    console.log(req.params);
    console.log(req.path);
    console.log(req.protocol);
    console.log(req.query);
    console.log(req.route);
    console.log(req.secure);
    console.log(req.signedCookies);
    console.log(req.stale);
    console.log(req.subdomains);
    console.log(req.xhr);
    res.send('hello...');
})

app.listen(8005);