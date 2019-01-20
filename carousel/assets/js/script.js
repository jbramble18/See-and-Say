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

  $(".button").on('click', function (event) {
    event.preventDefault();
  
    var animal = $(this).attr("data-type");
  
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=DOIPJ1030YI69wiQkcqGIvkzMaK4C0Jh&limit=5";
  
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
  
  