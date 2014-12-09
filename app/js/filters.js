'use strict';

/* Filters */

angular.module('phonecatFilters', []).filter('checkmark', function() {
  return function(input) {
    return input ? '\u2713' : '\u2718';
  };
}).filter('group_by_two', function() {
 return function(input) {
     var input_by_two = [];
     var input_length = input.length;
     for (var i=0; i < input_length; i=i+2) {
             input_by_two.push([input[i],input[i+1]]);
    }
   return input_by_two;
  };
});
