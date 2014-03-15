'use strict';

angular.module('generatorMeanstackApp')
  .service('TestService', function() {
    this.getMeanStuff = function() {
      return [{
        'component': 'MongoDB'
      }, {
        'component': 'Express'
      }, {
        'component': 'AngularJS'
      }, {
        'component': 'Node.js'
      }];
    };
  });