'use strict'

var path = require('path')

var pattern = function (file) {
  return { pattern: file, included: true, served: true, watched: false }
}

var framework = function (files) {
  var sinonChromePath = path.resolve(require.resolve('sinon-chrome'), '../../dist/sinon-chrome.latest.js')
  files.unshift(pattern(sinonChromePath))
}

framework.$inject = ['config.files']

module.exports = {
  'framework:sinon-chrome': ['factory', framework]
}
