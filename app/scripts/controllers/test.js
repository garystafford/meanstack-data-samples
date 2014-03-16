'use strict';

angular.module('generatorMeanstackApp')
  .controller('TestCtrl', function($scope, $http, TestService, testFactory) {
    $scope.yeomanStuff = function() {
      return [
        'yo',
        'Grunt',
        'Bower'
      ];
    };

    $scope.meanStuff = {};

    var promise = TestService.getMeanStuff();

    promise.then(function(data) {
      $scope.meanStuff = data;
    });

    $scope.otherStuff = {};

    var promise = testFactory.getOtherStuff();

    promise.then(function(data) {
      $scope.otherStuff = data;
    });

    // when landing on the page, get all components and show them
    $http.get('/api/components')
      .success(function(data) {
        $scope.mongoStuff = data;
        console.log(data);
      })
      .error(function(data) {
        console.log('Error: ' + data);
      });
  });