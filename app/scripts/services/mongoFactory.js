'use strict';

angular.module('generatorMeanstackApp')
  .factory('mongoFactory', function ($q, $http) {
    return {
      getMongoStuff: function () {
        var deferred = $q.defer(),
          httpPromise = $http.get('/api/components');

        httpPromise.success(function (data) {
          deferred.resolve(data);
        })
          .error(function (data) {
            console.log('Error: ' + data);
          });

        return deferred.promise;
      }
    };
  });