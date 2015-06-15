'use strict';

/**
 * @ngdoc function
 * @name animelayApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the animelayApp
 */
angular.module('animelayApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
