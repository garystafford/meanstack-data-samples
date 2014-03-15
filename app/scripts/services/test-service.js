'use strict';

angular.module('generatorMeanstackApp')
  .service('TestService', function() {
    this.meanStuff = function() {
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