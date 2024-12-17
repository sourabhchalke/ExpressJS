const dbConnect=require('./mongodb.js');

 const updateData=async()=>{
    try{
        let db=await dbConnect();

        //Update Only One Data
        // db.updateOne(
        //     {age:44},
        //     {$set:{age:47}}
        // )
        
        //Update Many Entries
        db.updateMany(
            {age:44},
            {$set:{age:47}}
        )
        console.log("Updated");
    }catch(error){
        console.log("Error : ",error.message);
    }
}

updateData();