'use strict';

angular.module('generatorMeanstackApp')
    .factory('testFactory', function($q, $http) {
        return {
            otherStuff: function() {
                var deferred = $q.defer();

                $http.get('data/otherStuff.json').then(function(data) {
                    deferred.resolve(data);
                });

                return deferred.promise;
            }
        }
    });