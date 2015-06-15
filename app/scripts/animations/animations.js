'use strict';

/**
 * @ngdoc function
 * @name animelayApp.animations:fadeAnime
 * @description
 * # fadeAnime
 * Animations of the animelayApp
 */
angular.module('animelayApp').animation('.slide', [function() {
  return {
    // make note that other events (like addClass/removeClass)
    // have different function input parameters
    enter : function(element, doneFn) {
      jQuery(element).css({position: "relative", left: '-200px', opacity:0});
      jQuery(element).animate({
        left: '0px', opacity:1
      }, doneFn);
    },

    move: function(element, doneFn) {
      jQuery(element).fadeIn(500, doneFn);
    },

    leave: function(element, doneFn) {
      jQuery(element).fadeOut(500, doneFn);
    }
  }
}])
  .animation('.slide-to-right', [function() {
  return {
    // make note that other events (like addClass/removeClass)
    // have different function input parameters
    removeClass : function(element, doneFn) {
      jQuery(element).css({left: '-300px', opacity:1});
      jQuery(element).animate({
        left: '90px', opacity:1
      }, {duration:200, done:doneFn});
    },

    addClass: function(element, doneFn) {
      jQuery(element).animate({
        left: '-300px', opacity:1
      }, {duration:200, done:doneFn});
    }
  }
}])
  .animation('.slide-to-left', [function() {
    return {
      // make note that other events (like addClass/removeClass)
      // have different function input parameters
      removeClass : function(element, doneFn) {
        jQuery(element).css({right: '-366px', opacity:1});
        jQuery(element).animate({
          right: '0px', opacity:1
        }, {duration:200, done:doneFn});
      },

      addClass: function(element, doneFn) {
        jQuery(element).animate({
          right: '-366px', opacity:1
        }, {duration:200, done:doneFn});
      }
    }
  }])
  .animation('.slide-up', [function() {
    return {
      // make note that other events (like addClass/removeClass)
      // have different function input parameters
      removeClass : function(element, doneFn) {
        jQuery(element).css({bottom: '-100px', opacity:1});
        jQuery(element).animate({
          bottom: '0px', opacity:1
        }, {duration:200, done:doneFn});
      },

      addClass: function(element, doneFn) {
        jQuery(element).animate({
          bottom: '-100px', opacity:1
        }, {duration:200, done:doneFn});
      }
    }
  }])



