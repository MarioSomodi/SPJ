function dajSlucajanBroj(nMin, nMax)
{
    return Math.floor(Math.random() * (nMax - nMin + 1) + nMin);
}

num1 = dajSlucajanBroj(10, 100);
num2 = dajSlucajanBroj(10, 100);
num3 = dajSlucajanBroj(10, 100);

console.log(num1, num2, num3)

if(num1 % 10 == num2 % 10 && num1 % 10 == num3 % 10){
    console.log("True")
}