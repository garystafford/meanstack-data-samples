'use strict';

describe('Service: mongoFactory', function() {

  // load the service's module
  beforeEach(module('generatorMeanstackApp'));

  // instantiate service
  var mongoFactory;
  beforeEach(inject(function(_mongoFactory_) {
    mongoFactory = _mongoFactory_;
  }));

  it('should do something', function() {
    expect( !! mongoFactory).toBe(true);
  });

});