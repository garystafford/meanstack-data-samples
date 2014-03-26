'use strict';

describe('Service: googleFactory', function () {

  // load the service's module
  beforeEach(module('generatorMeanstackApp'));

  // instantiate service
  var googleFactory;
  beforeEach(inject(function (_googleFactory_) {
    googleFactory = _googleFactory_;
  }));

  it('should do something', function () {
    expect(!!googleFactory).toBe(true);
  });

});