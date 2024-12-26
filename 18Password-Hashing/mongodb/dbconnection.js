const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    name:{
        type:String,
    },
    username:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
        unique:true,
    },
    age:{
        type:Number,
    },
}, { collection: 'password_hashing' });

const User= new mongoose.model('password_hashing',userSchema);
module.exports=User;