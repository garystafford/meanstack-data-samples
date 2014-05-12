'use strict';

angular.module('generatorMeanstackApp')
  .factory('jsonResource', function($resource) {
    return $resource('data/otherStuff.json');
  });