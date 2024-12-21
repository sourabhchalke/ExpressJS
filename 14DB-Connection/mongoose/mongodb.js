const mongoose=require('mongoose');
const url="mongodb://localhost:27017/mongoose-demo";

// Connecting to Database
mongoose.connect(url)
.then(()=>{console.log("Database Connected")})
.catch((error)=>{console.log(error.stack)});

//Schema

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    address:{
        type:String,
    },
    mob_no:{
        type:Number
    }
})

// let User;
// try{
    const User = new mongoose.model('users',userSchema);
// }catch(error){
//     console.log(error.stack);
// }

module.exports=User;