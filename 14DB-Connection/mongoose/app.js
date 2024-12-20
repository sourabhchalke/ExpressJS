const mongoose=require('mongoose');
const PORT = 8030;
const url ="mongodb://localhost:27017/mongoose-demo";


mongoose.connect(url)
.then(()=>{console.log("Database Connected")})
.catch((error)=>{console.log("Not Connected",error.message)});

