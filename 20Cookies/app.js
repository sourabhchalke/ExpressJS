const express=require('express');
const app=express();
const PORT=8035;
const mongoose=require('mongoose');
const register=require('./routes/registration.js');
const url="mongodb://localhost:27017/authentication";

app.set('view engine','ejs');
app.use(express.json()); // Parses incoming JSON payloads
app.use(express.urlencoded({ extended: true })); // Parses URL-encoded payloads (from forms)


mongoose.connect(url)
.then(()=>{console.log("Database Connected")})
.catch((error)=>{console.log(error.stack)});


app.use('/',register);



app.listen(PORT,()=>{console.log(`Server running on PORT : ${PORT}`)});