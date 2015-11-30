'use strict';

var app = angular.module('paperdoll');

app.factory('PaperDoll', ['$http', function PaperDollService($http) {

    return {

        /* Hier ist die Liste der Fragen und Antworten. Hier dürft ihr alle Fragen und antworten reinschreiben.
         * Es sind nur 5 Fragen vorgesehen, jede Frage hat 3 Antworten.
         */
        fragenliste: [
            {
                index: 0,
                frage: "Welche Frage würdest Du wohl stellen?",
                antwort: [
                    {cat: 0, open: false, headline: "Antwort A", text: "Soll ich dir eine reinhauen?"},
                    {cat: 1, open: false, headline: "Antwort B", text: "Warum hast Du keine Klamotten an?"},
                    {cat: 2, open: false, headline: "Antwort C", text: "Wie schmeckt eigentlich Apfel mit Senf?"},
                ]
            },
            {
                index: 1,
                frage: "Was ist die Quadratwurzel aus 45673882736?",
                antwort: [
                    {cat: 0, open: false, headline: "Antwort A", text: "2"},
                    {cat: 1, open: false, headline: "Antwort B", text: "29"},
                    {cat: 2, open: false, headline: "Antwort C", text: "Ich kann kein Mathe."},
                ]
            },
            {
                index: 2,
                frage: "Wieviele Seiten hat Tolstois dickstes Buch?",
                antwort: [
                    {cat: 0, open: false, headline: "Antwort A", text: "2"},
                    {cat: 1, open: false, headline: "Antwort B", text: "29"},
                    {cat: 2, open: false, headline: "Antwort C", text: "Für Mathe hab ich mich noch nie interessiert."},
                ]
            },
            {
                index: 3,
                frage: "Welches Tier hat Schwarz-Weisse Streifen?",
                antwort: [
                    {cat: 0, open: false, headline: "Antwort A", text: "Der Elefant."},
                    {cat: 1, open: false, headline: "Antwort B", text: "29"},
                    {
                        cat: 2,
                        open: false,
                        headline: "Antwort C",
                        text: "Mein Mathelehrer konnte mich noch nie besonders gut leiden!"
                    }
                ]
            },
            {
                index: 4,
                frage: "Wenn Du auf eine einsame Insel auswandern würdest, was wäre das erste Teil in deinem Koffer?",
                antwort: [
                    {cat: 0, open: false, headline: "Antwort A", text: "Kondome"},
                    {cat: 1, open: false, headline: "Antwort B", text: "Die Tageszeitung von gestern."},
                    {
                        cat: 2,
                        open: false,
                        headline: "Antwort C",
                        text: "Ein Mathebuch, irgendwann muss ich das ja mal lernen."
                    }
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
        }

    }
        ;

}]);