const jwt=require('jsonwebtoken');
const nodemailer=require('nodemailer');
const dbConnection=require('../mongodb/register');
const SECRET_KEY="reset-password";
const forgetPassword= async(req,res)=>{
    try {
        
        const email=req.body.email;
        console.log(email);
        if(!email){
            res.status(400).send({message:"Please enter email"});
        }

        const checkEmail= await dbConnection.findOne({email});
        if(!checkEmail){
            res.status(400).send({message:"Please enter register email"});
        }

        const transport= nodemailer.createTransport({
            service:"gmail",
            secure:false,
            auth:{
                user:'sourabhchalke2157@gmail.com',
                pass:'iysnjjadzuzjfqkh'
            },
        });

        const token =  jwt.sign({email},SECRET_KEY,{expiresIn:"1h"});

        const client="http://localhost:8035";
        const receiver={
            from:"sourabhchalke2157@gmail.com",
            to:email,
            subject:"Password Reset Request",
            text:`Click on this link to generate your new password ${client}/reset-password:${token}`
        }

        await transport.sendMail(receiver);

        return res.send("Success");

    } catch (error) {
        res.status(400).send(error.stack);
    }
}

module.exports=forgetPassword;