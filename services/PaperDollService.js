'use strict';

var app = angular.module('paperdoll');

app.factory('PaperDoll', ['$http', '$window', function PaperDollService($http, $window) {

    return {

        /* Hier ist die Liste der Fragen und Antworten. Hier dürft ihr alle Fragen und antworten reinschreiben.
         * Es sind nur 5 Fragen vorgesehen, jede Frage hat 3 Antworten.
         */
        fragenliste: [
            {
                index: 0,
                frage: "In welcher Geräuschkulisse fühlst du dich am wohlsten?",
                antwort: [
                    {cat: 'L', open: false, headline: "Antwort A", text: "Soll ich dir eine reinhauen?"},
                    {cat: 'S', open: false, headline: "Antwort B", text: "Warum hast Du keine Klamotten an?"},
                ]
            },
            {
                index: 1,
                frage: "Gibt es Geschwindigkeit bei dir auch ohne -rausch?",
                antwort: [
                    {cat: 'L', open: false, headline: "Antwort A", text: "2"},
                    {cat: 'S', open: false, headline: "Antwort B", text: "29"},
                ]
            },
            {
                index: 2,
                frage: "Was gehen dich deine Nachbarn an?",
                antwort: [
                    {cat: 'L', open: false, headline: "Antwort A", text: "2"},
                    {cat: 'S', open: false, headline: "Antwort B", text: "29"},
                ]
            },
            {
                index: 3,
                frage: "Wie oft brauchst du Kultur?",
                antwort: [
                    {cat: 'L', open: false, headline: "Antwort A", text: "Der Elefant."},
                    {cat: 'S', open: false, headline: "Antwort B", text: "29"},
                ]
            },
            {
                index: 4,
                frage: "Wann kaufst du ein?",
                antwort: [
                    {cat: 'L', open: false, headline: "Antwort A", text: "Kondome"},
                    {cat: 'S', open: false, headline: "Antwort B", text: "Die Tageszeitung von gestern."},
                ]
            }
        ], // ende fragenliste

        backgroundData: [
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
        ] // Ende Background Data
        ,
        loadBackgroundPage: function (_page) {
            $http({method: "get", url: _page.dataUrl}).success(function ($result) {
                _page.pagedata = $result;
            });
        },
        loadBackgroundQuestion: function( _idx, onSuccess ) {
            var _question = this.fragenliste[_idx];
            var _url = 'background/questions/' + _idx + '/' + _question.selectedCat + '.html';
            $http({method: "get", url: _url}).success(function ($result) {
                _question.background = $result;
                onSuccess();
            });
        }

    }
        ;

}]);