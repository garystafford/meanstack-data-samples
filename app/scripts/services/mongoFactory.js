'use strict';

angular.module('generatorMeanstackApp')
  .factory('mongoFactory', function ($q, $http) {
    return {
      getMongoStuff: function () {
        var deferred = $q.defer(),
          httpPromise = $http.get('/api/components');

        httpPromise.success(function (components) {
          deferred.resolve(components);
        })
          .error(function (error) {
            console.error(error);
          });

        return deferred.promise;
      }
    };
  });