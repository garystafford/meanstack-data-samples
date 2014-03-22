'use strict';

(function () {
  var app = angular.module('generatorMeanstackApp', ['ngResource']);
  app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/data-bootstrap.html',
        controller: 'DataController'
      })
      .when('/data', {
        templateUrl: 'views/data-nobootstrap.html',
        controller: 'DataController'
      })
      .when('/data-bootstrap', {
        templateUrl: 'views/data-bootstrap.html',
        controller: 'DataController'
      })
      .otherwise({
        redirectTo: 'views/data-bootstrap.html'
      });
  });
})(); // <-- changed to immediately-invoked function expression to prevent strict error.