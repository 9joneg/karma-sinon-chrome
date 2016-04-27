/* global it */

'use strict'

var fs = require('fs')
var di = require('di')
var framework = require('./')

it('should inject files', function () {
  var config = { 'config': [ 'value', { files: [] } ] }
  var injector = new di.Injector([ config, framework ])

  injector.get('framework:sinon-chrome')

  injector.get('config.files')
    .map(function (file) {
      return file.pattern
    })
    .forEach(function (path) {
      fs.accessSync(path)
    })
})
