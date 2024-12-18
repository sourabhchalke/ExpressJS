const dbConnect=require('./mongodb.js');

const deleteData=async()=>{

    //Delete only one entry
    // const db=await dbConnect();
    // db.deleteOne(
    //     {age:47},
    // )

    //Delete all specified entry
    const db=await dbConnect();
    db.deleteMany(
        {age:47},
    )
}

deleteData();