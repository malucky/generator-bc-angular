'use strict';
var path = require('path'),
    fs = require('fs'),
    yeoman = require('yeoman-generator'),
    chalk = require('chalk'),
    configure = {
      configureAll: configureAll,
      configureConstants: configureConstants,
      configureNames: configureNames,
      configurePaths: configurePaths
    };

/**
 * @name configureAll
 * @desc Exported function that runs all the configurations.
 */
function configureAll() {
  configureConstants.apply(this);
  configureNames.apply(this);
  configurePaths.apply(this);
}

/**
 * @name configureConstants
 * @desc Attach constants associated with app and module to this.
 * @properties:
 *    -scriptSuffix: script suffix
 */
function configureConstants() {
  this.scriptSuffix = '.js';
}

/**
 * @name configureNames
 * @desc Attach names associated with app and module to this.
 * @properties:
 *    -appname: used internally by yeoman-generator. i.e. 'hello-world'
 *    -fileName: i.e. 'fooBar'
 *    -moduleName: the module name. i.e. 'helloWorld.fooBar'
 *    -camelCaseName: camel case module name. i.e. 'fooBar'
 *    -pascalCaseName: pascal case module name. i.e. 'FooBar'
 */
function configureNames() {
  try {
    this.appname = require(path.join(process.cwd(), 'bower.json')).name;
  } catch (e) {
    this.appname = path.basename(process.cwd());
  }
  this.appname = this._.slugify(this._.humanize(this.appname));
  this.fileName = path.basename(this.name);
  this.moduleName = this.moduleName || this.fileName;
  this.camelCaseName = this._.camelize(this.fileName);
  this.pascalCaseName = this.camelCaseName.charAt(0).toUpperCase() + this.camelCaseName.slice(1);
}

/**
 * @name configurePaths
 * @desc Attach the paths to this. Configure the sourceRoot with the templates path.
 * @properties:
 *    -path: path of module entered by user in prompt. i.e. 'src/app/parent/child/newModule'
 *    -parentPath: path of the parent of the module. i.e. 'src/app/foo'
 *    -templatePath: the path of an html file. Used in state files for templateUrl. i.e. 'app/parent/child'
 */
function configurePaths() {
  this.path = path.dirname(this.name);
  this.parentPath = path.dirname(this.path);
  this.sourceRoot(path.join(__dirname, 'templates'));
  this.templatePath = this.path.split('/').slice(1).join('/');
}

module.exports = configure;