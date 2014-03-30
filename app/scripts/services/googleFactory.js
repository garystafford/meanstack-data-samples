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

        // URL arguments: https://developers.google.com/web-search/docs/reference
        var args = {};
        args.version = '1.0';
        args.searchTerm = 'mean%20stack';
        args.results = '8';
        args.callback = 'JSON_CALLBACK';

        var params = '?v=' + args.version + '&q=' + args.searchTerm + '&rsz=' +
          args.results + '&callback=' + args.callback;

        $http.jsonp(host + params).then(function (response) {
          deferred.resolve(response);
        }, function (error) {
          console.error(error);
        });

        return deferred.promise;
      }
    };
  });