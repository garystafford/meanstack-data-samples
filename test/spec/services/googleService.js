'use strict';

describe('Service: GoogleFactory', function () {

  // load the service's module
  beforeEach(module('generatorMeanstackApp'));

  // instantiate service
  var GoogleFactory;
  beforeEach(inject(function (_GoogleFactory_) {
    GoogleFactory = _GoogleFactory_;
  }));

  it('should do something', function () {
    expect(!!GoogleFactory).toBe(true);
  });

});