/**
 * Created by tamara on 01.11.2015.
 */


(function () {
    var app = angular.module("paperdoll", ['ngAnimate', 'ngSanitize', 'ngRoute']);

    app.config(['$routeProvider',
        function ($routeProvider) {
            $routeProvider.
            when('/start', {
                templateUrl: 'templates/start/view.html',
                controller: 'StartController',
                controllerAs: 'startCtrl'
            }).
            when('/game/:questionId', {
                templateUrl: 'templates/game/view.html',
                controller: 'PuppetController',
                controllerAs: 'qCtrl'
            }).
            when('/background', {
                templateUrl: 'templates/background/view.html',
                controller: 'BackgroundController',
                controllerAs: 'backCtrl'
            }).
            when('/background/:pageId', {
                templateUrl: 'templates/background/view.html',
                controller: 'BackgroundController',
                controllerAs: 'backCtrl'
            }).
            when('/', {
                templateUrl: 'templates/start/view.html',
                controller: 'StartController',
                controllerAs: 'startCtrl'
            }).
            otherwise({
                redirectTo: '/start'
            });
        }]);





})();