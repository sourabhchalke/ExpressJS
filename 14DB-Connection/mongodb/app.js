const {MongoClient}=require('mongodb');

const uri="mongodb://localhost:27017";
const database="mongodb-demo"
const client=new MongoClient(uri);

async function getData(){
    const result = await client.connect();
    const db = result.db(database);
    console.log("Database Connected");
    const collection = db.collection("players");
    // const response = await collection.find().toArray();

    console.log(response);
}

getData();