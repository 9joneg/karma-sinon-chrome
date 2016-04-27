/* global it */

'use strict'

var fs = require('fs')
var async = require('async')
var di = require('di')
var framework = require('./')

it('should inject files', function (done) {
  var config = { 'config': [ 'value', { files: [] } ] }
  var injector = new di.Injector([ config, framework ])

  injector.get('framework:sinon-chrome')

  var files = injector.get('config.files')
        .map(function (file) {
          return file.pattern
        })
  async.each(files, fs.access, done)
})
