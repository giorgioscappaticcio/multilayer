'use strict';

/**
 * @ngdoc directive
 * @name animelayApp.directive:searchbox
 * @description
 * # searchbox
 */
angular.module('animelayApp')
  .directive('searchbox', function ($animate) {
    return {
      template: '<div class="search-box gray-bg"></div>',
      restrict: 'E',
      replace: true,
      link: function postLink(scope, element, attrs) {

      }
    };
  });
