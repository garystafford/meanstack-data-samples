'use strict';

angular.module('generatorMeanstackApp')
  .factory('googleSearchFactory', function ($q, $http, $resource) {
    return {
      getTwitterResults: function () {
        var deferred = $q.defer();
        var response = $resource('https://ajax.googleapis.com/ajax/services/search/web?v=1.0&q=meanstack');
        deferred.resolve(response);
        return deferred.promise;
      }
    };
  });