'use strict';

describe('Service: jsonFactoryResource', function () {

    // load the service's module
    beforeEach(module('generatorMeanstackApp'));

    // instantiate service
    var jsonFactoryResource;
    beforeEach(inject(function (_jsonFactoryResource_) {
        jsonFactoryResource = _jsonFactoryResource_;
    }));

    it('should do something', function () {
        expect(!!jsonFactoryResource).toBe(true);
    });

});