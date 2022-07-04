const express = require('express');
require('dotenv').config();

const connect = require('./db');

connect(); 


const port = 3030 || process.env.PORT;

const app = express();

app.get('/',(req,res)=>{
    res.send('HELLO')
})

app.listen(port,(req,res)=>{
    console.log('server listen at :',port);
})

