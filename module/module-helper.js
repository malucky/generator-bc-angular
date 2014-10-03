'use strict';

var util = require('util'),
    yosay = require('yosay'),
    path = require('path'),
    config = require('../configure.js'),
    moduleFileNames = [ 'module', 'controller', 'template', 'state', 'controller.spec'],
    helper;

helper = {
  greet: greet,
  promptModuleName: promptModuleName,
  promptFilePath: promptFilePath,
  generateModuleFiles: generateModuleFiles,
  configure: configure
};

module.exports = helper;


function greet() {
  this.log(yosay(
    'Welcome to the grand BcAngular generator!'
  ));
}

function promptModuleName() {
  var done = this.async();

  var prompts = [{
    type: 'input',
    name: 'moduleName',
    message: 'What is the module name?',
    default: 'app.parentModule.newModule'
  }];

  this.prompt(prompts, function (props) {
    this.moduleName = props.moduleName;

    done();
  }.bind(this));
}

function promptFilePath() {
  var done = this.async();

  var prompts = [{
    type: 'input',
    name: 'filePath',
    message: 'What is the path of the module relative to the repo root (including the new module)? For instance: "src/app/parent/child/newModule"\n'
  }];

  this.prompt(prompts, function (props) {
    this.name = props.filePath;

    done();
  }.bind(this));
}


function generateModuleFiles() {
  var self = this;

  moduleFileNames.forEach(function (templateType) {
    var destSuffix = templateType === 'template' ? '.tpl.html' : '.' + templateType + self.scriptSuffix,
        srcFileName = templateType + self.scriptSuffix,
        destPath = path.join(self.path, self.fileName + destSuffix);

    self.template.apply(self, [
      srcFileName,
      destPath
    ]);
  });
}

function configure() {
  config.configureAll.apply(this);
}

