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