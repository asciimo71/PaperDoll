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

    app.directive('pdNavigation', function() {
        return {
            templateUrl: 'directives/navigation/template.html',
            restrict: 'E',
            scope: {
                show: '=',
                current: '=',
                questions: '='
            }
        };
    });

    app.directive('pdAntwort', function() {
        return {
            templateUrl: 'directives/antwort/template.html',
            restrict: 'AE',
            scope: {
                index: '=',
                question: '=',
                onanswer: '=',
                answerclass: '='
            }
        };
    });



})();