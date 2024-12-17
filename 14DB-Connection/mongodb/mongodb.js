
const { MongoClient } = require('mongodb');
const url = "mongodb://localhost:27017";
const database = "mongodb-demo";
const client = new MongoClient(url);

async function dbConnect() {
    try {
        const result = await client.connect();
        const db = result.db(database);
        console.log("Database connected successfully");
        return db.collection("players");
    } catch (error) {
        console.error("Database connection failed:", error);
        throw error; // Re-throw to handle it in app.js
    }
}

module.exports = dbConnect;

