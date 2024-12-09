const express=require('express');
const app=express();
const path=require('path');

console.log(__dirname);
console.log(path.join(__dirname,'../public/'));

const staticPath=path.join(__dirname,'../public');

// app.use(express.static());
console.log(express.static(path.join(__dirname,'../public')));
app.use(express.static(staticPath));
// console.log(app.use(express.static(staticPath)));

app.get('/',(req,res)=>{
    res.send("Hello");
})

app.listen(8013);