"use strict";

var path = require("path");

var pattern = function(file) {
    return { pattern: file, included: true, served: true, watched: false };
};

var framework = function(files) {
    var sinonPath = path.resolve(require.resolve("sinon"), "../../pkg/sinon.js");
    files.unshift(pattern(require.resolve("sinon-chrome")));
    files.unshift(pattern(sinonPath));
};

framework.$inject = ["config.files"];

module.exports = {
    "framework:sinon-chrome": ["factory", framework]
};
