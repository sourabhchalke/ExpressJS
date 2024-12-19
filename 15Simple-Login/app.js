const express=require('express');
const app =  express();
const PORT=8030;

const registration=require('./register');
const login=require('./login');

app.use(express.urlencoded({extended:true}));

app.set("view engine","ejs");

app.use('/registration',registration);
app.use('/login',login);

app.get('/form',(req,res)=>{
    res.render('form')
})




app.listen(PORT);