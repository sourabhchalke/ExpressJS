const express=require('express');
const PORT=8032;
const app=express();


const login=require('./routes/login.js');
const register=require('./routes/register.js');
app.set('view engine','ejs');
app.use(express.urlencoded({extended:true}));
app.use('/',register);
app.use('/',login);


app.get('/form',(req,res)=>{
    res.render('form');
})

app.listen(PORT);