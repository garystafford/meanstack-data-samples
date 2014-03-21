'use strict';

describe('Service: TestService', function () {

  // load the service's module
  beforeEach(module('generatorMeanstackApp'));

  // instantiate service
  var TestService;
  beforeEach(inject(function (_TestService_) {
    TestService = _TestService_;
  }));

  it('should do something', function () {
    expect(!!TestService).toBe(true);
  });

});