// async(arg,callback)=>{
//     console.log('do something with \''+arg+'\',');
//     setTimeout(()=>
//     {
//         callback(arg*2);
//     },1000);
// }

// var items = [1,2,3,4,5,6];

// var results  = [];
// series(item){
//     if(item)
//     {
//         async(item,function(result)
//         {
//             results.push(result);
//             return series(items.shift());
//         });
//     }
// }

// series(items.shift);


//2

buf = new Buffer(150);
len = buf.write("welcome to node.js");
console.log("Hello world: "+len);