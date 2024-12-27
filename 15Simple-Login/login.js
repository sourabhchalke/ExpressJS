const express = require('express');
const router = express.Router();
const dbConnect = require('./dbconnection/mongodb.js');
const dbConnectLogin = require('./dbconnection/mongodblogin.js');

router.get('/', (req, res) => {
    res.render('login');
})
router.post('/', async (req, res) => {

    //Data getting from user input
    let {username,password}=req.body;
    console.log(username,password);

    try {
        
        //Connecting to Resgistration collection to check user exists or not
        let dbregister = await dbConnect();
        const response = await dbregister.findOne({
            username: username,
        });
        const response2 = await dbregister.findOne({
            password: password,
        });

        //If exists then what to do 
        if(response && response2){
            console.log(response);
            console.log(response2);
            res.send("Login Successfull");

            //Checking user first time login or before exists
            let dblogin=await dbConnectLogin();
            //getting data from login database
            const response3 = await dblogin.findOne({
                username: username,
            });
            const response4 = await dblogin.findOne({
                password: password,
            });
            
            //if exists then do not insert user details again in database
            if(response3 && response4){
                console.log("User Exists");
            }else{
                dblogin.insertOne({
                    username:username,
                    password:password
                })
                console.log("New Login")
                console.log("Data Inserted");
            }

        }else{
            res.send("Invalid Username or Password");
            console.log(response);
            
        }
    }catch(error){
        console.error(error.stack);
        res.status(400).send("Invalid Username or Password...");
    }

})

// Checking it is authorised user or not 
// app.post('/login',async(req,res)=>{

//     try{
//         const {username,password}=req.body;
//         if (!username || !password) {
//             return res.status(400).send("Username and password are required.");
//           }

//         const findUser = await User.findOne({username});

//         if (!findUser) {
//             return res.status(404).send("User not found");
//           }

//           if (password !== findUser.password) {
//             return res.status(401).send("Incorrect Password");
//           }
        
//          if(username==findUser.username && password==findUser.password  ){
//             return res.status(200).send("Login Successfull");
//          }

//     }catch(error){
//         res.send(error.stack);
//     }

// })

module.exports = router;