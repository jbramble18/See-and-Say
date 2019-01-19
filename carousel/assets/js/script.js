// created a variable for each animal sound
var singleVowels = [
  "iguana",
  "cat",
  "eagle",
  "hamster",
  "umbrellabird",
  "sheperd",
  "ostrich",
  "poodle",
  "gopher"
];



// created a jQuery function to load functions when the document is ready
$(document).ready(function() {
    // initialized the carousel
    $('.carousel').carousel();


    // created functions for each carousel button
    $('#iguanaButton').on("click", function() {
        // iguana speech
        var msg = new SpeechSynthesisUtterance(singleVowels[0]);
        window.speechSynthesis.speak(msg);

        // iguana sound
        setTimeout(function() {
            var player = new Tone.Player("assets/mp3/iguana.mp3").toMaster();
            player.autostart = true;
        }, 1000); 
    });

    $('#catButton').on("click", function() {
    });

    $('#eagleButton').on("click", function() {
    });

    $('#hamsterButton').on("click", function() {
    });

    $('#umbrellabirdButton').on("click", function() {
    });

    $('#shepherdButton').on("click", function() {
    });

    $('#ostrichButton').on("click", function() {
    });

    $('#poodleButton').on("click", function() {
    });

    $('#gopherButton').on("click", function() {
    });


});