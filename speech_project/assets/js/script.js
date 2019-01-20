// created an array that contains each animal for the single vowel carousel (9 total)
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

// created an array that contains each animal for the voiced consonant carousel (11 total)
var voicedConsonants = [
  "bat",
  "monkey",
  "flamingo",
  "dolphin",
  "zebra",
  "wasp",
  "llama",
  "jack russell",
  "raccoon",
  "goat",
  "york e"
];


// created an array that contains each animal for the unvoiced consonant carousel (8 total)
var unvoicedConsonants = [
  "peacock",
  "frog",
  "sloth",
  "tiger",
  "snake",
  "shark",
  "cheetah",
  "kangaroo"
];
// ------------------------------------------------------------------------------------------------------>

// created a jQuery function to load functions when the document is ready
$(document).ready(function() {

    // initialize the collapsible header (materialize)
    $('.collapsible').collapsible();

    // initialize the carousel (materialize)
    $('.carousel').carousel();

    // intialize the tabs (materialize)
    $('.tabs').tabs();

    // ------------------------------------------------------------------------------------------------------>

    // created functions for the single vowel carousel buttons

    $('#iguanaButton').on("click", function() {
        // iguana speech
        var msg = new SpeechSynthesisUtterance(singleVowels[0]);
        window.speechSynthesis.speak(msg);

        // iguana toast
        M.toast({ html: 'Say, Iguana!' });

        // iguana sound
        setTimeout(function() {
            var player = new Tone.Player("assets/mp3/iguana.mp3").toMaster();
            player.autostart = true;
        }, 1000); 
    });

    $('#catButton').on("click", function() {
        // cat speech
        var msg = new SpeechSynthesisUtterance(singleVowels[1]);
        window.speechSynthesis.speak(msg);

        // iguana toast
        M.toast({ html: 'Say, Cat!' });

        // cat sound
        setTimeout(function () {
            var player = new Tone.Player("assets/mp3/cat.mp3").toMaster();
            player.autostart = true;
        }, 1000);
    });

    $('#eagleButton').on("click", function() {
        // eagle speech
        var msg = new SpeechSynthesisUtterance(singleVowels[2]);
        window.speechSynthesis.speak(msg);

        // eagle toast
        M.toast({ html: 'Say, Eagle!' });

        // eagle sound
        setTimeout(function () {
            var player = new Tone.Player("assets/mp3/eagle.mp3").toMaster();
            player.autostart = true;
        }, 1000);
    });

    $('#hamsterButton').on("click", function() {
        // hamster speech
        var msg = new SpeechSynthesisUtterance(singleVowels[3]);
        window.speechSynthesis.speak(msg);

        // hamster toast
        M.toast({ html: 'Say, Hamster!' });

        // hamster sound
        setTimeout(function () {
            var player = new Tone.Player("assets/mp3/hamster.mp3").toMaster();
            player.autostart = true;
        }, 1000);
    });

    $('#umbrellabirdButton').on("click", function() {
        // umbrella bird speech
        var msg = new SpeechSynthesisUtterance(singleVowels[4]);
        window.speechSynthesis.speak(msg);

        // umbrella bird toast
        M.toast({ html: 'Say, Umbrella Bird!' });

        // umbrella bird sound
        setTimeout(function () {
            var player = new Tone.Player("assets/mp3/umbrellabird.mp3").toMaster();
            player.autostart = true;
        }, 1000);
    });

    $('#shepherdButton').on("click", function() {
        // shepherd speech
        var msg = new SpeechSynthesisUtterance(singleVowels[5]);
        window.speechSynthesis.speak(msg);

        // shepherd toast
        M.toast({ html: 'Say, Shepherd!' });

        // shepherd sound
        setTimeout(function () {
            var player = new Tone.Player("assets/mp3/shepherd.mp3").toMaster();
            player.autostart = true;
        }, 1000);
    });

    $('#ostrichButton').on("click", function() {
        // ostrich speech
        var msg = new SpeechSynthesisUtterance(singleVowels[6]);
        window.speechSynthesis.speak(msg);

        // ostrich toast
        M.toast({ html: 'Say, Ostrich!' });

        // ostrich sound
        setTimeout(function () {
            var player = new Tone.Player("assets/mp3/ostrich.mp3").toMaster();
            player.autostart = true;
        }, 1000);
    });

    $('#poodleButton').on("click", function() {
        // poodle speech
        var msg = new SpeechSynthesisUtterance(singleVowels[7]);
        window.speechSynthesis.speak(msg);

        // poodle toast
        M.toast({ html: 'Say, Poodle!' });

        // poodle sound
        setTimeout(function () {
            var player = new Tone.Player("assets/mp3/poodle.mp3").toMaster();
            player.autostart = true;
        }, 1000);
    });

    $('#gopherButton').on("click", function() {
        // gopher speech
        var msg = new SpeechSynthesisUtterance(singleVowels[8]);
        window.speechSynthesis.speak(msg);

        // gopher toast
        M.toast({ html: 'Say, Gopher!' });

        // gopher sound
        setTimeout(function () {
            var player = new Tone.Player("assets/mp3/gopher.mp3").toMaster();
            player.autostart = true;
        }, 1000);
    });

    // ------------------------------------------------------------------------------------------------------>

    // created functions for the voiced consonant carousel buttons
    
    $("#batButton").on("click", function() {
      // bat speech
        var msg = new SpeechSynthesisUtterance(voicedConsonants[0]);
      window.speechSynthesis.speak(msg);
      // bat sound
      setTimeout(function() {
        var player = new Tone.Player("").toMaster();
        player.autostart = true;
      }, 1000);
    });

    $("#monkeyButton").on("click", function() {
      // monkey speech
        var msg = new SpeechSynthesisUtterance(voicedConsonants[1]);
      window.speechSynthesis.speak(msg);
      // monkey sound
      setTimeout(function() {
        var player = new Tone.Player("").toMaster();
        player.autostart = true;
      }, 1000);
    });

    $("#flamingoButton").on("click", function() {
      // flamingo speech
        var msg = new SpeechSynthesisUtterance(voicedConsonants[2]);
      window.speechSynthesis.speak(msg);
      // flamingo sound
      setTimeout(function() {
        var player = new Tone.Player("").toMaster();
        player.autostart = true;
      }, 1000);
    });

    $("#dolphinButton").on("click", function() {
      // dolphin speech
        var msg = new SpeechSynthesisUtterance(voicedConsonants[3]);
      window.speechSynthesis.speak(msg);
      // dolphin sound
      setTimeout(function() {
        var player = new Tone.Player("").toMaster();
        player.autostart = true;
      }, 1000);
    });

    $("#zebraButton").on("click", function() {
      // zebra speech
        var msg = new SpeechSynthesisUtterance(voicedConsonants[4]);
      window.speechSynthesis.speak(msg);
      // zebra sound
      setTimeout(function() {
        var player = new Tone.Player("").toMaster();
        player.autostart = true;
      }, 1000);
    });

    $("#waspButton").on("click", function() {
      // wasp speech
        var msg = new SpeechSynthesisUtterance(voicedConsonants[5]);
      window.speechSynthesis.speak(msg);
      // wasp sound
      setTimeout(function() {
        var player = new Tone.Player("").toMaster();
        player.autostart = true;
      }, 1000);
    });

    $("#llamaButton").on("click", function() {
      // llama speech
        var msg = new SpeechSynthesisUtterance(voicedConsonants[6]);
      window.speechSynthesis.speak(msg);
      // llama sound
      setTimeout(function() {
        var player = new Tone.Player("").toMaster();
        player.autostart = true;
      }, 1000);
    });

    $("#jackrussellButton").on("click", function() {
      // jack russell speech
        var msg = new SpeechSynthesisUtterance(voicedConsonants[7]);
      window.speechSynthesis.speak(msg);
      // jack russell sound
      setTimeout(function() {
        var player = new Tone.Player("").toMaster();
        player.autostart = true;
      }, 1000);
    });

    $("#raccoonButton").on("click", function() {
      // raccoon speech
        var msg = new SpeechSynthesisUtterance(voicedConsonants[8]);
      window.speechSynthesis.speak(msg);
      // raccoon sound
      setTimeout(function() {
        var player = new Tone.Player("").toMaster();
        player.autostart = true;
      }, 1000);
    });

    $("#goatButton").on("click", function() {
      // goat speech
        var msg = new SpeechSynthesisUtterance(voicedConsonants[9]);
      window.speechSynthesis.speak(msg);
      // goat sound
      setTimeout(function() {
        var player = new Tone.Player("").toMaster();
        player.autostart = true;
      }, 1000);
    });

    $("#yorkieButton").on("click", function() {
      // yorkie speech
        var msg = new SpeechSynthesisUtterance(voicedConsonants[10]);
      window.speechSynthesis.speak(msg);
      // yorkie sound
      setTimeout(function() {
        var player = new Tone.Player("").toMaster();
        player.autostart = true;
      }, 1000);
    });

    // ------------------------------------------------------------------------------------------------------>
    
    // created functions for the unvoiced consonant carousel buttons

    $('#peacockButton').on("click", function () {
        // peacock speech
        var msg = new SpeechSynthesisUtterance(unvoicedConsonants[0]);
        window.speechSynthesis.speak(msg);
        // peacock sound
        setTimeout(function () {
            var player = new Tone.Player("").toMaster();
            player.autostart = true;
        }, 1000);
    });

    $('#frogButton').on("click", function () {
        // frog speech
        var msg = new SpeechSynthesisUtterance(unvoicedConsonants[1]);
        window.speechSynthesis.speak(msg);
        // frog sound
        setTimeout(function () {
            var player = new Tone.Player("").toMaster();
            player.autostart = true;
        }, 1000);
    });

    $('#slothButton').on("click", function () {
        // sloth speech
        var msg = new SpeechSynthesisUtterance(unvoicedConsonants[2]);
        window.speechSynthesis.speak(msg);
        // sloth sound
        setTimeout(function () {
            var player = new Tone.Player("").toMaster();
            player.autostart = true;
        }, 1000);
    });

    $('#tigerButton').on("click", function () {
        // tiger speech
        var msg = new SpeechSynthesisUtterance(unvoicedConsonants[3]);
        window.speechSynthesis.speak(msg);
        // tiger sound
        setTimeout(function () {
            var player = new Tone.Player("").toMaster();
            player.autostart = true;
        }, 1000);
    });

    $('#snakeButton').on("click", function () {
        // snake speech
        var msg = new SpeechSynthesisUtterance(unvoicedConsonants[4]);
        window.speechSynthesis.speak(msg);
        // snake sound
        setTimeout(function () {
            var player = new Tone.Player("").toMaster();
            player.autostart = true;
        }, 1000);
    });

    $('#sharkButton').on("click", function () {
        // shark speech
        var msg = new SpeechSynthesisUtterance(unvoicedConsonants[5]);
        window.speechSynthesis.speak(msg);
        // shark sound
        setTimeout(function () {
            var player = new Tone.Player("").toMaster();
            player.autostart = true;
        }, 1000);
    });

    $('#cheetahButton').on("click", function () {
        // cheetah speech
        var msg = new SpeechSynthesisUtterance(unvoicedConsonants[6]);
        window.speechSynthesis.speak(msg);
        // cheetah sound
        setTimeout(function () {
            var player = new Tone.Player("").toMaster();
            player.autostart = true;
        }, 1000);
    });

    $('#kangarooButton').on("click", function () {
        // kangaroo speech
        var msg = new SpeechSynthesisUtterance(unvoicedConsonants[7]);
        window.speechSynthesis.speak(msg);
        // kangaroo sound
        setTimeout(function () {
            var player = new Tone.Player("").toMaster();
            player.autostart = true;
        }, 1000);
    });


});