const express = require('express');
const router = express.Router();
const registerSchema = require('../mongodb/register'); // Assuming this is your Mongoose model

// Render the registration form
router.get('/registration', (req, res) => {
    res.render('register.ejs');
});

// Handle form submission
router.post('/registration', async (req, res) => {
    try {
        const { firstname, lastname, username, email, password } = req.body;
        console.log(req.body); // Log form data
        console.log(firstname,lastname,username,email,password);

        // Add database logic here, e.g., save to MongoDB
        const newUser = new registerSchema({ firstname, lastname, username, email, password });
        await newUser.save();

        console.log("Data submitted successfully");
        res.status(201).send('Registration successful');
    } catch (error) {
        console.error(error.stack);
        res.status(400).send('An error occurred during registration');
    }
});

module.exports = router;
