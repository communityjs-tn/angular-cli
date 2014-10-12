/**
 * Created by Anis on 11/10/2014.
 */
var tools = require('../tools');
var fs = require('fs');
var extend = require('extend');

module.exports = function (fileSystem) {
    return {
        create : function (fileName, buffer) {
            return extend( {}, tools.promisify (fs.writeFile) (fileName, buffer), fileSystem, this);
        }
    }
}