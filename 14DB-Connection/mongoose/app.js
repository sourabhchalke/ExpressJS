
const mongoose = require('mongoose');
const PORT = 8030;
const url = "mongodb://localhost:27017/mongoose-demo";

// Connect to MongoDB
mongoose.connect(url)
    .then(() => { console.log("Database Connected") })
    .catch((error) => { console.log("Not Connected", error.message) });

// Define the schema
let empSchema = new mongoose.Schema({
    name: {
        type: String, // Specifies the type as String
        required: true // Ensures 'name' is mandatory
    },
    email: {
        type: String,
        required: true, // Ensures 'email' is mandatory
        unique: true
    },
    password: {
        type: String,
        required: true // Ensures 'password' is mandatory
    },
    age: {
        type: Number // Specifies the type as Number
    }
});

// Create a model
let Employee;
try {
    Employee = mongoose.model('employees', empSchema);
    console.log("Schema Created");
} catch (error) {
    console.error("Error in schema/model definition:", error.message);
}

// Insert data function
async function insertData() {
    try {
        const data = new Employee({
            name: "Aniket",
            email: "aniket@gmail.com",
            password: "aniket123",
            age: 27
        });
        const result = await data.save();
        console.log("Data Inserted:", result);
    } catch (error) {
        console.error("Error inserting data:", error.message);
    }
}

// Call the insertData function
// insertData();

async function getData() {
    try {
        const getData = await  Employee.find();
        console.log(getData);
    }catch(error){
        console.error(error.stack);
    }
}

// getData();

async function updateData() {
    try{
        const updateData= await Employee.updateOne(
            {name:"Aniket"},
            {$set:{email:"aniketpatil@gmail.com"}}
        )
        console.log(updateData);
    }catch(error){
        console.error(error.stack);
    }
}

// updateData();

async function deleteData() {

    try{
        const deleteData=await Employee.deleteOne({name:"Vijay"});
        console.log(deleteData);
    }catch(error){
        console.error(error.stack);
    }
    
}

// deleteData();

app.put('/put/:name',async(req,res)=>{
    try{
        res.send(req.body);
        const {name,address,mob_no}=req.body;
        const updateData=await User.updateMany(
            {name:name},
            {$set:{address:address}},
            {$set:{mob_no:mob_no}}
        )
        console.log(updateData);
    }catch(error){
        console.log(error.stack);
    }
})
