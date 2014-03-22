'use strict';

describe('Service: MeanService', function () {

  // load the service's module
  beforeEach(module('generatorMeanstackApp'));

  // instantiate service
  var MeanService;
  beforeEach(inject(function (_MeanService_) {
    MeanService = _MeanService_;
  }));

  it('should do something', function () {
    expect(!!MeanService).toBe(true);
  });

});