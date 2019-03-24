console.log('first');

// setTimeout(function(){
//     console.log('second');
// },0);

setTimeout(
    ()=>{
console.log('second');
    },0);

setTimeout(()=>
{
    console.log(2);     
})
console.log('third');