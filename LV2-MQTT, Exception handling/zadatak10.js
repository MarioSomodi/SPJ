var http = require('http');
function dajSlucajanBroj(nMin, nMax)
{
    return Math.floor(Math.random() * (nMax - nMin + 1) + nMin);
}
var nPort = 8000;
http.createServer(function(request, response){
    response.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
    for(var i = 0; i < 10; i++){
        var num = dajSlucajanBroj(10, 100)
        response.write(`${num}\n`);
    }
    response.end();
}).listen(nPort);