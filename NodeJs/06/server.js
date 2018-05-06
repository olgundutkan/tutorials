var http = require('http');

var fs = require('fs');

console.log("Starting Server...");

var config = JSON.parse(fs.readFileSync("config.json"));

var host = config.host;
var port = config.port;

var server = http.createServer(function(request, response) {
    console.log("Received request: " + request.url);
    // TODO:: important because request.url see like /index.html
    fs.readFile('./public' + request.url, function(error, data) {
        if (error) {
            response.writeHead(404, {"Content-type": "text/plain"});
            response.end("File Not Found!");
        } else {
            response.writeHead(200, {"Content-type": "text/html"});
            response.end(data);
        }
    });

});

server.listen(port, host, function() {
    console.log("Listening " + host + ":" + port);
});

fs.watchFile("config.json", function(current, previous) {
    config = config = JSON.parse(fs.readFileSync("config.json"));

    server.close();

    var host = config.host;
    var port = config.port;

    server.listen(port, host, function() {
        console.log("Listening " + host + ":" + port);
    });
});
