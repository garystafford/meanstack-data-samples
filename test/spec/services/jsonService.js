'use strict';

describe('Service: JsonFactory', function () {

  // load the service's module
  beforeEach(module('generatorMeanstackApp'));

  // instantiate service
  var JsonFactory;
  beforeEach(inject(function (_JsonFactory_) {
    JsonFactory = _JsonFactory_;
  }));

  it('should do something', function () {
    expect(!!JsonFactory).toBe(true);
  });

});