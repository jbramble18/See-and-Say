var singleVowels = ["iguana", "cat", "eagle", "hampster", "umbrellabird", "sheperd", "ostrich", "poodle", "gopher"];

var diphthongs = ["bear", "caiman", "snowyowl", "koi", "earwig", "mouse", "hyena", "cougar"];

var unvoicedConsonants = ["peacock", "frog", "sloth", "tiger", "snake", "shark", "cheetah", "kangaroo"];

var voicedConsonants = ["bat", "monkey", "bird", "nightingale", "feather", "flamingo", "dolphin", "hamster", "zebra", "wasp", "asianelephant", "llama", "jackal", "raccoon", "goat", "yorkie"];




// function for the #hyena button to speak
$("#iguana").on("click", function () {
  var msg = new SpeechSynthesisUtterance(singleVowels[0]);
  window.speechSynthesis.speak(msg);
});



$("#cat").on("click", function () {
  var msg = new SpeechSynthesisUtterance(singleVowels[1]);
  window.speechSynthesis.speak(msg);
});

$("#eagle").on("click", function () {
  var msg = new SpeechSynthesisUtterance(singleVowels[2]);
  window.speechSynthesis.speak(msg);
});

$("#hampster").on("click", function () {
  var msg = new SpeechSynthesisUtterance(singleVowels[3]);
  window.speechSynthesis.speak(msg);
});

$("#umbrellabird").on("click", function () {
  var msg = new SpeechSynthesisUtterance(singleVowels[4]);
  window.speechSynthesis.speak(msg);
});

$("#sheperd").on("click", function () {
  var msg = new SpeechSynthesisUtterance(singleVowels[5]);
  window.speechSynthesis.speak(msg);
});

$("#ostrich").on("click", function () {
  var msg = new SpeechSynthesisUtterance(singleVowels[6]);
  window.speechSynthesis.speak(msg);
});

$("#poodle").on("click", function () {
  var msg = new SpeechSynthesisUtterance(singleVowels[7]);
  window.speechSynthesis.speak(msg);
});

$("#gopher").on("click", function () {
  var msg = new SpeechSynthesisUtterance(singleVowels[8]);
  window.speechSynthesis.speak(msg);
});





//dipthongs

$("#bear").on("click", function () {
  var msg = new SpeechSynthesisUtterance(diphthongs[0]);
  window.speechSynthesis.speak(msg);
});

$("#caiman").on("click", function () {
  var msg = new SpeechSynthesisUtterance(diphthongs[1]);
  window.speechSynthesis.speak(msg);
});

$("#snowyowl").on("click", function () {
  var msg = new SpeechSynthesisUtterance(diphthongs[2]);
  window.speechSynthesis.speak(msg);
});

$("#koi").on("click", function () {
  var msg = new SpeechSynthesisUtterance(diphthongs[3]);
  window.speechSynthesis.speak(msg);
});

$("#earwig").on("click", function () {
  var msg = new SpeechSynthesisUtterance(diphthongs[4]);
  window.speechSynthesis.speak(msg);
});

$("#mouse").on("click", function () {
  var msg = new SpeechSynthesisUtterance(diphthongs[5]);
  window.speechSynthesis.speak(msg);
});

$("#hyena").on("click", function () {
  var msg = new SpeechSynthesisUtterance(diphthongs[6]);
  window.speechSynthesis.speak(msg);
});

$("#cougar").on("click", function () {
  var msg = new SpeechSynthesisUtterance(diphthongs[7]);
  window.speechSynthesis.speak(msg);
});

//unvoiced Consonants

$("#peacock").on("click", function () {
  var msg = new SpeechSynthesisUtterance(unvoicedConsonants[0]);
  window.speechSynthesis.speak(msg);
});

$("#frog").on("click", function () {
  var msg = new SpeechSynthesisUtterance(unvoicedConsonants[1]);
  window.speechSynthesis.speak(msg);
});

$("#sloth").on("click", function () {
  var msg = new SpeechSynthesisUtterance(unvoicedConsonants[2]);
  window.speechSynthesis.speak(msg);
});

$("#tiger").on("click", function () {
  var msg = new SpeechSynthesisUtterance(unvoicedConsonants[3]);
  window.speechSynthesis.speak(msg);
});

$("#snake").on("click", function () {
  var msg = new SpeechSynthesisUtterance(unvoicedConsonants[4]);
  window.speechSynthesis.speak(msg);
});

$("#shark").on("click", function () {
  var msg = new SpeechSynthesisUtterance(unvoicedConsonants[5]);
  window.speechSynthesis.speak(msg);
});

$("#cheetah").on("click", function () {
  var msg = new SpeechSynthesisUtterance(unvoicedConsonants[6]);
  window.speechSynthesis.speak(msg);
});

$("#kangaroo").on("click", function () {
  var msg = new SpeechSynthesisUtterance(unvoicedConsonants[7]);
  window.speechSynthesis.speak(msg);
});

//voiced consonants

$("#bat").on("click", function () {
  var msg = new SpeechSynthesisUtterance(voicedConsonants[0]);
  window.speechSynthesis.speak(msg);
});

$("#monkey").on("click", function () {
  var msg = new SpeechSynthesisUtterance(voicedConsonants[1]);
  window.speechSynthesis.speak(msg);
});

$("#bird").on("click", function () {
  var msg = new SpeechSynthesisUtterance(voicedConsonants[2]);
  window.speechSynthesis.speak(msg);
});

$("#nightingale").on("click", function () {
  var msg = new SpeechSynthesisUtterance(voicedConsonants[3]);
  window.speechSynthesis.speak(msg);
});

$("#feather").on("click", function () {
  var msg = new SpeechSynthesisUtterance(voicedConsonants[4]);
  window.speechSynthesis.speak(msg);
});

$("#flamingo").on("click", function () {
  var msg = new SpeechSynthesisUtterance(voicedConsonants[5]);
  window.speechSynthesis.speak(msg);
});

$("#dolphin").on("click", function () {
  var msg = new SpeechSynthesisUtterance(voicedConsonants[6]);
  window.speechSynthesis.speak(msg);
});

$("#hamster").on("click", function () {
  var msg = new SpeechSynthesisUtterance(voicedConsonants[7]);
  window.speechSynthesis.speak(msg);
});

$("#zebra").on("click", function () {
  var msg = new SpeechSynthesisUtterance(voicedConsonants[8]);
  window.speechSynthesis.speak(msg);
});

$("#wasp").on("click", function () {
  var msg = new SpeechSynthesisUtterance(voicedConsonants[9]);
  window.speechSynthesis.speak(msg);
});

$("#asianelephant").on("click", function () {
  var msg = new SpeechSynthesisUtterance(voicedConsonants[10]);
  window.speechSynthesis.speak(msg);
});

$("#llama").on("click", function () {
  var msg = new SpeechSynthesisUtterance(voicedConsonants[11]);
  window.speechSynthesis.speak(msg);
});

$("#jackal").on("click", function () {
  var msg = new SpeechSynthesisUtterance(voicedConsonants[12]);
  window.speechSynthesis.speak(msg);
});

$("#raccoon").on("click", function () {
  var msg = new SpeechSynthesisUtterance(voicedConsonants[13]);
  window.speechSynthesis.speak(msg);
});

$("#goat").on("click", function () {
  var msg = new SpeechSynthesisUtterance(voicedConsonants[14]);
  window.speechSynthesis.speak(msg);
});

$("#yorkie").on("click", function () {
  var msg = new SpeechSynthesisUtterance(voicedConsonants[15]);
  window.speechSynthesis.speak(msg);
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

function displayGifs() {


  var animal = $('#animal-input').val().trim();
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
}

$('#add-animal').on('click', function (event) {
  event.preventDefault();
  var userAni = $('#animal-input').val().trim();

  displayGifs();
});