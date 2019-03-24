function add()
{
    var firstNo = document.getElementById('firstNumber').value;

    var secondNo = document.getElementById('secondNumber').value;

    var sum = parseInt(firstNo) + parseInt(secondNo);

    document.getElementById("result").innerHTML = sum;
    

    
}