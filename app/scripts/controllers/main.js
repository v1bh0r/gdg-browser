'use strict';

/**
 * @ngdoc function
 * @name gdgBrowserApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the gdgBrowserApp
 */
angular.module('gdgBrowserApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
