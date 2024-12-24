const express = require('express');
const jwt = require('jsonwebtoken');
const PORT = 8032;
const app = express();

const SECRET_KEY = "secret_key";

app.use(express.urlencoded({extended:true}));

// Dummy user data (Replace with a database in production)
const users = [
    { id: 1, username: "user1", password: "password1" },
    { id: 2, username: "user2", password: "password2" },
];

// Route to handle user login and generate a token
app.post('/login', (req, res) => {
       const { username, password } = req.body;

    const user = users.find(u=>u.username===username && u.password===password);

    if(!user){
        return res.status(401).json({message:"Invalid username or password"});
    }

    // Generate a token
    const token= jwt.sign({id:user.id,username:user.username},SECRET_KEY,{expiresIn:'1h'});

    res.json({message:"Login Successful",token});   

    
});


// Middleware to verify token
const authenticateToken= (req,res,next)=>{
    
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if(!token){
        return res.status(403).json({message:"Token is required"});
    }

    jwt.verify(token,SECRET_KEY,(err,user)=>{
        if(err){
            return res.status(403).json({message:"Invalid token"});
        }

        req.user = user;
        next();
    });
};

// Protected route
app.get('/protected',authenticateToken,(req,res)=>{
    res.json({message:"This is a protected route",user:req.user});
});

app.listen(PORT);