'use strict';

describe('Service: testFactory', function () {

  // load the service's module
  beforeEach(module('generatorMeanstackApp'));

  // instantiate service
  var testFactory;
  beforeEach(inject(function (_testFactory_) {
    testFactory = _testFactory_;
  }));

  it('should do something', function () {
    expect(!!testFactory).toBe(true);
  });

});