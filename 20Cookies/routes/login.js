const express = require('express');
const router = express.Router();
const registerSchema = require('../mongodb/register'); // Assuming this is your Mongoose model


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
        
        if(password!==findUser.password){
            return res.status(404).send("Password is wrong ");
        }

        // User exist
        res.send("Welcome to dashboard");

    } catch (error) {
        res.send(error.stack);
    }

})

module.exports = router;
