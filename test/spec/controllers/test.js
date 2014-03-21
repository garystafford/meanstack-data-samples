'use strict';

describe('Controller: TestCtrl', function ($httpBackend) {

  // load the controller's module
  beforeEach(module('generatorMeanstackApp'));

  var TestCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $httpBackend) {
    $httpBackend.when('GET', 'data/otherStuff.json').respond({
      "components": [
        {
          "component": "red",
          "url": "http://orange.com"
        },
        {
          "component": "blue",
          "url": "http://blue.com"
        },
        {
          "component": "yellow",
          "url": "http://yellow.com"
        },
        {
          "component": "orange",
          "url": "http://orange.com"
        }
      ]
    });

    $httpBackend.when('GET', '/api/components').respond(
      [
        {
          _id: "53226ca2b260b524e8ced833",
          component: "apple",
          description: "delicious and crisp red fruit"
        },
        {
          _id: "53226ca2b260b524e8ced834",
          component: "cherry",
          description: "small dark red fruit"
        },
        {
          _id: "53226ca2b260b524e8ced835",
          component: "grapefruit",
          description: "tart yellowish-orange fruit"
        }
      ]
    );

    scope = $rootScope.$new();
    TestCtrl = $controller('TestCtrl', {
      $scope: scope
    });

    $httpBackend.flush();
  }));

  it('should attach a list of yeomanStuff to the scope', function () {
    expect(scope.yeomanStuff().length).toBe(3);
  });

  it('should attach a list of meanStuff to the scope', function () {
    expect(scope.meanStuff.components.length).toBe(4);
  });

  it('should attach a list of otherStuff to the scope', function () {
    expect(scope.otherStuff.data.components.length).toBe(4);
  });

  it('should attach a list of mongoStuff to the scope', function () {
    expect(scope.mongoStuff.length).toBe(3);
  });
});