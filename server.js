const express = require('express');

// const connect = require('./db');

// connect(); 

require('dotenv').config();

const port = 3030 || process.env.PORT;

const app = express();

app.get('/',(req,res)=>{
    res.send('HELLO')
})

app.listen(port,(req,res)=>{
    console.log('server listen at :',port);
})

