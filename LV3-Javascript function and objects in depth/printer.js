function Printer(nivoTonera, dvostranoIspisivanje){
    this.nivoTonera = Math.min(Math.max(parseInt(nivoTonera), 0), 100);
    this.dvostranoIspisivanje = dvostranoIspisivanje;
    this.ukupanBrojStranica = 0;
}

Printer.prototype.dodajBoju = function(){
    if(this.nivoTonera == 100){
        console.log("Printer je pun boje.")
    }else{
        this.nivoTonera = 100;
        console.log("Printer je napunjen bojom.")
    }
}

Printer.prototype.printaj = function(brojStranica){
    if(this.dvostranoIspisivanje){
        var check = 0;
        do{
            check++
            if(brojStranica % 2 != 0 && check == 1){
                this.nivoTonera -= 0.2;
                this.ukupanBrojStranica += 1;
            }
            brojStranica--;
            if(check % 2 == 0){
                this.nivoTonera -= 0.2;
                this.ukupanBrojStranica += 1;
            }
            if(this.nivoTonera == 0){
                console.log("Printer je ostao bez boje napunite ga bojom.");
                break;
            }
        }while(brojStranica != 0)
    }else{
        while(brojStranica != 0){
            brojStranica--;
            this.nivoTonera -= 0.1;
            this.ukupanBrojStranica += 1;
            if(this.nivoTonera == 0){
                console.log("Printer je ostao bez boje napunite ga bojom.");
                break;
            }
        }
    }
}

function GetNumOfPrintedPages(printer){
    return printer.ukupanBrojStranica;
}

function GetCurrentLevelOfToner(printer){
    return printer.nivoTonera;
}

var Samsung_M283x = new Printer(10, true);
var Epson_Sx105 = new Printer(59, true);
var Cannon_Pixma = new Printer(40, false);
var HP_Smart_tank_500 = new Printer(98, true);

Samsung_M283x.dodajBoju();

Samsung_M283x.printaj(10);
Samsung_M283x.printaj(7);

Epson_Sx105.printaj(30);

Cannon_Pixma.printaj(12);

HP_Smart_tank_500.printaj(9);

console.log(GetNumOfPrintedPages(Samsung_M283x));

console.log(GetCurrentLevelOfToner(Samsung_M283x));