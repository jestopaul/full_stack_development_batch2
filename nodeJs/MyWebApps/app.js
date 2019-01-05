
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
// routing used 
app.get('/abouts',(req,res)=>{
    res.send('About Page Loading');
});



app.get('/getUsers',(req,res)=>{
    res.send(
        {
            name:"nandhu",
            age:10,
            likes:[
                "biking",
                "movies"
            ]
        }
    );
});


app.get('/getMovies',(req,res)=>{
    res.send('<h1>Welcome to my web page</h1>');
});

//these are called api's
app.post('/postUsers',(req,res)=>{
    res.send(
        {
            name:"nandhu",
            age:10,
            likes:[
                "biking",
                "movies"
            ]
        }
    );
});


//set port
//3000is std port
app.listen(3000);

console.log('server running on http://localhost:3000');


//view engine added , hbs engine added
const hbs = require('hbs');//this is using without angular
app.set('view engine','hbs');



//template engine using overhtml tags, so entire page load with the help of template engine
//currently we used handlebars
//we can use pug,handlebars,ejs at a time in a project
app.get('/home',(req,res)=>{
    res.render('home.hbs');
});

app.get('/about',(req,res)=>{
    res.render('about.hbs');
});

