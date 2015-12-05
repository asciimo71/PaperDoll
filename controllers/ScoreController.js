'use strict';

var app = angular.module("paperdoll");

app.controller("ScoreController",
    ["$scope", "$timeout", "$document", "$routeParams", "$location", "$window", "PaperDoll", "Model",
        function ($scope, $timeout, $document, $routeParams, $location, $window, PaperDoll, Model) {
            $scope.questions = PaperDoll.fragenliste;
            $scope.qidx = 0;

            if( $routeParams.score ) {
                Model.loadFromString($routeParams.score);
            }

            $scope.image = Model.getImageFor(Model.sequence);

            console.log("$scope.qidx is " + $scope.qidx + " check " + ($scope.qidx == 4));

            var stats = [0, 0];
            Model.sequence.forEach(function (_T) {
                stats[((_T == 'L') ? 0 : 1)]++;
            });

            var diff = stats[0] - stats[1];
            var abst = Math.abs(diff);

            $scope.stadt = false;
            $scope.land = false;
            $scope.unentschieden = false;

            if (abst < 2) {
                $scope.unentschieden = true;
            }
            else if (diff > 0) {
                $scope.land = true;
            }
            else if (diff < 0) {
                $scope.stadt = true;
            }


            this.restart = function () {
                PaperDoll.fragenliste.forEach(function (qu) {
                    qu.selected = -1;
                    qu.dresses = ["", "", ""];
                });
                $location.path("/");
                $window.location.href = $window.location.href;
            };

        }]);
