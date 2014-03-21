'use strict';

(function () {
  var app = angular.module('generatorMeanstackApp', ['ngResource']);
  app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/test-bootstrap.html',
        controller: 'TestCtrl'
      })
      .when('/test', {
        templateUrl: 'views/test.html',
        controller: 'TestCtrl'
      })
      .when('/test-bootstrap', {
        templateUrl: 'views/test-bootstrap.html',
        controller: 'TestCtrl'
      })
      .otherwise({
        redirectTo: 'views/test-bootstrap.html'
      });
  });
})(); // <-- changed to immediately-invoked function expression to prevent strict error.