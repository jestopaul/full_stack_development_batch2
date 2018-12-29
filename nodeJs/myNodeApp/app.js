// var x = 12;
// var y = 15;
// z = x+y;
// console.log(z);

//inbuilt node modules
//1. os
//2.fs

//1. inbuilt os module
const moduleOs = require('os');//for this for getting userDetails->  'os' this is important

var myUser = moduleOs.userInfo();

console.log(myUser);
console.log(myUser.username);

//2. inbuilt fs module
const moduleFs = require('fs');//for file writing info
moduleFs.appendFile('hello.txt','welcome to node js ',

function(err)
{
    if(err) throw err;
    console.log('File saved successfully');
}
);

console.log(moduleFs);
console.log(moduleOs);


//our own custom module student.js,it is file so start with ./student.js
//import using require
const myModule = require('./student.js');
console.log(myModule.getStudent());

console.log(myModule.getStudentWithParam('sammmm'));

const addModule = require('./add.js');
var value = addModule.addSum(10,20);
console.log(value);
console.log(process.argv);
