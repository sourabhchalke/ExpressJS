const {MongoClient}=require('mongodb');
const url="mongodb://localhost:27017";
const database = "mongodb-demo";
const client = new MongoClient(url);

async function dbConnect(){
    const db = await client.connect();
    console.log("Connection Established");
    const datab =  db.db(database);
    console.log("Connected to Database");
    const result = datab.collection('products');
    console.log("Connected to Collection");
    // const response =await result.find().toArray();
    // console.log(response);
    return result;

}

module.exports=dbConnect;