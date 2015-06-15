'use strict';

/**
 * @ngdoc directive
 * @name animelayApp.directive:searchPanel
 * @description
 * # searchPanel
 */
angular.module('animelayApp')
  .directive('searchPanel', function ($animate) {
    return {
      templateUrl: '././views/leftPanel.html',
      restrict: 'CE',
      link: function postLink(scope, element, attrs) {

        $animate.on('removeClass', element,
          function callback(element, phase) {
            console.log(element.find('.search-box'))
            //$animate.enter(jQuery("<div>"),element,);
            //element.find('.search-box')

              //$animate.animate(element.find('.search-box'), {
              //  /* starting styles */
              //  position:'relative',top:'0px'
              //},{
              //  /* destination styles */
              //  top: '-50px'
              //}, 'super-inline-animation');

            scope.$apply();

          }
        );

        $animate.on('addClass', element,
          function callback(element, phase) {
            console.log(phase);

            scope.$apply();
              //element.find('.search').remove();

          }
        );


      }
    };
  });
