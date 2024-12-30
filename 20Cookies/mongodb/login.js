const mongoose = require('mongoose');

const loginSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true
    }
},{ collection: 'cookie-login' });
module.exports= mongoose.model('cookie-login',loginSchema);