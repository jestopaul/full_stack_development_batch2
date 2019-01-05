const express = require('express');



const bodyParser = require('body-parser');

//import created Users model
//we use {} for below 2 statements, because we created Users in userModel.js file that user we used here.
//also we use in mongoose_db like this  mongoose:mongoose, so this mongoose we can use here.
var {Users} = require('./userModel');
//import mongoose
var {mongoose} = require('./mongoose_db');

var app = express();
app.use(bodyParser.json());

// For CORS,Pgm Line no 12 to 29
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200' );

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});



// app.get('/',(req,res)=>
// {
//     res.send('hello');
// });

/// API- FetchAll Users  

app.get('/users',(req,res)=>{

    Users.find().then( (userdata)=>{
res.send(userdata
//     {userdata,
//     // status:'success'
// }

);
},(error)=>{
    res.status(400).send("Error happened"+error);  
} );

});


app.post('/insertapi',(req,res)=>
{
   // res.send('hello');
   //receive coming data
   //parse/handle coming data
   //save coming data to mongodb
   //for the handle of data we use body parser


   //we are using Users from userModel.js same 
   //extract json from request use req
   // req.body.name from front end
   //req from front end
   var users = new Users(
       {
       name:req.body.name,
       age:req.body.age,
       rollno:req.body.rollno,
       admno:req.body.admno,
       college:req.body.college
       }
   );

   //save to db
//    users.save();

users.save().then((result)=>{

    res.send(result);

},(error)=>
{
res.status(400).send(error);
});


});

app.listen(3000,()=>{
    console.log('server running on http://localhost:3000');
})

//https://github.com/anishpdm/angular-frontend-pgm //front end url

//cross origin error change link
//https://github.com/anishpdm/ExpressApi/blob/master/app.js

//check anish sir repo for other get methods