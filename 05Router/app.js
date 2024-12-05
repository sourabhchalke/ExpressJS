const express=require('express');
const app = express();

const teacher = require('./teacher.js');
const student = require('./student.js');


app.use('/teacher',teacher);
app.use('/student',student);

app.listen(8011);