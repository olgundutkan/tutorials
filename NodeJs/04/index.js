var fs = require('fs');

console.log("Starting...");

var content = fs.readFileSync("config.json");

var object = JSON.parse(content);

fs.watchFile("config.json", function(current, previous) {
    // console.log(current);
    // Stats {
    //     dev: 43,
    //     mode: 33188,
    //     nlink: 1,
    //     uid: 1000,
    //     gid: 1000,
    //     rdev: 0,
    //     blksize: 4096,
    //     ino: 33096,
    //     size: 74,
    //     blocks: 8,
    //     atime: 2017-07-25T11:21:49.000Z,
    //     mtime: 2017-07-25T11:21:49.000Z,
    //     ctime: 2017-07-25T11:21:49.000Z,
    //     birthtime: 2017-07-25T11:21:49.000Z
    // }
    // console.log(previous);
    // Stats {
    //     dev: 43,
    //     mode: 33188,
    //     nlink: 1,
    //     uid: 1000,
    //     gid: 1000,
    //     rdev: 0,
    //     blksize: 4096,
    //     ino: 33096,
    //     size: 74,
    //     blocks: 8,
    //     atime: 2017-07-25T11:21:37.000Z,
    //     mtime: 2017-07-25T11:21:25.000Z,
    //     ctime: 2017-07-25T11:21:25.000Z,
    //     birthtime: 2017-07-25T11:21:25.000Z
    // }

    console.log("The file changed");

    content = fs.readFileSync("config.json");
    // TODO:: What the mean "\n"?
    console.log("New content is: \n" + content);

    // TODO:: cntrl+c for quite the command
});

console.log("Carry on executing...");
