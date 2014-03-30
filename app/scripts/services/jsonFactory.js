'use strict';

angular.module('generatorMeanstackApp')
  .factory('jsonFactory', function ($q, $http) {
    return {
      getOtherStuff: function () {
        var deferred = $q.defer(),
          httpPromise = $http.get('data/otherStuff.json');

        httpPromise.then(function (response) {
          deferred.resolve(response);
        }, function (error) {
          console.error(error);
        });

        return deferred.promise;
      }
    };
  });