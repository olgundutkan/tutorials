// TODO:: What is the npm?
// TODO:: What is the express js?

var fs = require("fs");

var config = JSON.parse(fs.readFileSync("./config/server.json"));

var host = config.host;

var port = config.port;

const express = require("express");

const app = express();

app.use(express.static(__dirname + '/public'));

app.get("/", function(request, response) {
    response.send("Hello Node!");
});

app.get("/test/:text", function(request, response) {
    response.send("Parameters: " + request.params.text);
});

var users = JSON.parse(fs.readFileSync('./database/users.json'));

app.get("/users/:id", function(request, response) {

    var user = users[request.params.id];

    if (!user) {
        response.send("User not found! :(", 404);
    } else {
        response.send("Username: " + user.username, 200);
    }
});

app.listen(port, host, function () {
  console.log('Example app listening on port ' + port + '!')
});
