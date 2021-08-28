var aPolje = [];
var aParniBrojevi = [];
var i = 7;
while(aPolje.length != 50){
    if(i % 7 == 0){
        aPolje.push(i);
        if(i % 2 == 0){
            aParniBrojevi.push(i);
        }
    }
    i++;
}
aParniBrojevi.forEach(function(broj){
    console.log(broj);
});