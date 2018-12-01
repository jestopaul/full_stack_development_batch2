var number = 125;
rev = 0;

while(number>0)
{
    remainder = number%10;
    //console.log(remainder);
    rev = rev * 10+ remainder;
    //console.log(rev);
    number = parseInt(number/10); 
   // console.log(number);
}

console.log(rev);