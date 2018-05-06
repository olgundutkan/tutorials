// TODO:: What is the json?
var fs = require('fs');

console.log("Starting...");

var content = fs.readFileSync("config.json");
// TODO: What is the json parse
var object = JSON.parse(content);

console.log("Object: " + object);

console.log("Username: " + object.username);
console.log("API-KEY: " + object.api_key);
console.log("Version: " + object.version);

console.log("Carry on executing...");
