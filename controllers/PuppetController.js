'use strict';

var app = angular.module("paperdoll");

app.controller("PuppetController",
    ["$scope", "$timeout", "$document", "$routeParams", "$location", "$window", "PaperDoll", "Model",
        function ($scope, $timeout, $document, $routeParams, $location, $window, PaperDoll, Model) {
            $scope.questions = PaperDoll.fragenliste;
            $scope.qidx = 0;

            $scope.image = Model.getImageFor(Model.sequence);
            $scope.background = "";

            if( $routeParams.questionId ) {
                console.log("QuestionId is " + $routeParams.questionId)
                $scope.qidx = $routeParams.questionId;
            }

            if( $routeParams.place ) {
                console.log("place is " + $routeParams.place);
                $scope.place = $routeParams.place;
            }

            console.log("$scope.qidx is " + $scope.qidx + " check " + ($scope.qidx == 4));

            if( $scope.place == "background" ) {
                $scope.background = $scope.questions[$scope.qidx].background;
            }

            if( $scope.place == "image" ) {
                $scope.image = Model.getImageFor(Model.sequence);
            }

            if( $scope.place == "finals" ) {
                $scope.image = Model.getImageFor(Model.sequence);
            }

            if( $scope.place == "question" && $scope.qidx == 0 ) {
                PaperDoll.fragenliste.forEach(function (qu) {
                    qu.selected = -1;
                    qu.dresses = ["", "", ""];
                });
            }

            $scope.$on("$routeChangeSuccess", function($currentRoute, $previousRoute) {
                $window.scrollTo(0, 0);
            });
/*

            this.restart = function () {
                PaperDoll.fragenliste.forEach(function (qu) {
                    qu.selected = -1;
                    qu.dresses = ["", "", ""];
                });
                $location.path("/");
                $window.location.href = $window.location.href;
            };
*/

            this.nextQuestion = function () {
                $scope.qidx++;
                if( $scope.qidx == 5) {
                    $location.path("/score/" + Model.getCodeFor(Model.sequence));
                }
                else {
                    $location.path("/game/" + ($scope.qidx) + "/question");
                }
            };

            this.toImage = function() {
                $location.path("/game/" + $scope.qidx + "/image");
            };

            this.selected = function (quest, idx) {
                return (quest.selected === idx) ? "selected" : "";
            };

            this.isCurrent = function (idx) {
                return $scope.qidx == idx;
            };

            this.selectAnswer = function (question, answer) {
                question.selected = answer;
                question.selectedCat = question.antwort[answer].cat;
                //question.dresses = ["", "", ""]; // clear dress animation
                //question.dresses[answer] = "animate"; // animate new dress

                Model.sequence[question.index] = question.selectedCat;
                PaperDoll.loadBackgroundQuestion(question.index, function() {
                    $location.path("/game/" + question.index + "/background")
                });

            };

            this.scrollTo = function (elementId) {
                /*
                $timeout(function () {
                    document.getElementById(elementId).scrollIntoView();
                });
                */
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

        }]);

