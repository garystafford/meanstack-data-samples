'use strict';
/*
 Info: https://developers.google.com/web-search/docs/
 Note: The Google Web Search API has been officially deprecated as of November 1, 2010.
 It will continue to work as per Google deprecation policy
 */

angular.module('generatorMeanstackApp')
  .factory('googleFactory', function ($q, $http) {
    return {
      getSearchResults: function () {
        var deferred = $q.defer();
        var host = 'https://ajax.googleapis.com/ajax/services/search/web';
        var params = '?v=1.0&q=mean%20stack&rsz=8&callback=JSON_CALLBACK';

        $http.jsonp(host + params).then(function(data) {
          deferred.resolve(data);
        });

        return deferred.promise;
      }
    };
  });