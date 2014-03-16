'use strict';

// Function within AngularJS controller contains array of strings
angular.module('generatorMeanstackApp')
  .controller('TestCtrl', function($scope, $http, TestService, testFactory) {
    $scope.yeomanStuff = function() {
      return [
        'yo',
        'Grunt',
        'Bower'
      ];
    };

    // AngularJS service returns an array of simple object literals to controller
    $scope.meanStuff = {};
    var promise = TestService.getMeanStuff();
    promise.then(function(data) {
      $scope.meanStuff = data;
    });

    // AngularJS factory returns contents of JSON file to controller
    $scope.otherStuff = {};
    promise = testFactory.getOtherStuff();
    promise.then(function(data) {
      $scope.otherStuff = data;
    });

    // MongoDB database returns collection of documents to controller
    $http.get('/api/components')
      .success(function(data) {
        $scope.mongoStuff = data;
        console.log(data);
      })
      .error(function(data) {
        console.log('Error: ' + data);
      });
  });