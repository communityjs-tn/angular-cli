var request = require('request');
var fs = require('fs');

var appDir = "../../angular-scaffolding/develop/src/app_modules";

var modules = {};

var files = fs.readdirSync(appDir);
files.forEach(function(file) {
    if(fs.existsSync(appDir + "/" + file + "/bower.json")) {
        var bower = JSON.parse(fs.readFileSync(appDir + "/" + file + "/bower.json", "utf-8"));
        modules[bower.name] = bower.version;
    }
});

//request.get('https://raw.githubusercontent.com/communityjs-tn/angular-scaffolding/master/bower.json', function (error, response, body) {
request.get('http://localhost:1988/bower.json', function (error, response, body) {
    if (!error && response.statusCode == 200) {
        var bower = JSON.parse(body);

        var remoteModules = bower.modules || [];

        var toAdd = [], toUpdate = [], toRemove = [];

        for(var i = 0; i < remoteModules.length; i += 1) {
            var module = remoteModules[i];
            if (module.name in modules) {
                if (module.version > modules[module.name]) {
                    console.log(module.name + ' Needs Update');
                    toUpdate.push(module);
                }
                delete modules[module.name];
            } else {
                console.log(module.name + ' Must be Downloaded');
                toAdd.push(module);
            }
        }
        for(i in modules) {
            console.log(i + " must be removed");
            toRemove.push(i);
        }
        console.log("-------------------------------")
        console.log(toAdd);
        console.log(toUpdate);
        console.log(toRemove);

    }
});
