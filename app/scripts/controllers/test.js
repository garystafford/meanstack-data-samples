'use strict';

angular.module('generatorMeanstackApp')
    .controller('TestCtrl', function($scope, TestService, testFactory) {
        $scope.yeomanStuff = function() {        
            return [
                'yo',
                'Grunt',
                'Bower'
            ];    
        }

        $scope.meanStuff = function() {        
            return TestService.meanStuff();    
        }

        $scope.otherStuff = {};

        var promise = testFactory.otherStuff();

        promise.then(function(data) {
            $scope.otherStuff = data;
        });
    });