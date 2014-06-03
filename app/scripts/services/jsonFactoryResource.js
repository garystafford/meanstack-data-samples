'use strict';

angular.module('generatorMeanstackApp')
  .factory('jsonFactoryResource', function($resource) {
    return $resource('data/otherStuff.json');
  });