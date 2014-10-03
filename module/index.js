'use strict';

var util = require('util'),
    yosay = require('yosay'),
    yeoman = require('yeoman-generator'),
    helper = require('./module-helper.js'),
    BcAngularModuleGenerator;

BcAngularModuleGenerator = yeoman.generators.Base.extend({
  // configuring: helper.configuring,
  prompting: {
    greet: helper.greet,
    promptModuleName: helper.promptModuleName,
    promptFilePath: helper.promptFilePath
  },

  configure: helper.configure,

  writing: helper.generateModuleFiles
});

module.exports = BcAngularModuleGenerator;