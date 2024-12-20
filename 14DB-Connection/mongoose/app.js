
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
            name: "Ram",
            email: "ram@gmail.com",
            password: "ram123",
            age: 32
        });
        const result = await data.save();
        console.log("Data Inserted:", result);
    } catch (error) {
        console.error("Error inserting data:", error.message);
    }
}

// Call the insertData function
insertData();
