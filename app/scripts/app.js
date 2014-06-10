'use strict';

(function () {
    var app = angular.module('generatorMeanstackApp', ['ngResource', 'ngRoute']);
    app.config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                title:       'Bootstrap Version',
                templateUrl: 'views/data-bootstrap.html',
                controller:  'DataController'
            })
            .when('/data', {
                title:       'Non-Bootstrap Version',
                templateUrl: 'views/data-no-bootstrap.html',
                controller:  'DataController'
            })
            .when('/data-bootstrap', {
                title:       'Bootstrap Version',
                templateUrl: 'views/data-bootstrap.html',
                controller:  'DataController'
            })
            .otherwise({
                redirectTo:  '/'
            });
    });
})(); // <-- changed to immediately-invoked function expression to prevent strict error.