/**
 * Created by tamara on 01.11.2015.
 */


(function () {
    var app = angular.module("paperdoll", ['ngAnimate','ngSanitize']);


    app.controller("StartController", ["$scope", function($scope) {
        this.pageStatus = 0;

        this.showAbout = false;

        this.inStart = function() {
            return (this.pageStatus === 0);
        };

        this.start = function () {
          window.location.reload();
        };
        this.inGame = function() {
            return (this.pageStatus === 2);
        };

        this.startGame = function() {
            this.pageStatus = 2;
        };

        this.openAbout = function() {
            this.showAbout = !this.showAbout;
        };

        this.startBackground = function() {
          this.pageStatus = 3;
        };

        this.inBackground = function() {
            return (this.pageStatus === 3);
        };
    }]);

    app.controller("PuppetController", ["$scope","$timeout", "$document", function ($scope, $timeout, $document) {
        $scope.questions = fragenliste;
        $scope.qidx = 0;

        var $this = this;

        fragenliste.forEach(function(qu) { qu.selected = -1; qu.dresses = ["","",""]; });

        this.restart = function() {
            fragenliste.forEach(function(qu) { qu.selected = -1; qu.dresses = ["","",""]; });
        };

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

        this.scrollTo = function (elementId) {
            $timeout(function() {
                document.getElementById(elementId).scrollIntoView();
            });
        };

        this.showAnswer = function(question, aIdx) {
            question.antwort[aIdx].open = !question.antwort[aIdx].open;
            this.scrollTo('qb'+question.index+''+aIdx);
        };

        this.isAnswerVisible = function(question, aIdx) {
            return question.antwort[aIdx].open;
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


    app.controller("BackgroundController", ["$scope", "$http", function($scope, $http) {
        var controller = this;

        this.current = 0;

        this.goto = function(_page) {
            this.current = _page.index;
        };
        this.hasPrevious = function() {
            return this.current >0;
        } ;
        this.hasNext = function() {
            return (this.current < this.pages().length-1);
        } ;
        this.next = function () {
            if( this.current < backgroundData.length-1 ) ++this.current;
        };
        this.previous = function() {
            if( this.current > 0) --this.current;
        };
        this.isCurrent = function(_page) {
            return (_page.index == this.current);
        };
        this.pages = function() {
            return backgroundData;
        };
        this.load = function(_page) {
            $http({method: "get", url: _page.dataUrl}).success(function($result) {
               _page.pagedata = $result;
            });
        };

        backgroundData.forEach(function(_page) {
            controller.load(_page);
        });
    }] );

    /* Hier ist die Liste der Fragen und Antworten. Hier dürft ihr alle Fragen und antworten reinschreiben.
     * Es sind nur 5 Fragen vorgesehen, jede Frage hat 3 Antworten.
     */


    var fragenliste = [
        {
            index : 0,
            frage : "Welche Frage würdest Du wohl stellen?",
            antwort : [
                {cat: 0, open : false , headline: "Antwort A", text : "Soll ich dir eine reinhauen?"},
                {cat: 1, open : false , headline: "Antwort B"  , text : "Warum hast Du keine Klamotten an?"},
                {cat: 2, open : false , headline: "Antwort C"  , text : "Wie schmeckt eigentlich Apfel mit Senf?"},
            ]
        },
        {
            index : 1,
            frage : "Was ist die Quadratwurzel aus 45673882736?",
            antwort : [
                {cat: 0, open : false , headline: "Antwort A" , text: "2"},
                {cat: 1, open : false , headline: "Antwort B"  , text: "29"},
                {cat: 2, open : false , headline: "Antwort C"  , text: "Ich kann kein Mathe."},
            ]
        },
        {
            index : 2,
            frage : "Wieviele Seiten hat Tolstois dickstes Buch?",
            antwort : [
                {cat: 0, open : false , headline: "Antwort A" , text: "2"},
                {cat: 1, open : false , headline: "Antwort B"  , text: "29"},
                {cat: 2, open : false , headline: "Antwort C"  , text: "Für Mathe hab ich mich noch nie interessiert."},
            ]
        },
        {
            index : 3,
            frage : "Welches Tier hat Schwarz-Weisse Streifen?",
            antwort : [
                {cat: 0, open : false , headline: "Antwort A" , text: "Der Elefant."},
                {cat: 1, open : false , headline: "Antwort B" , text: "29"},
                {cat: 2, open : false , headline: "Antwort C" , text: "Mein Mathelehrer konnte mich noch nie besonders gut leiden!"},
            ]
        },
        {
            index : 4,
            frage : "Wenn Du auf eine einsame Insel auswandern würdest, was wäre das erste Teil in deinem Koffer?",
            antwort : [
                {cat: 0, open : false , headline: "Antwort A" , text: "Kondome"},
                {cat: 1, open : false , headline: "Antwort B" , text: "Die Tageszeitung von gestern."},
                {cat: 2, open : false , headline: "Antwort C" , text: "Ein Mathebuch, irgendwann muss ich das ja mal lernen."},
            ]
        },
    ]; // ende fragenliste

    var backgroundData = [
        {
            index: 0,
            title: "Die Überschrift Hintergrund 0",
            dataUrl: "background/page0.html"
        },
        {
            index: 1,
            title: "Die Überschrift Hintergrund 1",
            dataUrl: "background/page1.html"
        },
        {
            index: 2,
            title: "Die Überschrift Hintergrund 2",
            dataUrl: "background/page2.html"
        },
        {
            index: 3,
            title: "Die Überschrift Hintergrund 3",
            dataUrl: "background/page3.html"
        },
        {
            index: 4,
            title: "Die Überschrift Hintergrund 4",
            dataUrl: "background/page4.html"
        },
        {
            index: 5,
            title: "Die Überschrift Hintergrund 5",
            dataUrl: "background/page5.html"
        },
        {
            index: 6,
            title: "Die Überschrift Hintergrund 6",
            dataUrl: "background/page6.html"
        }
    ];

})();