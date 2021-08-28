function Grad(naziv, brojStanovnika, latituda, longituda){
    this.naziv = naziv;
    this.brojStanovnika = brojStanovnika;
    this.latituda = latituda;
    this.longituda = longituda;
}

Grad.prototype.dajVelicinuGrada = function(){
    if(this.brojStanovnika < 30000) return 1;
    if(this.brojStanovnika >= 30000 && this.brojStanovnika < 200000) return 2;
    if(this.brojStanovnika >= 200000) return 3;
}

Number.prototype.toRad = function() {
    return this * Math.PI / 180;
 }

function dajUdaljenost(grad1, grad2){
    var lat2 = grad2.latituda; 
    var lon2 = grad2.longituda; 
    var lat1 = grad1.latituda; 
    var lon1 = grad1.longituda; 
    var R = 6371;
    var x1 = lat2-lat1;
    var dLat = x1.toRad();  
    var x2 = lon2-lon1;
    var dLon = x2.toRad();  
    var a = Math.sin(dLat/2) * Math.sin(dLat/2) + 
                    Math.cos(lat1.toRad()) * Math.cos(lat2.toRad()) * 
                    Math.sin(dLon/2) * Math.sin(dLon/2);  
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    var d = R * c; 
    return Math.round(d);
}

var oVirovitica = new Grad("Virovitica", 14688, 45.833333, 17.383333);
var oSlatina = new Grad("Slatina", 13686, 45.702222, 17.701111);
var oBjelovar = new Grad("Bjelovar", 40276, 45.9, 16.833333);
var oOsijek = new Grad("Osijek", 108048, 45.555556, 18.694444);
var oZagreb = new Grad("Zagreb", 807254, 45.816667, 15.983333);


console.log(oZagreb.dajVelicinuGrada());
console.log(dajUdaljenost(oVirovitica, oSlatina));