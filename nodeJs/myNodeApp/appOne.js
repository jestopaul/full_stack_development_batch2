

//lodash is 3 rd party library used for multiple usages
//1. unique checking
//below code for unique checking can lodash docs
//https://www.npmjs.com/package/lodash
//https://lodash.com/
//https://lodash.com/docs/
const _ = require('lodash');

var myArray = _.uniq(['jesto',123,'je','nan',123,'jesto','sam']);
console.log(myArray);