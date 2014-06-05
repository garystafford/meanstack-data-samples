'use strict';

describe('Service: meanService', function () {

    // load the service's module
    beforeEach(module('generatorMeanstackApp'));

    // instantiate service
    var meanService;
    beforeEach(inject(function (_meanService_) {
        meanService = _meanService_;
    }));

    it('should do something', function () {
        expect(!!meanService).toBe(true);
    });

});