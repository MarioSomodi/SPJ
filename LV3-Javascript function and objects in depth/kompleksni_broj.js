function Kompleksni_Broj(realni, imaginarni){
    this.realni = realni;
    this.imaginarni = imaginarni;
}

// var kb1 = new Kompleksni_Broj(1, 6);
// var kb2 = new Kompleksni_Broj(5, 3);
// var kb3 = new Kompleksni_Broj(9, 9);
// var kb4 = new Kompleksni_Broj(2, 11);
// var kb5 = new Kompleksni_Broj(5, 34);

var _kb = {
    ispisiKompleksniBroj : function(broj){
        return `${broj.realni} + ${broj.imaginarni}i`;
    },
    zbroji : function(broj1, broj2){
        //return `${broj1.realni + broj2.realni} + ${broj1.imaginarni + broj2.imaginarni}i`;
        var r = Number(broj1.realni) + Number(broj2.realni);
        var i = Number(broj1.imaginarni) + Number(broj2.imaginarni);
        return new Kompleksni_Broj(r, i)
    },
    pomnozi : function(broj1, broj2){
        //return `${(broj1.realni * broj2.realni) - (broj1.imaginarni * broj2.imaginarni)} + ${(broj1.realni * broj2.imaginarni) + (broj2.realni * broj1.imaginarni)}i`;
        var r = (Number(broj1.realni) * Number(broj2.realni)) - (Number(broj1.imaginarni) * Number(broj2.imaginarni));
        var i = (Number(broj1.realni) * Number(broj2.imaginarni)) + (Number(broj2.realni) * Number(broj1.imaginarni));
        return new Kompleksni_Broj(r, i);
    } 
}

function ExecuteOperation(){
    var select = document.querySelector("#operacija");
    var z1 = new Kompleksni_Broj(document.querySelector("#z1Realni").value, document.querySelector("#z1Imaginarni").value);
    var z2 = new Kompleksni_Broj(document.querySelector("#z2Realni").value, document.querySelector("#z2Imaginarni").value);
    var z3R = document.querySelector("#z3Realni");
    var z3I = document.querySelector("#z3Imaginarni");
    if(select.value == 1){
        var result = _kb.zbroji(z1, z2);
        z3R.value = result.realni;
        z3I.value = result.imaginarni;
    }else if(select.value == 2){
        var result = _kb.pomnozi(z1, z2);
        z3R.value = result.realni;
        z3I.value = result.imaginarni;
    }
}

// console.log(_kb.ispisiKompleksniBroj(kb1));
// console.log(_kb.zbroji(kb1, kb2));
// console.log(_kb.pomnozi(kb1, kb2));