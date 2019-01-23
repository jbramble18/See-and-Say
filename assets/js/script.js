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
$(document).ready(function () {

  // initialize the collapsible header (materialize)
  $('.collapsible').collapsible();

  // initialize the carousel (materialize)
  $('.carousel').carousel();

  // intialize the tabs (materialize)
  $('.tabs').tabs();

  // ------------------------------------------------------------------------------------------------------>

  // created functions for the single vowel carousel buttons

  $('#iguanaButton').on("click", function () {
    // iguana speech
    var msg = new SpeechSynthesisUtterance(singleVowels[0]);
    window.speechSynthesis.speak(msg);

    // iguana toast
    M.toast({
      html: 'Say, Iguana!'
    });

    // iguana sound
    setTimeout(function () {
      var player = new Tone.Player("assets/mp3/iguana.mp3").toMaster();
      player.autostart = true;
    }, 1000);

    var img = $('<img>')
    img.attr("src", "assets/images/-i-guana.png");
    img.addClass("visme");
     $(".visme").html(img).show();

  });



  $('#catButton').on("click", function () {
    // cat speech
    var msg = new SpeechSynthesisUtterance(singleVowels[1]);
    window.speechSynthesis.speak(msg);

    // iguana toast
    M.toast({
      html: 'Say, Cat!'
    });

    // cat sound
    setTimeout(function () {
      var player = new Tone.Player("assets/mp3/cat.mp3").toMaster();
      player.autostart = true;
    }, 1000);

    var img = $('<img>')
    img.attr("src", "assets/images/c-a-t.png");
    img.addClass("visme");
     $(".visme").html(img).show();
  });

  $('#eagleButton').on("click", function () {
    // eagle speech
    var msg = new SpeechSynthesisUtterance(singleVowels[2]);
    window.speechSynthesis.speak(msg);

    // eagle toast
    M.toast({
      html: 'Say, Eagle!'
    });

    // eagle sound
    setTimeout(function () {
      var player = new Tone.Player("assets/mp3/eagle.mp3").toMaster();
      player.autostart = true;
    }, 1000);

    var img = $('<img>')
    img.attr("src", "assets/images/-ea-gle.png");
    img.addClass("visme");
     $(".visme").html(img).show();
  });

  $('#hamsterButton').on("click", function () {
    // hamster speech
    var msg = new SpeechSynthesisUtterance(singleVowels[3]);
    window.speechSynthesis.speak(msg);

    // hamster toast
    M.toast({
      html: 'Say, Hamster!'
    });

    // hamster sound
    setTimeout(function () {
      var player = new Tone.Player("assets/mp3/hamster.mp3").toMaster();
      player.autostart = true;
    }, 1000);

    var img = $('<img>')
    img.attr("src", "assets/images/h-a-mster.png");
    img.addClass("visme");
     $(".visme").html(img).show();
  });

  $('#umbrellabirdButton').on("click", function () {
    // umbrella bird speech
    var msg = new SpeechSynthesisUtterance(singleVowels[4]);
    window.speechSynthesis.speak(msg);

    // umbrella bird toast
    M.toast({
      html: 'Say, Umbrella Bird!'
    });

    // umbrella bird sound
    setTimeout(function () {
      var player = new Tone.Player("assets/mp3/umbrellabird.mp3").toMaster();
      player.autostart = true;
    }, 1000);

    var img = $('<img>')
    img.attr("src", "assets/images/-u-mbrella bird.png");
    img.addClass("visme");
     $(".visme").html(img).show();
  });

  $('#shepherdButton').on("click", function () {
    // shepherd speech
    var msg = new SpeechSynthesisUtterance(singleVowels[5]);
    window.speechSynthesis.speak(msg);

    // shepherd toast
    M.toast({
      html: 'Say, Shepherd!'
    });

    // shepherd sound
    setTimeout(function () {
      var player = new Tone.Player("assets/mp3/shepherd.mp3").toMaster();
      player.autostart = true;
    }, 1000);

    var img = $('<img>')
    img.attr("src", "assets/images/sh-e-perd.png");
    img.addClass("visme");
     $(".visme").html(img).show();
  });

  $('#ostrichButton').on("click", function () {
    // ostrich speech
    var msg = new SpeechSynthesisUtterance(singleVowels[6]);
    window.speechSynthesis.speak(msg);

    // ostrich toast
    M.toast({
      html: 'Say, Ostrich!'
    });

    // ostrich sound
    setTimeout(function () {
      var player = new Tone.Player("assets/mp3/ostrich.mp3").toMaster();
      player.autostart = true;
    }, 1000);

    var img = $('<img>')
    img.attr("src", "assets/images/-o-strich.png");
    img.addClass("visme");
     $(".visme").html(img).show();
  });

  $('#poodleButton').on("click", function () {
    // poodle speech
    var msg = new SpeechSynthesisUtterance(singleVowels[7]);
    window.speechSynthesis.speak(msg);

    // poodle toast
    M.toast({
      html: 'Say, Poodle!'
    });

    // poodle sound
    setTimeout(function () {
      var player = new Tone.Player("assets/mp3/poodle.mp3").toMaster();
      player.autostart = true;
    }, 1000);

    var img = $('<img>')
    img.attr("src", "assets/images/p-oo-dle.png");
    img.addClass("visme");
     $(".visme").html(img).show();
  });

  $('#gopherButton').on("click", function () {
    // gopher speech
    var msg = new SpeechSynthesisUtterance(singleVowels[8]);
    window.speechSynthesis.speak(msg);

    // gopher toast
    M.toast({
      html: 'Say, Gopher!'
    });

    // gopher sound
    setTimeout(function () {
      var player = new Tone.Player("assets/mp3/gopher.mp3").toMaster();
      player.autostart = true;
    }, 1000);

    var img = $('<img>')
    img.attr("src", "assets/images/g-o-pher.png");
    img.addClass("visme");
     $(".visme").html(img).show();
  });

  // ------------------------------------------------------------------------------------------------------>

  // created functions for the voiced consonant carousel buttons

  $("#batButton").on("click", function () {
    // bat speech
    var msg = new SpeechSynthesisUtterance(voicedConsonants[0]);
    window.speechSynthesis.speak(msg);
    // bat sound
    setTimeout(function () {
      var player = new Tone.Player("assets/mp3/bat.mp3").toMaster();
      player.autostart = true;
    }, 1000);
    
    M.toast({
      html: 'Say, Bat!'
    });
    var img = $('<img>')
    img.attr("src", "assets/images/-b-at.png");
    img.addClass("visme");
     $(".visme").html(img).show();
  });

  $("#monkeyButton").on("click", function () {
    // monkey speech
    var msg = new SpeechSynthesisUtterance(voicedConsonants[1]);
    window.speechSynthesis.speak(msg);
    // monkey sound
    setTimeout(function () {
      var player = new Tone.Player("assets/mp3/monkey.mp3").toMaster();
      player.autostart = true;
    }, 1000);

    M.toast({
      html: 'Say, Monkey!'
    });

    var img = $('<img>')
    img.attr("src", "assets/images/-m-onkey.png");
    img.addClass("visme");
     $(".visme").html(img).show();
  });

  $("#flamingoButton").on("click", function () {
    // flamingo speech
    var msg = new SpeechSynthesisUtterance(voicedConsonants[2]);
    window.speechSynthesis.speak(msg);
    // flamingo sound
    setTimeout(function () {
      var player = new Tone.Player("assets/mp3/flamingo.mp3").toMaster();
      player.autostart = true;
    }, 1000);

    M.toast({
      html: 'Say, Flamingo!'
    });

    var img = $('<img>')
    img.attr("src", "assets/images/-f-lamingo.png");
    img.addClass("visme");
     $(".visme").html(img).show();
  });

  $("#dolphinButton").on("click", function () {
    // dolphin speech
    var msg = new SpeechSynthesisUtterance(voicedConsonants[3]);
    window.speechSynthesis.speak(msg);
    // dolphin sound
    setTimeout(function () {
      var player = new Tone.Player("assets/mp3/dolphin.mp3").toMaster();
      player.autostart = true;
    }, 1000);

    M.toast({
      html: 'Say, Dolphin!'
    });

    var img = $('<img>')
    img.attr("src", "assets/images/-d-olphin.png");
    img.addClass("visme");
     $(".visme").html(img).show();
  });

  $("#zebraButton").on("click", function () {
    // zebra speech
    var msg = new SpeechSynthesisUtterance(voicedConsonants[4]);
    window.speechSynthesis.speak(msg);
    // zebra sound
    setTimeout(function () {
      var player = new Tone.Player("assets/mp3/zebra.mp3").toMaster();
      player.autostart = true;
    }, 1000);

    M.toast({
      html: 'Say, Zebra!'
    });

    var img = $('<img>')
    img.attr("src", "assets/images/-z-ebra.png");
    img.addClass("visme");
     $(".visme").html(img).show();
  });

  $("#waspButton").on("click", function () {
    // wasp speech
    var msg = new SpeechSynthesisUtterance(voicedConsonants[5]);
    window.speechSynthesis.speak(msg);
    // wasp sound
    setTimeout(function () {
      var player = new Tone.Player("assets/mp3/wasp.mp3").toMaster();
      player.autostart = true;
    }, 1000);

    M.toast({
      html: 'Say, Wasp!'
    });

    var img = $('<img>')
    img.attr("src", "assets/images/-w-asp.png");
    img.addClass("visme");
     $(".visme").html(img).show();
  });

  $("#llamaButton").on("click", function () {
    // llama speech
    var msg = new SpeechSynthesisUtterance(voicedConsonants[6]);
    window.speechSynthesis.speak(msg);
    // llama sound
    setTimeout(function () {
      var player = new Tone.Player("assets/mp3/llama.mp3").toMaster();
      player.autostart = true;
    }, 1000);

    M.toast({
      html: 'Say, Llama!'
    });

    var img = $('<img>')
    img.attr("src", "assets/images/-ll-ama.png");
    img.addClass("visme");
     $(".visme").html(img).show();
  });

  $("#jackrussellButton").on("click", function () {
    // jack russell speech
    var msg = new SpeechSynthesisUtterance(voicedConsonants[7]);
    window.speechSynthesis.speak(msg);
    // jack russell sound
    setTimeout(function () {
      var player = new Tone.Player("assets/mp3/jack_russell.mp3").toMaster();
      player.autostart = true;
    }, 1000);

    M.toast({
      html: 'Say, Jack Russell!'
    });

    var img = $('<img>')
    img.attr("src", "assets/images/-j-ack russell.png");
    img.addClass("visme");
     $(".visme").html(img).show();
  });

  $("#raccoonButton").on("click", function () {
    // raccoon speech
    var msg = new SpeechSynthesisUtterance(voicedConsonants[8]);
    window.speechSynthesis.speak(msg);
    // raccoon sound
    setTimeout(function () {
      var player = new Tone.Player("assets/mp3/raccoon.mp3").toMaster();
      player.autostart = true;
    }, 1000);

    M.toast({
      html: 'Say, Raccoon!'
    });

    var img = $('<img>')
    img.attr("src", "assets/images/-r-accoon.png");
    img.addClass("visme");
     $(".visme").html(img).show();
  });

  $("#goatButton").on("click", function () {
    // goat speech
    var msg = new SpeechSynthesisUtterance(voicedConsonants[9]);
    window.speechSynthesis.speak(msg);
    // goat sound
    setTimeout(function () {
      var player = new Tone.Player("assets/mp3/goat.mp3").toMaster();
      player.autostart = true;
    }, 1000);

    M.toast({
      html: 'Say, Goat!'
    });

    var img = $('<img>')
    img.attr("src", "assets/images/-g-oat.png");
    img.addClass("visme");
     $(".visme").html(img).show();
  });

  $("#yorkieButton").on("click", function () {
    // yorkie speech
    var msg = new SpeechSynthesisUtterance(voicedConsonants[10]);
    window.speechSynthesis.speak(msg);
    // yorkie sound
    setTimeout(function () {
      var player = new Tone.Player("assets/mp3/yorkie.mp3").toMaster();
      player.autostart = true;
    }, 1000);

    M.toast({
      html: 'Say, Yorkie!'
    });

    var img = $('<img>')
    img.attr("src", "assets/images/-y-orkie.png");
    img.addClass("visme");
     $(".visme").html(img).show();
  });

  // ------------------------------------------------------------------------------------------------------>

  // created functions for the unvoiced consonant carousel buttons

  $('#peacockButton').on("click", function () {
    // peacock speech
    var msg = new SpeechSynthesisUtterance(unvoicedConsonants[0]);
    window.speechSynthesis.speak(msg);
    // peacock sound
    setTimeout(function () {
      var player = new Tone.Player("assets/mp3/peacock.mp3").toMaster();
      player.autostart = true;
    }, 1000);

    M.toast({
      html: 'Say, PeaCock!'
    });

    var img = $('<img>')
    img.attr("src", "assets/images/-p-eakcock.png");
    img.addClass("visme");
     $(".visme").html(img).show();
  });

  $('#frogButton').on("click", function () {
    // frog speech
    var msg = new SpeechSynthesisUtterance(unvoicedConsonants[1]);
    window.speechSynthesis.speak(msg);
    // frog sound
    setTimeout(function () {
      var player = new Tone.Player("assets/mp3/frog.mp3").toMaster();
      player.autostart = true;
    }, 1000);

    M.toast({
      html: 'Say, Frog!'
    });

    var img = $('<img>')
    img.attr("src", "assets/images/-f-rog.png");
    img.addClass("visme");
     $(".visme").html(img).show();
  });

  $('#slothButton').on("click", function () {
    // sloth speech
    var msg = new SpeechSynthesisUtterance(unvoicedConsonants[2]);
    window.speechSynthesis.speak(msg);
    // sloth sound
    setTimeout(function () {
      var player = new Tone.Player("assets/mp3/sloth.mp3").toMaster();
      player.autostart = true;
    }, 1000);

    M.toast({
      html: 'Say, Sloth!'
    });

    var img = $('<img>')
    img.attr("src", "assets/images/slo-th-.png");
    img.addClass("visme");
     $(".visme").html(img).show();
  });

  $('#tigerButton').on("click", function () {
    // tiger speech
    var msg = new SpeechSynthesisUtterance(unvoicedConsonants[3]);
    window.speechSynthesis.speak(msg);
    // tiger sound
    setTimeout(function () {
      var player = new Tone.Player("assets/mp3/tiger.mp3").toMaster();
      player.autostart = true;
    }, 1000);

    M.toast({
      html: 'Say, Tiger!'
    });

    var img = $('<img>')
    img.attr("src", "assets/images/-t-iger.png");
    img.addClass("visme");
     $(".visme").html(img).show();
  });

  $('#snakeButton').on("click", function () {
    // snake speech
    var msg = new SpeechSynthesisUtterance(unvoicedConsonants[4]);
    window.speechSynthesis.speak(msg);
    // snake sound
    setTimeout(function () {
      var player = new Tone.Player("assets/mp3/snake.mp3").toMaster();
      player.autostart = true;
    }, 1000);

    M.toast({
      html: 'Say, Snake!'
    });

    var img = $('<img>')
    img.attr("src", "assets/images/-s-nake.png");
    img.addClass("visme");
     $(".visme").html(img).show();
  });

  $('#sharkButton').on("click", function () {
    // shark speech
    var msg = new SpeechSynthesisUtterance(unvoicedConsonants[5]);
    window.speechSynthesis.speak(msg);
    // shark sound
    setTimeout(function () {
      var player = new Tone.Player("assets/mp3/shark.mp3").toMaster();
      player.autostart = true;
    }, 1000);

    M.toast({
      html: 'Say, Shark!'
    });

    var img = $('<img>')
    img.attr("src", "assets/images/-sh-ark.png");
    img.addClass("visme");
     $(".visme").html(img).show();
  });

  $('#cheetahButton').on("click", function () {
    // cheetah speech
    var msg = new SpeechSynthesisUtterance(unvoicedConsonants[6]);
    window.speechSynthesis.speak(msg);
    // cheetah sound
    setTimeout(function () {
      var player = new Tone.Player("assets/mp3/cheetah.mp3").toMaster();
      player.autostart = true;
    }, 1000);

    M.toast({
      html: 'Say, Cheetah!'
    });

    var img = $('<img>')
    img.attr("src", "assets/images/-ch-eetah.png");
    img.addClass("visme");
     $(".visme").html(img).show();
  });

  $('#kangarooButton').on("click", function () {
    // kangaroo speech
    var msg = new SpeechSynthesisUtterance(unvoicedConsonants[7]);
    window.speechSynthesis.speak(msg);
    // kangaroo sound
    setTimeout(function () {
      var player = new Tone.Player("assets/mp3/kangaroo.mp3").toMaster();
      player.autostart = true;
    }, 1000);

    M.toast({
      html: 'Say, Kangaroo!'
    });

    var img = $('<img>')
    img.attr("src", "assets/images/-k-angaroo.png");
    img.addClass("visme");
     $(".visme").html(img).show();
  });


});

$(".button").on('click', function (event) {
  event.preventDefault();

  var animal = $(this).attr("data-type");

  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=DOIPJ1030YI69wiQkcqGIvkzMaK4C0Jh&limit=1";

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    var results = response.data;
    console.log(response);
    $('.gifs').empty();

    for (var i = 0; i < results.length; i++) {

      if (results[i].rating !== 'r' && results[i].rating !== 'pg-13') {
        var gifDiv = $('<div>');

        var animalImg = $("<img>");

        animalImg.attr('src', results[i].images.fixed_height.url);
        animalImg.addClass('image');
        gifDiv.append(animalImg);

        $('.gifs').prepend(gifDiv);

      }
    }
  })
});

var config = {
  apiKey: "AIzaSyBtpr09-F0k89EO6_lAqt7zwP1iy4FVkW0",
  authDomain: "see-n-say-14b3b.firebaseapp.com",
  databaseURL: "https://see-n-say-14b3b.firebaseio.com",
  projectId: "see-n-say-14b3b",
  storageBucket: "see-n-say-14b3b.appspot.com",
  messagingSenderId: "689086528373"
};

firebase.initializeApp(config);

var database = firebase.database();



$("#submit").on("click", function (event) {
  event.preventDefault();

  var name = $("#name").val().trim();
  var age = $("#age").val().trim();
  var email = $("#email").val().trim();
  var sound = $("#sound").val().trim();

  var newUser = {
    name: name,
    age: age,
    email: email,
    sound: sound
  };

  database.ref().push(newUser);

  console.log(newUser.name);
  console.log(newUser.age);
  console.log(newUser.email);
  console.log(newUser.sounds);

  $("#name").val("");
  $("#age").val("");
  $("#email").val("");
  $("#sound").val("");


})
