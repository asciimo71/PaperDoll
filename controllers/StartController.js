'use strict';

var app = angular.module("paperdoll");

app.controller("StartController", [function () {

    this.showAbout = false;

    this.openAbout = function () {
        this.showAbout = !this.showAbout;
    };

}]);
