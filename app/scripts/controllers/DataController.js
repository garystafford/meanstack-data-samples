'use strict';

angular.module('generatorMeanstackApp')
  .controller('DataController', function($scope, $http, $location, $anchorScroll, meanService, jsonFactory, mongoFactory, googleFactory) {

    // Function within the AngularJS Controller returns a static array of strings.
    $scope.yeomanStuff = function() {
      return [
        'yo',
        'Grunt',
        'Bower'
      ];
    };

    // AngularJS Service returns a static array of object literals to the controller.
    $scope.meanStuff = {};
    try {
      $scope.meanStuff = meanService.getMeanStuff();
    } catch (err) {
      console.log('meanService.getMeanStuff() failed');
    }

    // AngularJS Factory returns the contents of JSON file to the controller.
    $scope.otherStuff = {};
    jsonFactory.getOtherStuff()
      .then(function(data) {
          $scope.otherStuff = data;
        },
        function() { // failure
          console.log('jsonFactory.getOtherStuff() failed');
        });

    // AngularJS Factory returns a collection of documents
    // from MongoDB Database to the controller.
    $scope.otherStuff = {};
    mongoFactory.getMongoStuff()
      .then(function(data) {
          $scope.mongoStuff = data;
        },
        function() { // failure
          console.log('mongoFactory.getMongoStuff() failed');
        });

    // AngularJS Factory returns results from
    // Google's RESTful Web Search API to the controller.
    $scope.googleStuff = {};
    googleFactory.getSearchResults()
      .then(function(data) {
          $scope.googleStuff = data;
        },
        function() { // failure
          console.log('googleFactory.getSearchResults() failed');
        });

    // Return to top (or other anchor)
    $scope.scrollTo = function(id) {
      $location.hash(id);
      $anchorScroll();
    };

    // Switch between views using button
    $scope.changeView = function(view) {
      $location.path(view); // path not hash
    };

    // Flip chevron on click
    $scope.flipChevron = function($event) {
      if ($event.target.parentElement.className === 'pull-right collapsed') {
        $event.target.className = 'glyphicon glyphicon-chevron-up';
      } else {
        $event.target.className = 'glyphicon glyphicon-chevron-down';
      }
    };
  });