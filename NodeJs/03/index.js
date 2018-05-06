
var fs = require('fs');

console.log("Starting...");

fs.writeFileSync("config.json", '{ "username": "jhon", "api_key": "secret", "version": "0.1" }', function(error) {
    console.error(error);
});

console.log("Carry on executing...");
