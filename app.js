/**
 * Created by tamara on 01.11.2015.
 */


(function () {
    var app = angular.module("paperdoll", ['ngAnimate', 'ngSanitize', 'ngRoute']);


    app.directive('doll', function() {
        return {
            templateUrl: 'directives/doll/template.html',
            restrict: 'E'
        };
    });




})();