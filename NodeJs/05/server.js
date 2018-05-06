var http = require('http');

console.log("Starting Server...");

var host = "192.168.10.10";
var port = "1337";

var server = http.createServer(function(request, response) {
    console.log("Received request: " + request.url);
    response.writeHead(200, {"Content-type": "text/plain"});
    response.end("Hello Word!");
});

server.listen(port, host, function() {
    console.log("Listening " + host + ":" + port);
});
