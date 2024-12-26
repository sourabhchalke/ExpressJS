const express = require('express');
const app = express();
const mongoose = require('mongoose');
const User = require('./mongodb/dbconnection');
const url = "mongodb://localhost:27017/authentication";
const bcrypt = require('bcrypt');
const PORT = 8033;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(url)
    .then(() => { console.log("Database Connected") })
    .catch((err) => { console.log("Database not connected") });

app.post('/register', async (req, res) => {
    // console.log(name,username,password,age);

    try {
        const { name, username, password, age } = req.body;

        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);

        const createUser = await User.create({
            name: name,
            username: username,
            password: hashPassword,
            age: age
        });
        await createUser.save();
        console.log("Data Inserted Successfully");
        console.log(createUser);
        res.send(createUser);
    } catch (error) {
        res.send(error.stack);
        console.log(error.stack);
    }
});

app.post('/login', async (req, res) => {

    try {
        const { username, password } = req.body;

        // checking user credentials 
        if (!username || !password) {
            return res.status(400).send("Username and password are required.");
        }

        const findUser = await User.findOne({ username });

        // checking user exist or not
        if (!findUser) {
            return res.status(404).send("User not found");
        }

        console.log(findUser.password);
        // comparing the password
        const isPasswordValid = await bcrypt.compare(password, findUser.password);
        if (!isPasswordValid) {
            return res.status(401).send("Incorrect Password");
        }
        console.log(isPasswordValid);

        // User exist
        res.send("Login Successfully");

    } catch (error) {
        res.send(error.stack);
    }

})

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});