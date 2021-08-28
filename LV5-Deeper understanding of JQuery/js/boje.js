$(document).ready(function(){
    $('h2').text('#FFFFFF');
})

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    $('body').attr('style', 'background-color:'+color);
    $('h2').text(color);
}