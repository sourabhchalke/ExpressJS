
const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');
const bcrypt = require('bcrypt');
const url = "mongodb://localhost:27017/authentication";

const app = express();
const PORT = 8032;

// Middleware for parsing request bodies
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Connect to MongoDB
mongoose.connect(url)
    .then(() => console.log("Database Connected"))
    .catch((error) => console.error(error.stack));

// Define user schema
const userSchema = new mongoose.Schema({
    name: { type: String },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    age: { type: Number }
});

// Define the User model
const Users = mongoose.model('passport_data', userSchema);



// Login route
app.post('/login',
    passport.authenticate('local', {
        successRedirect: '/dashboard',
        failureRedirect: '/login-failure'
    })
);

// Dashboard route (protected)
app.get('/dashboard', (req, res) => {
    if (req.isAuthenticated()) {
        res.send("Welcome to the Dashboard!");
    } else {
        res.redirect('/login');
    }
});

// Login failure route
app.get('/login-failure', (req, res) => {
    res.send("Login failed. Please try again.");
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
