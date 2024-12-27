const express=require('express');
const multer = require('multer');
const app=express();
const PORT=8034;

app.use(express.urlencoded({extended:false}));

app.set('view engine','ejs');

app.get('/',(req,res)=>{
    res.render('fileupload');
});

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads');
    },
    filename: function (req, file, cb) {
      cb(null,`${Date.now()}-${file.originalname}`);
    }
  })
  
const upload = multer({ storage });


app.post('/upload',upload.single('fileupload'),(req,res)=>{
  const file=req.body;
  console.log(req.body);
  console.log(req.file);
  res.send("File Upload Succesfully");
})



app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
})