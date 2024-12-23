const express=require('express');
const app=express();
const router = new express.Router();
const Login=require('../../mongodb/login.js');
app.set('view engine','ejs');

app.use(express.json());
app.use(express.urlencoded({extended:true}));

router.get('/login',(req,res)=>{
    res.render("login");
});

router.post('/login',(req,res)=>{
    res.send("login");
});
module.exports=router;