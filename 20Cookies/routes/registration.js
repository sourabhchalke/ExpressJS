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
        const { first_name, last_name, username, email, password } = req.body;
        console.log(req.body); // Log form data

        // Add database logic here, e.g., save to MongoDB
        const newUser = new registerSchema({ first_name, last_name, username, email, password });
        await newUser.save();

        console.log("Data submitted successfully");
        res.status(201).send('Registration successful');
    } catch (error) {
        console.error(error.stack);
        res.status(400).send('An error occurred during registration');
    }
});

module.exports = router;
