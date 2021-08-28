var num = 104;
var sum = 0;

var first = String(num)[0];
var lastIndex = String(num).length - 1;
var last = String(num)[lastIndex];

sum = parseInt(first) + parseInt(last);
if(num > 99){
    console.log("Broj veci od 99")
}
console.log(sum);