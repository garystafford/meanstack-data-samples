'use strict';

angular.module('generatorMeanstackApp')
  .factory('mongoFactory', function ($q, $http) {
    return {
      getMongoStuff: function () {
        var deferred = $q.defer(); // new instance of Deferred is constructed

        $http.get('/api/components')
          .success(function (data) { // promise success callback
            deferred.resolve(data); // resolves Deferred object and calls doneCallback of '.then' method with 'data' arg
          })
          .error(function (data) { //promise error callback
            console.log('Error: ' + data);
          });

        return deferred.promise; // returns the Deferred’s Promise object
      }
    };
  });