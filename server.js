const express = require('express');
const bodyParser = require('body-parser');

require('dotenv').config();

const connect = require('./db');
connect(); 

const port = 3030 || process.env.PORT;

const app = express();

//aryan
app.set('view engine','ejs');
app.use(express.static(__dirname+"/"));
app.use(bodyParser.urlencoded({extended:true}));

app.use('/newstudent',require('./router/newstudent'));


app.get('/',(req,res)=>{
    res.send('HELLO')
})

app.listen(port,(req,res)=>{
    console.log('server listen at :',port);
})

