'use strict';

describe('Service: googleSearchFactory', function() {

  // load the service's module
  beforeEach(module('generatorMeanstackApp'));

  // instantiate service
  var googleSearchFactory;
  beforeEach(inject(function(_googleSearchFactory_) {
    googleSearchFactory = _googleSearchFactory_;
  }));

  it('should do something', function() {
    expect( !! googleSearchFactory).toBe(true);
  });

});