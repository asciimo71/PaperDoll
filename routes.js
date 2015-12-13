var app = angular.module("paperdoll");

app.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
        when('/start', {
            templateUrl: 'templates/start/view.html',
            controller: 'StartController',
            controllerAs: 'startCtrl'
        }).
        when('/game', {
            templateUrl: 'templates/game/view.html',
            controller: 'PuppetController',
            controllerAs: 'qctrl'
        }).
        when('/game/:questionId', {
            templateUrl: 'templates/game/view.html',
            controller: 'PuppetController',
            controllerAs: 'qctrl'
        }).
        when('/game/:questionId/:place', {
            templateUrl: 'templates/game/view.html',
            controller: 'PuppetController',
            controllerAs: 'qctrl'
        }).
        when('/score/:score', {
            templateUrl: 'templates/score/view.html',
            controller: 'ScoreController',
            controllerAs: 'scoreCtrl'
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