//import express
const express = require('express');

//express variable to express function()
var app = express();


//get method
//default /
// we need to handle request and response
app.get('/',(req,res)=>{
res.send('Welcome to my web page')
});


//req is not using now , it is default format, request time we use req.In the time of argument passing
app.get('/about',(req,res)=>{
    res.send('About Page Loading');
});
