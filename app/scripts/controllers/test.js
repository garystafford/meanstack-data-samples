'use strict';

// Function within AngularJS controller contains array of strings
angular.module('generatorMeanstackApp')
  .controller('TestCtrl', function($scope, $http, $location, $anchorScroll, TestService, testFactory, googleSearchFactory) {
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
      })
      .error(function(data) {
        console.log('Error: ' + data);
      });

    $scope.scrollTo = function(id) {
      $location.hash(id);
      $anchorScroll();
    };

    // Used to change between views using button
    $scope.changeView = function(view) {
      $location.path(view); // path not hash
    };

    $scope.flipChevron = function($event) {
      if ($event.target.parentElement.className == 'pull-right collapsed') {
        $event.target.className = 'glyphicon glyphicon-chevron-up';
      } else {
        $event.target.className = 'glyphicon glyphicon-chevron-down';
      }
    };

    $scope.googleStuff = {};
    promise = googleSearchFactory.getSearchResults();
    promise.then(function(data) {
      $scope.googleStuff = data;
    });
  });