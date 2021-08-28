function Convert(){
    var select1 = $('#first');
    var select2 = $('#second');
    var input1 = $('#1');
    var input2 = $('#2');
    console.log(select2.val());
    console.log(select1.val());
    if(select1.val() == select2.val()){
        if(!isEmptyOrSpaces(input1.val())){
            input2.val(input1.val());
        }else{
            input1.val(input2.val());
        }
    }else if(select1.val() == 'btc' && select2.val() == 'euro'){
        if(!isEmptyOrSpaces(input1.val())){
            input2.val(input1.val() * 45013.99);
        }else{
            input1.val(input2.val() * 45013.99);
        }
    }
    else if(select1.val() == 'euro' && select2.val() == 'btc'){
        if(!isEmptyOrSpaces(input1.val())){
            input2.val(input1.val() / 45013.99);
        }else{
            input1.val(input2.val() / 45013.99);
        }
    }
}

function isEmptyOrSpaces(str){
    return str === null || str.match(/^ *$/) !== null;
}