/**
 * Created by gstafford on 12/18/14.
 */

'use strict';

// http://developers.google.com/apis-explorer/#p/customsearch/v1/
// Request format: GET https://www.googleapis.com/customsearch/v1?cx={YOUR_CSE_ID}&q={SEARCH_TERM}&num=10&key={YOUR_API_KEY}
// Request header: X-JavaScript-User-Agent:  Google APIs Explorer

angular.module('generatorMeanstackApp')
    .factory('googleCustomSearchFactory', function ($q, $http) {
        var _getConfig = function () {
                var deferred = $q.defer(),
                    httpPromise = $http.get('cse_config.json');

                httpPromise.then(function (response) {
                    deferred.resolve(response);
                }, function (error) {
                    console.error(error);
                });

                return deferred.promise;
            },
            _executeSearch = function (cse_config) {
                var _cse_config = cse_config.data,
                    deferred = $q.defer(),
                    host = 'https://www.googleapis.com/customsearch/v1',
                    args = {
                        'cse_id'     : _cse_config.cse_id,
                        'search_term': 'mean+stack',
                        'num'        : '8',
                        'api_key'    : _cse_config.api_key,
                        'callback'   : 'JSON_CALLBACK'
                    },
                    params = ('?cx=' + args.cse_id + '&q=' + args.search_term +
                    '&num=' + args.num + '&key=' + args.api_key + '&callback=' + args.callback),
                    httpPromise = $http.jsonp(host + params);

                httpPromise.then(function (response) {
                    deferred.resolve(response);
                }, function (error) {
                    console.error(error);
                });

                return deferred.promise;
            };

        return {
            getSearchResults: function () {
                // promises are chained
                // results of _getConfig are passed to _executeSearch
                return _getConfig().then(_executeSearch);
            }
        };
    });
