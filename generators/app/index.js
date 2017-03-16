'use strict';
//Require dependencies
var Generator = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');


module.exports = Generator.extend({

  prompting: function () {
    this.log(yosay(
      'Welcome to tavern, we will drink ' + chalk.red( 'Components')
    ));

    var prompts = [
      {
      type: 'input',
      name: 'projectName',
      message: 'Project name',
      default: this.appname
      },
      {
        type: 'input',
        name: 'description',
        message: 'Description'
      },
      {
        type: 'input',
        name: 'author',
        message: 'Author',
        default: "Anonymous"
      },
      {
        type: 'input',
        name: 'license',
        message: 'License',
        default: "MIT"
      },
      {
        type: 'input',
        name: 'version',
        message: 'Version',
        default: "1.0.0"
      }
      ];

    return this.prompt(prompts).then(function (props) {
      this.props = props;
    }.bind(this));

  },

  writing: function () {
    this.fs.copy(
      this.templatePath('src'),
      this.destinationPath('src')
    );

    this.fs.copy(
      this.templatePath('yarn.lock'),
      this.destinationPath('yarn.lock')
    );

    this.fs.copy(
      this.templatePath('webpack.config.js'),
      this.destinationPath('webpack.config.js')
    );

    this.fs.copy(
      this.templatePath('.gitignore'),
      this.destinationPath('.gitignore')
    );

    this.fs.copyTpl(
      this.templatePath('_package.json'),
      this.destinationPath('package.json'),{
        name: this.props.projectName,
        description: this.props.description,
        author: this.props.author,
        license: this.props.license,
        version: this.props.version
      }
    );
  },
  install: function () {
    this.installDependencies({
      npm: false,
      yarn: true,
      bower: false
    });
  }

});
