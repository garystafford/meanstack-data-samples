'use strict';

angular.module('generatorMeanstackApp')
    .controller('DataController', function ($scope, $http, $location, $anchorScroll, meanService,
                                            jsonFactory, jsonFactoryResource, mongoFactory, googleFactory) {

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
        try {
            $scope.meanStuff = meanService.getMeanStuff();
        } catch (error) {
            console.error(error);
        }

        // AngularJS Factory returns the contents of JSON file to the controller.
        // Uses promise and deferred APIs
        $scope.otherStuff = {};
        jsonFactory.getOtherStuff()
            .then(function (response) {
                $scope.otherStuff = response.data.components;
            }, function (error) {
                console.error(error);
            });

        // Alternate Method: AngularJS Factory creates a resource object
        // to return the contents of JSON file to the controller.
        $scope.otherStuffAlt = {};
        jsonFactoryResource.get(function (data) {
            $scope.otherStuffAlt = data.components;
        });

        // AngularJS Factory returns a collection of documents
        // from MongoDB Database to the controller.
        // Uses promise and deferred APIs
        $scope.mongoStuff = {};
        mongoFactory.getMongoStuff()
            .then(function (components) {
                $scope.mongoStuff = components;
            }, function (error) {
                console.error(error);
            });

        // AngularJS Factory returns response from
        // Google's RESTful Web Search API to the controller.
        // Uses promise and deferred APIs
        $scope.googleStuff = {};
        googleFactory.getSearchResults()
            .then(function (response) {
                $scope.googleStuff = response.data.responseData.results;
            }, function (error) {
                console.error(error);
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