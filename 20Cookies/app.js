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

const fs=require('fs');
const path = require('path');
//1. Morgan supports various predefined log formats
// app.use(morgan('combined'));
// app.use(morgan('common'));
// app.use(morgan('dev'));
// app.use(morgan('tiny'));
// app.use(morgan('short'));

// //2. create a write stream (in append mode)
// var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })
// // setup the logger
// app.use(morgan('combined', { stream: accessLogStream }))

// //3. Custom Format String
// app.use(morgan(':method :url :status :res[content-length] :response-time ms'));

// Custom Function:
app.use(morgan((tokens,req,res)=>{
    return[
        tokens.method(req,res),
        tokens.url(req,res),
        tokens.status(req,res),
        tokens['response-time'](req,res),'ms',
    ].join('');
}))

mongoose.connect(url)
.then(()=>{console.log("Database Connected")})
.catch((error)=>{console.log(error.stack)});




app.use('/',register);
app.use('/',login);
app.use('/forget-password',forgetPassword);
app.use('/reset-password',resetPassword);


app.listen(PORT,()=>{console.log(`Server running on PORT : ${PORT}`)});