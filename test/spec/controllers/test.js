'use strict';

describe('Controller: TestCtrl', function($httpBackend) {

  // load the controller's module
  beforeEach(module('generatorMeanstackApp'));

  var TestCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller, $rootScope, $httpBackend) {
    $httpBackend.when('GET', 'data/otherStuff.json').respond({
      "components": [{
        "component": "red",
        "url": "http://orange.com"
      }, {
        "component": "blue",
        "url": "http://blue.com"
      }, {
        "component": "yellow",
        "url": "http://yellow.com"
      }, {
        "component": "orange",
        "url": "http://orange.com"
      }]
    });

    $httpBackend.when('GET', '/api/components').respond(
      [{
        _id: "53226ca2b260b524e8ced833",
        component: "apple",
        description: "delicious and crisp red fruit"
      }, {
        _id: "53226ca2b260b524e8ced834",
        component: "cherry",
        description: "small dark red fruit"
      }, {
        _id: "53226ca2b260b524e8ced835",
        component: "grapefruit",
        description: "tart yellowish-orange fruit"
      }]
    );

    var googleURL = 'https://ajax.googleapis.com/ajax/services/search/web?v=1.0&q=mean%20stack&rsz=8&callback=JSON_CALLBACK';

    $httpBackend.when('JSONP', googleURL).respond({
      responseData: {
        results: [{
          GsearchResultClass: "GwebSearch",
          unescapedUrl: "http://www.foo.io/",
          url: "http://www.foo.io/",
          visibleUrl: "www.foo.io",
          cacheUrl: "http://www.google.com/search?q=cache:QxaTWi8gcToJ:www.foo.io",
          title: "<b>FOO</b>.io - The FOO Javascript Framework",
          titleNoFormatting: "FOO.io - The FOO Javascript Framework",
          content: "Have fun coding with the FOO Javascript Framework."
        }, {
          GsearchResultClass: "GwebSearch",
          unescapedUrl: "http://www.bar.io/",
          url: "http://www.bar.io/",
          visibleUrl: "www.bar.io",
          cacheUrl: "http://www.google.com/search?q=cache:QxaTWi8gcToJ:www.bar.io",
          title: "<b>BAR</b>.io - The BAR Javascript Library",
          titleNoFormatting: "BAR.io - The Javascript Library",
          content: "Have fun coding with the BAR Javascript Library."
        }]
      }
    });

    scope = $rootScope.$new();
    TestCtrl = $controller('TestCtrl', {
      $scope: scope
    });

    $httpBackend.flush();
  }));

  it('should attach a list of yeomanStuff to the scope', function() {
    expect(scope.yeomanStuff().length).toBe(3);
  });

  it('should attach a list of meanStuff to the scope', function() {
    expect(scope.meanStuff.components.length).toBe(4);
  });

  it('should attach a list of otherStuff to the scope', function() {
    expect(scope.otherStuff.data.components.length).toBe(4);
  });

  it('should attach a list of mongoStuff to the scope', function() {
    expect(scope.mongoStuff.length).toBe(3);
  });

  it('should attach a list of googleStuff to the scope', function() {
    expect(scope.googleStuff.data.responseData.results.length).toBe(2);
  });
});