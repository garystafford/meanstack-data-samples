'use strict';

angular.module('generatorMeanstackApp')
  .service('meanService', function () {
    this.getMeanStuff = function () {
      var components = {
        components: [
          {
            component: 'MongoDB',
            url: 'http://www.mongodb.org'
          },
          {
            component: 'Express',
            url: 'http://expressjs.com'
          },
          {
            component: 'AngularJS',
            url: 'http://angularjs.org'
          },
          {
            component: 'Node.js',
            url: 'http://nodejs.org'
          }
        ]
      };

      return components;
    };
  });