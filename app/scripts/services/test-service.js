'use strict';

angular.module('generatorMeanstackApp')
  .service('TestService', function($q, $http) {
    this.getMeanStuff = function() {
      var deferred = $q.defer();

      var components = {
        components: [{
          component: 'MongoDB '
        }, {
          component: 'Express '
        }, {
          component: 'AngularJS '
        }, {
          component: 'Node.js '
        }]
      }

      deferred.resolve(components);

      return deferred.promise;
    }
  });