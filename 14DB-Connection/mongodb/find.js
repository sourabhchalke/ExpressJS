const dbConnect=require('./mongodb.js');

// // dbConnect().then((res)=>{
// //     res.find().toArray().then((data)=>{
// //         console.log(data);
// //     })

// // });

// const findData=async()=>{
//     let data = await dbConnect();
//     data = await data.find().toArray();
//     console.log(data);
// }

// findData(); 

//Getting Data from database
async function fetchData() {
    try {
        let collection = await dbConnect();
        const data = await collection.find().toArray();
        console.log("Fetched Data:", data);
    } catch (error) {
        console.error("Error fetching data:", error);
    } finally {
       console.log("Completed...") ;
    }
}

fetchData();


