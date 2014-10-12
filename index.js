#! /usr/bin/env node
var userArgs = process.argv.slice(2);
var fileSystem = require('./lib/fileSystem')();


var module_directory = "app_modules" + (new Date()).getTime();

var LOG = true;

if(userArgs.length === 0) return;


LOG && console.log("LOG : Args > 0");

var types = ["module", "service", "model"];

var cmd = userArgs[0].split(":");
try {
    if(cmd.length > 0) {
        LOG && console.log("LOG : first arg exists");
        var type , action;
        if(types.indexOf(cmd[0]) >=0){
            LOG && console.log("LOG : ':' exists");

            type = cmd [0];

            if(cmd.length > 1) {
                action = cmd[1];
            }
            fileSystem
                .folder
                    .create(module_directory)
                .file
                    .create(module_directory + '/helloworld.txt', 'Hello World!');


            LOG && console.log(type + (action?" -> " + action:""))
        } else {
            throw ("Exception : Invalid option")
        }
    } else {

    }

} catch (e) {
    console.log(e)
}
/*
var exec = require('child_process').exec;
var child = exec('bower install angular-scaffolding', function(err, stdout, stderr) {
    if (err) throw err;
    console.log(stdout);
});
*/
