'use strict';

describe('Directive: searchbox', function () {

  // load the directive's module
  beforeEach(module('animelayApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<searchbox></searchbox>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the searchbox directive');
  }));
});
