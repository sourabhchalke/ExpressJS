const {MongoClient}=require('mongodb');

const uri="mongodb://localhost:27017/";
const database="mongodb-demo";

const client=new MongoClient(uri);

async function dbConnect(){
    let db = await client.connect();
    console.log("Connection Established");

    let datab = db.db(database);
    console.log("Database Connected");

    let collection =await datab.collection('registration');

    return collection;

}

// dbConnect();

module.exports=dbConnect;

