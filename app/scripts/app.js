'use strict';
(function() {
    var app = angular.module('generatorMeanstackApp', []);
    app.config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/test', {
                templateUrl: 'views/test.html',
                controller: 'TestCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });

}.call(this));