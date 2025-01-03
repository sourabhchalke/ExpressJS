const mongoose = require('mongoose');
const url="mongodb://localhost:27017/authentication";

mongoose.connect(url)
.then(()=>{console.log("Database Connected")})
.catch((error)=>{console.log("Database not connected",error.stack)});


const loginSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        unique:true
    }
});
module.exports= mongoose.model('login',loginSchema);