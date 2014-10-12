/**
 * Created by Anis on 11/10/2014.
 */
var folder = require('./folder');
var file = require('./file');

var fs = function() {
    this.folder = folder(this);
    this.file = file(this);
};
module.exports = function() {
    return new fs();
}
