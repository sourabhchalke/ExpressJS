const express = require('express');
const PORT = 8030;
const app = express();
const User = require('./mongodb.js');

app.use(express.json());



app.post('/post', async (req, res) => {
    try {
        res.send(req.body);
        const {name,address,mob_no}=req.body;
        const insertData = await new User({
            name: name,
            address: address,
            mob_no: mob_no
        })

        const result = await insertData.save();
        console.log(result);
    }catch(error){
        console.log(error.stack);
    }
})



app.listen(PORT);