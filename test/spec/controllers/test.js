'use strict';

describe('Controller: TestCtrl', function($httpBackend) {

    // load the controller's module
    beforeEach(module('generatorMeanstackApp'));

    var TestCtrl,
        scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function($controller, $rootScope, $httpBackend) {
        $httpBackend.when('GET', 'otherStuff.json').respond({
            "components": [{
                "component": "jQuery",
                "url": "http://jquery.com"
            }, {
                "component": "Twitter Bootstrap",
                "url": "http://getbootstrap.com"
            }, {
                "component": "Karma",
                "url": "http://karma-runner.github.io"
            }, {
                "component": "Jade",
                "url": "http://jade-lang.com"
            }, {
                "component": "BreezeJS",
                "url": "http://www.breezejs.com"
            }]
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
        expect(scope.meanStuff().length).toBe(4);
    });

    it('should attach a list of otherStuff to the scope', function() {
        expect(scope.otherStuff.data.components.length).toBe(5);
    });
});