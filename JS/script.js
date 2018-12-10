// function div(a, b) {
//     var c = a / b;
//     return c;
// }

// function sub(a, b) {
//     var d = a - b;
//     return d;
// }

// function sayGoodMng() {
//     return "hello good mng";
// }
// console.log("Division value is : " + div(80, 40));

// console.log("substract values is : " + sub(10, 3));

// console.log(sayGoodMng());

function add() {
    var a= document.getElementById("number1").value;
    console.log(a);
    var b = document.getElementById("number2").value;
    var c = parseInt(a) + parseInt(b);
    console.log(c);

    // document.getElementById("result").innerHTML = c;//or below is we can add html,add
    document.getElementById("result").innerHTML = "<b>"+c+"</b>";
   // return c;
}