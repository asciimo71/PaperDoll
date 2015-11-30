'use strict';

var app = angular.module("paperdoll");

app.controller("StartController", ["$scope", function ($scope) {
    this.pageStatus = 0;

    this.showAbout = false;

    this.inStart = function () {
        return (this.pageStatus === 0);
    };

    this.start = function () {
        window.location.reload();
    };
    this.inGame = function () {
        return (this.pageStatus === 2);
    };

    this.startGame = function () {
        this.pageStatus = 2;
    };

    this.openAbout = function () {
        this.showAbout = !this.showAbout;
    };

    this.startBackground = function () {
        this.pageStatus = 3;
    };

    this.inBackground = function () {
        return (this.pageStatus === 3);
    };
}]);
