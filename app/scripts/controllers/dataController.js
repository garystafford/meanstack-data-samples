'use strict';

angular.module('generatorMeanstackApp')
  .controller('DataController', function ($scope, $http, $location, $anchorScroll, meanService, jsonFactory, mongoFactory, googleFactory) {

    // Function within the AngularJS Controller returns a static array of strings.
    $scope.yeomanStuff = function () {
      return [
        'yo',
        'Grunt',
        'Bower'
      ];
    };

    // AngularJS Service returns a static array of object literals to the controller.
    $scope.meanStuff = {};
    var promise = meanService.getMeanStuff();
    promise.then(function (data) {
      $scope.meanStuff = data;
    });

    // AngularJS Factory returns the contents of JSON file to the controller.
    $scope.otherStuff = {};
    promise = jsonFactory.getOtherStuff();
    promise.then(function (data) {
      $scope.otherStuff = data;
    });

    // AngularJS Factory returns a collection of documents
    // from MongoDB Database to the controller.
    $scope.otherStuff = {};
    promise = mongoFactory.getMongoStuff();
    promise.then(function (data) {
      $scope.mongoStuff = data;
    });

    // AngularJS Factory returns results from
    // Google's RESTful Web Search API to the controller.
    $scope.googleStuff = {};
    promise = googleFactory.getSearchResults();
    promise.then(function (data) {
      $scope.googleStuff = data;
    });

    // Return to top (or other anchor)
    $scope.scrollTo = function (id) {
      $location.hash(id);
      $anchorScroll();
    };

    // Switch between views using button
    $scope.changeView = function (view) {
      $location.path(view); // path not hash
    };

    // Flip chevron on click
    $scope.flipChevron = function ($event) {
      if ($event.target.parentElement.className === 'pull-right collapsed') {
        $event.target.className = 'glyphicon glyphicon-chevron-up';
      } else {
        $event.target.className = 'glyphicon glyphicon-chevron-down';
      }
    };
  });