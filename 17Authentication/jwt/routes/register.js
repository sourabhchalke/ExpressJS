const express=require('express');
const app=express();
const router = new express.Router();
app.set('view engine','ejs');

const Registration=require('../../mongodb/dbconnection.js');

app.use(express.urlencoded({extended:true}));

router.get('/registration',(req,res)=>{
    res.render("registration");
});

router.post('/registration',async(req,res)=>{

    try{
        const {name,email,password,mob_no}=req.body;
        const createNew= await  Registration({
            name:name,
            email:email,
            password:password,
            mob_no:mob_no
        });
        const saveData = await createNew.save();
        console.log(saveData);
        console.log("Data Inserted Successfully");
        res.send("Submitted successfully");
    }catch(error){
        console.log(error.stack);
        res.status(403).send("Something went wrong",error);
    }
});

module.exports=router;