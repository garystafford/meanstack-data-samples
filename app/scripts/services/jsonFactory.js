'use strict';

angular.module('generatorMeanstackApp')
  .factory('jsonFactory', function ($q, $http) {
    return {
      getOtherStuff: function () {
        var deferred = $q.defer(); // new instance of Deferred is constructed

        $http.get('data/otherStuff.json').then(function (data) { // promise success callback
          deferred.resolve(data); // resolves Deferred object and calls doneCallback of '.then' method with 'data' arg
        });

        return deferred.promise; // returns the Deferred’s Promise object
      }
    };
  });