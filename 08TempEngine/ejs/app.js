const express = require('express');
const app = express();

app.set('view engine', 'ejs'); // Set the view engine to ejs
// app.set('views', 'views');  // Set the correct views directory

app.get('/', (req, res) => {
    res.render('index',{title:"Template Engine"});
});

app.listen(8014, () => {
    console.log('Server is running on port 8014');
});
