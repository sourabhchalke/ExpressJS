const mongoose=require('mongoose');
const url="mongodb://localhost:27017/mongoose-demo";

mongoose.connect(url)
.then(()=>{console.log('"Database Connected"')})
.catch((error)=>{console.log(error.stack)});

const employee= new mongoose.Schema({
    name:{
        type:String,
    },
    address:{
        type:String,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    age:{
        type:Number
    }
});

const Employee=new mongoose.model('emps',employee);
module.exports=Employee;