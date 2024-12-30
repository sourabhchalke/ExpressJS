
const mongoose=require('mongoose');
const userSchema= new mongoose.Schema({
    firstname:{
        type:String,
    },
    lastname:{
        type:String
    },
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        unique:true
    }
},{ collection: 'cookie-register' });
module.exports=mongoose.model('cookie-register',userSchema);