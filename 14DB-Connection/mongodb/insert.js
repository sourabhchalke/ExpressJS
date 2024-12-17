const dbConnect = require('./mongodb.js');

async function insertData() {

    try {
        let db = await dbConnect();

        //Insert Single Data
        // const insert = db.insertOne(
        //     [
        //         { name: "Gambhir", address: "Kolkata", age: 44 }
        //     ]
        // );

        //Insert Many Data[Entries]
        const insert = db.insertMany(
            [
                { name: "Gambhir", address: "Kolkata", age: 44 },
                { name: "Gambhir", address: "Luknow", age: 45 },
                { name: "KL Rahul", address: "Kolkata", age: 46 },
            ]
        );

    } catch (error) {
        console.log("Error : ", error.message);
    }

}

insertData();