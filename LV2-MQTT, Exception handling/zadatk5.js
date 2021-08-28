function dajSlucajanBroj(nMin, nMax)
{
    return Math.floor(Math.random() * (nMax - nMin + 1) + nMin);
}
var aBrojevi = []
var parni = 0;
var neparni = 0;
while(aBrojevi.length != 100){
    var num = dajSlucajanBroj(50, 5000);
    aBrojevi.push(num);
    if(num % 2 == 0){
        parni++;
    }else{
        neparni++;
    }
}
console.log(`Parni: ${parni}, Neparni: ${neparni}`);