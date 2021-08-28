function dajSlucajanBroj(nMin, nMax)
{
    return Math.floor(Math.random() * (nMax - nMin + 1) + nMin);
}
var aBrojevi = [];
for(var i = 0; i < 30; i++)
{
    var broj = dajSlucajanBroj(10, 20);
    aBrojevi.push(broj);
}
function Sort(array) {
    var done = false;
    while (!done) {
      done = true;
      for (var i = 1; i < array.length; i += 1) {
        if (array[i - 1] > array[i]) {
          done = false;
          var tmp = array[i - 1];
          array[i - 1] = array[i];
          array[i] = tmp;
        }
      }
    }
    return array;
  }

  console.log(Sort(aBrojevi));