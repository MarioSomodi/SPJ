function dajSlucajanBroj(nMin, nMax)
{
    return Math.floor(Math.random() * (nMax - nMin + 1) + nMin);
}
function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}
var aBrojevi = [];
while(aBrojevi.length != 50){
    var num = dajSlucajanBroj(1, 20);
    aBrojevi.push(num);
}
var unique = aBrojevi.filter(onlyUnique);
unique.forEach(function(broj){
    console.log(broj);
});