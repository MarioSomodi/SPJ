function ChangeImg(li, subject){
    var img = $('img');
    img.attr('src', `img/${subject}${li.value}.jpg`);
}