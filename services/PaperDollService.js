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
                    {cat: 'L', open: false, headline: "Antwort A", text: "Du liebst den Duft von frisch gemähtem Heu und deinen Blick in die Weite schweifen zu lassen. Am schönsten ist es im Garten zu arbeiten, Unkraut zu jäten und den Vögeln bei  ihren Konzerten im Frühjahr zu lauschen…"},
                    {cat: 'S', open: false, headline: "Antwort B", text: "Du liebst es in 20 Minuten beim Flughafen zu sein und erträgst deshalb auch den Fluglärm, der mal mehr, mal weniger, je nachdem wie der Wind steht, herüberweht. Wenn doch bloß nicht immer das Kerosin runterregnen würde....?"},
                ]
            },
            {
                index: 1,
                frage: "Was ist dir wichtiger – der Geschwindigkeitsrausch oder von A nach B zu kommen?",
                antwort: [
                    {cat: 'L', open: false, headline: "Antwort A", text: "100 km/h – für andere bedeutet Auto fahren Streß. Doch für dich ist es das Gefühl, wie ein Cowboy durch unendlichen Prärien zu reiten und dir den Wind durch die Haare wehen zu lassen. Du bleibst immer gelassen, besonders wenn eine Landmaschine vor dir herumschleicht."},
                    {cat: 'S', open: false, headline: "Antwort B", text: "Du fährst gerne mit der S-Bahn in der Stadt. Dort weht zwar kein frischer Wind, aber man kann die Stadt immer wieder aus neuen Perpektiven entdecken und vielen interessanten Menschen begegnen."},
                ]
            },
            {
                index: 2,
                frage: "Was gehen dich deine Nachbarn an?",
                antwort: [
                    {cat: 'L', open: false, headline: "Antwort A", text: "Deine Nachbarn gehen dich eine Menge an – das ist für dich ganz selbstverständlich. Wieso auch nicht? Du kennst sie recht gut (es sind nicht so viele), wobei dir Marie und Manni von gegenüber am vertrautesten sind: Ihr habt euch schon oft geholfen und die eine oder andere Flasche Wein miteinander geteilt. Und überlegt gerade, euch gemeinsam einen von diesen schicken Edelstahl-XXL-Draußengrills anzuschaffen (damit ihr eure Wochenendfeten demnächst auch im Winter veranstalten könnt)."},
                    {cat: 'S', open: false, headline: "Antwort B", text: "Nachbarn hat man – das ist nun mal so und da gibt es auch nichts zu bedauern (von Einzelfällen abgesehen). Kontakt suchst du zu ihnen allerdings nur sporadisch. Zum Beispiel zu Nachbarin Schulze, wenn die mal wieder ihr niedliches Wauwi in die Rabatten kacken lässt.	"},
                ]
            },
            {
                index: 3,
                frage: "Wie oft brauchst du Kultur?",
                antwort: [
                    {cat: 'L', open: false, headline: "Antwort A", text: "Du bist lieber mit der Axt im Wald unterwegs als mit der Lupe im Museum. Und du hörst lieber dem Zirpen der Grillen zu – als Leuten, die glauben, dass ihre Gedanken andere reich machen. Oper, Theater, Kino, Ausstellungen: Du wehrst dich nicht dagegen, weißt schon auch, da es da mal ganz schön sein kann – brauchst das alles aber nur wohldosiert."},
                    {cat: 'S', open: false, headline: "Antwort B", text: "Kultur ist ein Menschenrecht. Klar. Aber Kultur ist auch ein Motor – dein Motor! Für manche mag Kultur schon damit beginnen, sich auf einen Berg zu stellen und in aller Stille den Blick schweifen zu lassen (oder: Arte einzuschalten) – du brauchst PS. Ausstellungen verkannter Künstler, Programmkinos, die auch die ausgefallensten Dokus aus Südamerika zeigen, Soirees und Vernissagen, Podiumsdiskussionen über, sagen wir mal, das Lyrische im Kontext des Prosaischen: Je mehr auf diesem Feld um dich herum los ist, umso wohler ist es dir."},
                ]
            },
            {
                index: 4,
                frage: "Wie organisierst du deine Einkäufe?",
                antwort: [
                    {cat: 'L', open: false, headline: "Antwort A", text: "Für dich sind Einkaufszettel ein Muss. Du planst gerne, rechnest – und konsultierst dabei auch gerne die Prospekte der Händler in deiner Gegend. Dass dafür nicht alle Verständnis haben? Nun. Du hast ja ein Auto, das dich einmal in der Woche zum Großeinkauf überall hin bringt. Zur Not auch über sieben Berge."},
                    {cat: 'S', open: false, headline: "Antwort B", text: "Deine Einkäufe erledigst du am liebsten abends auf dem Heimweg, und zwar zu Fuß oder mit dem Fahrrad. Jedes Mal mit dem Auto losziehen zu müssen, bloß weil du einen Liter Milch brauchst, das wäre für dich ein ökologisches Desaster. Generell: Für andere bedeutet einzukaufen Stress – du blühst dann erst richtig auf. Downtown zu ziehen, das bedeutet für dich ein Hochgefühl. Wenn du auf die Einkaufsmeile einbiegst, ist es für dich, als würde ein warmer Wind über deine Seele streichen. Dieses ewige Rauschen der Wünsche und des Geldes, dieses leichte Fieber in den Augen der anderen, diese feine Nervosität... Wunderbar."},
                ]
            }
        ], // ende fragenliste

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