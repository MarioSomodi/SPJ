function dajSlucajanBroj(nMin, nMax)
{
    return Math.floor(Math.random() * (nMax - nMin + 1) + nMin);
}

var min = 0;
var max = 1;
var aBrojevi = [];
while(aBrojevi.length != 200){
    var num = dajSlucajanBroj(150, 1500);
    aBrojevi.push(num);
}
console.log(aBrojevi.length);
console.log(`Najveci: ${Math.min(...aBrojevi)}, Najmanji: ${Math.max(...aBrojevi)}`);