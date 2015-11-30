'use strict';

var app = angular.module("paperdoll");

app.controller("BackgroundController", ["$scope", "$http", "PaperDoll", function ($scope, $http, PaperDoll) {
    var controller = this;

    this.current = 0;

    // prefetch background files
    PaperDoll.backgroundData.forEach(function (_page) {
        PaperDoll.loadBackgroundPage(_page);
    });

    this.goto = function (_page) {
        this.current = _page.index;
    };
    this.hasPrevious = function () {
        return this.current > 0;
    };
    this.hasNext = function () {
        return (this.current < this.pages().length - 1);
    };
    this.next = function () {
        if (this.current < PaperDoll.backgroundData.length - 1) ++this.current;
    };
    this.previous = function () {
        if (this.current > 0) --this.current;
    };
    this.isCurrent = function (_page) {
        return (_page.index == this.current);
    };
    this.pages = function () {
        return PaperDoll.backgroundData;
    };
}]);
