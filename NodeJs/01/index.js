// TODO: What is the node js, installation and tools

var fs = require('fs');

console.log("Starting...");

fs.readFile("sample.txt", function(error, data){
    console.log("Content of the file: " + data);
});

console.log("Carry on executing...");

// TODO: Why I see sample.txt content after the console.log?
