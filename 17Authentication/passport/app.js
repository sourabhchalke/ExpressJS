
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

// Middleware for session handling and Passport
app.use(session({
    secret: 'your-secret-key', // Change this to a secure secret key
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

// Passport Local Strategy
passport.use(new LocalStrategy(
    async (username, password, done) => {
        console.log(username,password);
        try {
            const user = await Users.findOne({ username});
            console.log(user);
            // if (!user.username) {
            //     return done(null, false, { message: 'User not found' });
            // }
            // // Compare hashed password
            // const isMatch = await bcrypt.compare(password, user.password);
            // if (!isMatch) {
            //     return done(null, false, { message: 'Incorrect password' });
            // }

            if(user){return done(null, user);}
            else{console.log("User not found")}

            // return done(null,user);
            
        } catch (err) {
            return done(err);
        }
    }
));

// Serialize and deserialize user
passport.serializeUser((user, done) => {
    done(null, user._id); // Serialize user by ID
});

passport.deserializeUser(async (id, done) => {
    try {
        const user = await Users.findById(id);
        done(null, user);
    } catch (error) {
        done(error);
    }
});



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
