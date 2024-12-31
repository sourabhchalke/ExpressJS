const express = require('express');
const router = express.Router();
const bcrypt=require('bcrypt');
const registerSchema = require('../mongodb/register'); // Assuming this is your Mongoose model
const jwt=require('jsonwebtoken');
const SECRET_KEY="sou";


// Render the registration form
router.get('/login', (req, res) => {
    res.render('login');
});

// Handle form submission
router.post('/login', async (req, res) => {

    try {
        const { username, password } = req.body;

        // checking user credentials 
        if (!username || !password) {
            return res.status(400).send("Username and password are required.");
        }

        const findUser = await registerSchema.findOne({ username });

        // checking user exist or not
        if (!findUser) {
            return res.status(404).send("User not found");
        }
        
        // verify the password using bcrypt.compare
        const hashedPassword= await bcrypt.compare(password,findUser.password);
        console.log(hashedPassword);
        if(!hashedPassword){
            return res.status(404).send("Password is wrong ");
        }
        
        // Generate JWT Token
        const token = jwt.sign({username:findUser.username,password:findUser.password},SECRET_KEY,{expiresIn:"1h"});
        console.log(token);

        // Set the token in an httpOnly cookie
            res.cookie("login-token",token,
                {
                httpOnly:true,
                maxAge:3600000
            });
        // }
        res.send("Welcome to dashboard");

    } catch (error) {
        res.send(error.stack);
    }

})

// Middleware to verify token
function verifyToken(req, res, next) {
    const token = req.cookies['login-token']; // Retrieve the token from cookies
    console.log("From Req.cookies",token);

    if (!token) {
        return res.status(401).send("Access denied. No token provided.");
    }
    try {
        // Verify the token
        const decoded = jwt.verify(token, SECRET_KEY);
        req.user = decoded; // Attach the decoded token data to the request object
        next(); // Proceed to the next middleware/route handler
    } catch (err) {
        return res.status(403).send("Invalid or expired token.");
    }
}

// Example of a protected route
router.get('/dashboard', verifyToken, (req, res) => {
    res.send(`Welcome ${req.user.username}, you have access to the dashboard.`);
});


module.exports = router;

