'use strict';

var app = angular.module("paperdoll");

app.controller("PuppetController", ["$scope", "$timeout", "$document", "PaperDoll", function ($scope, $timeout, $document, PaperDoll) {
    $scope.questions = PaperDoll.fragenliste;
    $scope.qidx = 0;

    var controller = this;

    PaperDoll.fragenliste.forEach(function (qu) {
        qu.selected = -1;
        qu.dresses = ["", "", ""];
    });

    this.restart = function () {
        PaperDoll.fragenliste.forEach(function (qu) {
            qu.selected = -1;
            qu.dresses = ["", "", ""];
        });
    };

    this.nextQuestion = function () {
        $scope.qidx = ($scope.qidx + 1) % 6;
    };

    this.previousQuestion = function () {
        var t = $scope.qidx - 1;
        $scope.qidx = ( t >= 0) ? t : 4;
    };

    this.selected = function (quest, idx) {
        return (quest.selected === idx) ? "selected" : "";
    };

    this.isCurrent = function (idx) {
        return $scope.qidx === idx;
    };

    this.selectAnswer = function (question, answer) {
        question.selected = answer;
        question.selectedCat = question.antwort[answer].cat;
        question.dresses = ["", "", ""]; // clear dress animation
        question.dresses[answer] = "animate"; // animate new dress

        this.nextQuestion();
    };

    this.scrollTo = function (elementId) {
        $timeout(function () {
            document.getElementById(elementId).scrollIntoView();
        });
    };

    this.showAnswer = function (question, aIdx) {
        question.antwort[aIdx].open = !question.antwort[aIdx].open;
        this.scrollTo('qb' + question.index + '' + aIdx);
    };

    this.isAnswerVisible = function (question, aIdx) {
        return question.antwort[aIdx].open;
    };

    this.isDressed = function (qIdx, aIdx) {
        return $scope.questions[qIdx].dresses[aIdx];
    };

    this.winner = function () {
        var stats = [0, 0, 0];
        PaperDoll.fragenliste.forEach(function (qu) {
            stats[qu.selectedCat]++;
        });

        var winner = 0;
        for (var i = 1; i < stats.length; i++) {
            if (stats[i] > stats[winner]) {
                winner = i;
            }
        }

        return winner;
    };
}]);

