/**
 * Created by tamara on 01.11.2015.
 */


(function () {
    var app = angular.module("paperdoll", ['ngAnimate']);


    app.controller("StartController", ["$scope", function($scope) {
        this.pageStatus = 0;

        this.showAbout = false;

        this.inGame = function() {
            return (this.pageStatus === 2);
        };

        this.startGame = function() {
            this.pageStatus = 2;
        };

        this.openAbout = function() {
            this.showAbout = !this.showAbout;
        };
    }]);

    app.controller("PuppetController", ["$scope", function ($scope) {
        $scope.questions = fragenliste;
        $scope.qidx = 0;

        var $this = this;

        fragenliste.forEach(function(qu) { qu.selected = -1; qu.dresses = ["","",""]; });

        this.nextQuestion = function() {
            $scope.qidx = ($scope.qidx+1) % 6;
        };

        this.previousQuestion = function() {
            var t = $scope.qidx-1;
            $scope.qidx = ( t >= 0) ? t : 4;
        };

        this.selected = function(quest, idx) {
            return (quest.selected === idx) ? "selected" : "";
        };

        this.isCurrent = function(idx) {
            return $scope.qidx === idx;
        };

        this.selectAnswer = function(question, answer) {
            question.selected = answer;
            question.selectedCat = question.antwort[answer].cat;
            question.dresses = ["", "", ""]; // clear dress animation
            question.dresses[answer] = "animate"; // animate new dress

            this.nextQuestion();
        };

        this.isDressed = function(qIdx, aIdx) {
            return $scope.questions[qIdx].dresses[aIdx];
        };

        this.winner = function() {
            var stats = [0, 0, 0];
            fragenliste.forEach(function(qu) {
                stats[qu.selectedCat]++;
            });

            var winner = 0;
            for(var i=1; i<stats.length; i++) {
                if(stats[i] > stats[winner]) {
                    winner = i;
                }
            }

            return winner;
        };
    }]);

    /* Hier ist die Liste der Fragen und Antworten. Hier dürft ihr alle Fragen und antworten reinschreiben.
     * Es sind nur 5 Fragen vorgesehen, jede Frage hat 3 Antworten.
     */


    var fragenliste = [
        {
            index : 0,
            frage : "Welche Frage würdest Du wohl stellen?",
            antwort : [
                {cat: 0 , text : "Soll ich dir eine reinhauen?"},
                {cat: 1 , text : "Warum hast Du keine Klamotten an?"},
                {cat: 2 , text : "Wie schmeckt eigentlich Apfel mit Senf?"},
            ]
        },
        {
            index : 1,
            frage : "Was ist die Quadratwurzel aus 45673882736?",
            antwort : [
                {cat: 0 , text: "2"},
                {cat: 1 , text: "29"},
                {cat: 2 , text: "Ich kann kein Mathe."},
            ]
        },
        {
            index : 2,
            frage : "Wieviele Seiten hat Tolstois dickstes Buch?",
            antwort : [
                {cat: 0 , text: "2"},
                {cat: 1 , text: "29"},
                {cat: 2 , text: "Für Mathe hab ich mich noch nie interessiert."},
            ]
        },
        {
            index : 3,
            frage : "Welches Tier hat Schwarz-Weisse Streifen?",
            antwort : [
                {cat: 0 , text: "Der Elefant."},
                {cat: 1 , text: "29"},
                {cat: 2 , text: "Mein Mathelehrer konnte mich noch nie besonders gut leiden!"},
            ]
        },
        {
            index : 4,
            frage : "Wenn Du auf eine einsame Insel auswandern würdest, was wäre das erste Teil in deinem Koffer?",
            antwort : [
                {cat: 0 , text: "Kondome"},
                {cat: 1 , text: "Die Tageszeitung von gestern."},
                {cat: 2 , text: "Ein Mathebuch, irgendwann muss ich das ja mal lernen."},
            ]
        },
    ]; // ende fragenliste
})();