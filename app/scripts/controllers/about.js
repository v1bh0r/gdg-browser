'use strict';

/**
 * @ngdoc function
 * @name gdgBrowserApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the gdgBrowserApp
 */
angular.module('gdgBrowserApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
