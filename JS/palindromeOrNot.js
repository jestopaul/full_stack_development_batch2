var number = 123;

var reversNumber = 0;

var tempNo =number;

palindromeOrNot(tempNo);


function palindromeOrNot(tempNo)
{

    while(tempNo>0)
    {
        remainder = tempNo%10;
        //same as reverse of no
        reversNumber = reversNumber * 10+remainder;
        tempNo= parseInt(tempNo/10);
    }

    console.log("Reverse number = "+reversNumber);

    if(number == reversNumber)
    {
        console.log(number +" is plaindrome");
    }
    else{
        console.log(number +" is not plaindrome");
    }
}