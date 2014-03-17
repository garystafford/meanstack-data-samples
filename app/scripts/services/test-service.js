'use strict';

angular.module('generatorMeanstackApp')
  .service('TestService', function ($q) {
    this.getMeanStuff = function () {
      var deferred = $q.defer();

      var components = {
        components: [
          {
            component: 'MongoDB', url: 'http://www.mongodb.org'
          },
          {
            component: 'Express', url: 'http://expressjs.com'
          },
          {
            component: 'AngularJS', url: 'http://angularjs.org'
          },
          {
            component: 'Node.js', url: 'http://nodejs.org'
          }
        ]
      };

      deferred.resolve(components);

      return deferred.promise;
    };
  });