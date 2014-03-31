'use strict';

angular.module('generatorMeanstackApp')
  .service('meanService', function () {
    this.getMeanStuff = function () {
      return ([
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
      ]);
    };
  });