
const mongoose = require('mongoose');
const PORT = 8030;
const url = "mongodb://localhost:27017/mongoose-demo";


// Connect to MongoDB
mongoose.connect(url)
    .then(() => { console.log("Database Connected") })
    .catch((error) => { console.log("Not Connected", error.message) });

try {
    // Define the schema
    const empSchema = new mongoose.Schema({
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
    const Employee = mongoose.model('employee', empSchema);

    // Export the model if needed (Optional)
    module.exports = Employee;
    
    console.log("Schema Created");
} catch (error) {
    console.error("Error in schema/model definition:", error.message);
}