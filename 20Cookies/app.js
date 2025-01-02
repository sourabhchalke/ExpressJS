const express=require('express');
const app=express();
const PORT=8035;
const mongoose=require('mongoose');
const register=require('./routes/registration.js');
const login=require('./routes/login.js');
const {forgetPassword,resetPassword}=require('./routes/forgetpassword.js');
const morgan=require('morgan');

const cookieParser = require('cookie-parser');
const url="mongodb://localhost:27017/authentication";

app.set('view engine','ejs');
app.use(express.json()); // Parses incoming JSON payloads
app.use(express.urlencoded({ extended: true })); // Parses URL-encoded payloads (from forms)
app.use(cookieParser());

app.use(morgan('combined'));
app.use(morgan('common'));
app.use(morgan('dev'));
app.use(morgan('tiny'));
app.use(morgan('short'));


mongoose.connect(url)
.then(()=>{console.log("Database Connected")})
.catch((error)=>{console.log(error.stack)});




app.use('/',register);
app.use('/',login);
app.use('/forget-password',forgetPassword);
app.use('/reset-password',resetPassword);


app.listen(PORT,()=>{console.log(`Server running on PORT : ${PORT}`)});