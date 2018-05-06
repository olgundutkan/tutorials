var github = require('./modules/github.js')

github.getRepos("olgundutkan", function(repos) {
    console.log("olgundutkan has " + repos.length + " repos");
});
