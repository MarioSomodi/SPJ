function Prev(){
    var imgContainer = $('#slika');
    var currentImg = imgContainer.attr('data-slika-id');
    currentImg--;
    if(currentImg == 0){
        imgContainer.attr('src', `img/slider_5.jpg`);
        imgContainer.attr('data-slika-id', '5');
    }else{
        imgContainer.attr('src', `img/slider_${currentImg}.jpg`);
        imgContainer.attr('data-slika-id', currentImg);
    }
}

function Next(){
    var imgContainer = $('#slika');
    var currentImg = imgContainer.attr('data-slika-id');
    currentImg++;
    if(currentImg == 6){
        imgContainer.attr('src', `img/slider_1.jpg`);
        imgContainer.attr('data-slika-id', '1');
    }else{
        imgContainer.attr('src', `img/slider_${currentImg}.jpg`);
        imgContainer.attr('data-slika-id', currentImg);
    }
}