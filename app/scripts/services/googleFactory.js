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
                var deferred = $q.defer(),
                    host = 'https://ajax.googleapis.com/ajax/services/search/web',
                    args = {
                        'version'   : '1.0',
                        'searchTerm': 'mean%20stack',
                        'results'   : '8',
                        'callback'  : 'JSON_CALLBACK'
                    },
                    params = ('?v=' + args.version + '&q=' + args.searchTerm + '&rsz=' +
                    args.results + '&callback=' + args.callback),
                    httpPromise = $http.jsonp(host + params);

                httpPromise.then(function (response) {
                    deferred.resolve(response);
                }, function (error) {
                    console.error(error);
                });

                return deferred.promise;
            }
        };
    });
