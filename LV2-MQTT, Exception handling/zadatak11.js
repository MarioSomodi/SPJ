var http = require('http');
const fs = require('fs')
var nPort = 8000;
http.createServer(function(request, response){
    response.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
    fs.readFile('./osobe.json', 'utf8' , (err, data) => {
        if (err) {
          console.error(err)
          return
        }
        response.write(data)
        response.end();
    })
}).listen(nPort);