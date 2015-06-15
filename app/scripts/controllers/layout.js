'use strict';

/**
 * @ngdoc function
 * @name animelayApp.controller:LayoutCtrl
 * @description
 * # LayoutCtrl
 * Controller of the animelayApp
 */
angular.module('animelayApp')
  .controller('LayoutCtrl', function ($scope, $animate) {

    $scope.innerW = (window.innerWidth - 90 - 366 )+ "px";
    //jQuery('.bin-panel').css('width',$scope.innerW)

    //jQuery("body").height(window.innerHeight)
    $( window ).resize(function() {
      $scope.innerH = window.innerHeight;
      $scope.innerW = (window.innerWidth - 90 - 366 )+ "px";

      if ($scope.righPanel){
        jQuery('#main').css('width',$scope.innerW);
        //jQuery('.bin-panel').css('width',$scope.innerW)
      }

    });

    $scope.$watch('rightPanel',function(newval, oldval){
      if (newval !== oldval){
        if (newval){
          $animate.animate(jQuery('#main'), {
            /* starting styles */
            width:'100%'
          },{
            /* destination styles */
            width:$scope.innerW
          }, 'inline-animation');
          $animate.animate(jQuery('.bin-panel'), {
            /* starting styles */
            width:'100%'
          },{
            /* destination styles */
            width:$scope.innerW
          }, 'inline-animation');
        } else {
          $animate.animate(jQuery('#main'), {
            /* starting styles */
            width:$scope.innerW
          },{
            /* destination styles */
            width:'100%'
          }, 'inline-animation');
          $animate.animate(jQuery('.bin-panel'), {
            /* starting styles */
            width:$scope.innerW
          },{
            /* destination styles */
            width:'100%'
          }, 'inline-animation');
        }

      }

    })


  });
