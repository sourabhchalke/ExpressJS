const express=require('express');
const app = express();

app.get('/product',(req,res)=>{
    res.send("Getting product details");
})
app.post('/product',(req,res)=>{
    res.send("Creating a new product");
})
app.put('/product/:id',(req,res)=>{
    res.send(`Updating product with ID ${req.params.id}`);
})
// app.delete('/product/:id',(req,res)=>{
//     res.send(`Deleting product with ID ${req.params.id}`);
// })

app.listen(8010);