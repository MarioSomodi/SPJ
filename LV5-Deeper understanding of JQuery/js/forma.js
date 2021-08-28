$(document).ready(function()
{
	
});

function Submit(){
    var inputs = $('input');
    var ime = $('input[name="ime"]');
    var prezime = $('input[name="prezime"]');
    var JMBAG = $('input[name="JMBAG"]');
    var OIB = $('input[name="OIB"]');
    var datumRodenja = $('input[name="datumRodenja"]');
    var adresa = $('input[name="adresa"]');
    var postanskiBroj = $('input[name="postanskiBroj"]');
    var grad = $('input[name="grad"]');
    var control = false;
    inputs.each(function(i){
        if(isEmptyOrSpaces(inputs[i].value)){
            alert("Nisu popunjena sva polja");
            control = false;
            return false;
        }else{
            control = true;
        }
    });
    var datum = datumRodenja.val();
    var reg = /(0[1-9]|[12][0-9]|3[01])[- -.](0[1-9]|1[012])[- -.]\d\d/;
    if(control){
        if (!datum.match(reg)) {
            alert("Please enter dd-mm-yyyy");
            control = false;
        }else{
            var date = datum.split('-');
            datum = `${date[2]}-${date[1]}-${date[0]}`;
            control = true;
        }
        if(control){
            var student = {
                ime: ime.val(), 
                prezime: prezime.val(), 
                JMBAG: JMBAG.val(), 
                OIB: OIB.val(),
                datumRodenja: datum,
                adresa: adresa.val(),
                postanskiBroj : postanskiBroj.val(),
                grad: grad.val()
            };
            console.log(student);           
        }
    }
}

function isEmptyOrSpaces(str){
    return str === null || str.match(/^ *$/) !== null;
}