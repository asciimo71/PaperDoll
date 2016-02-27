'use strict';

var app = angular.module('paperdoll');

app.factory('Model', ['$http', function ModelService($http) {

    return {
        sequence : ["", "", "", "", ""],

        getCodeFor : function(seq) {
            var result = "";

            var append;
            for( var i=0; i<seq.length; i++) {
                if(!seq[i] || seq[i] == "") {
                    append = "";
                }
                else {
                    append = seq[i];
                }

                if(i == 0) {
                    result = append;
                }
                else if(append.length > 0 ) {
                    result = result + "_" + append;
                }
            }

            return result;
        },

        getImageFor : function(seq) {
            var result = this.getCodeFor(seq);

            if( result.length > 0 ) {
                result = "res/" + result + ".jpg";
            }

            return result;
        },

        loadFromString : function(seqString) {
            var arr = seqString.split('_');
            this.sequence = arr;
        },

        reset : function() {
            this.sequence = ["", "", "", "", ""];
        }
    };

}]);