const express = require('express');
const multer = require('multer');
const app = express();

app.use(express.urlencoded({extended:false}));

app.set('view engine','ejs');

// Configure Multer storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads');
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

// Create Multer instance
const upload = multer({ storage });

// Define fields with name and maxCount
const fields = [
  { name: 'images', maxCount: 5 },
  { name: 'documents', maxCount: 10 },
];

app.get('/field',(req,res)=>{
    res.render('fields');
})

// Handle upload
app.post('/field', upload.fields(fields), (req, res) => {
  console.log(req.files); // Logs files grouped by field names
  res.send('Files uploaded successfully!');
});

// Start the server
app.listen(8034, () => {
  console.log('Server running on http://localhost:8034');
});
