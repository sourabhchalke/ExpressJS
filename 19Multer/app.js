const express=require('express');
const multer = require('multer');
const app=express();
const PORT=8034;

app.use(express.urlencoded({extended:false}));

app.set('view engine','ejs');

// app.get('/',(req,res)=>{
//     res.render('fileupload');
// });

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, './uploads');
//     },
//     filename: function (req, file, cb) {
//       cb(null,`${Date.now()}-${file.originalname}`);
//     }
//   })
  
// const upload = multer({ storage });


// app.post('/upload',upload.single('fileupload'),(req,res)=>{

//   console.log(req.body);
//   console.log(req.file);
//   res.send("File Upload Succesfully");
// })

// Multiple files uploading
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads');
  },
  filename: function (req, file, cb) {
    cb(null,`${Date.now()}-${file.originalname}`);
  }
})
const upload2 = multer({ storage });
app.get('/multiple',(req,res)=>{
  res.render('multiple');
 
})
app.post('/upload-multiple',upload2.array("fileupload1"),(req,res)=>{
  
  console.log(req.body);
  console.log(req.files);
  res.send("File Upload Succesfully");
 
})


app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
})