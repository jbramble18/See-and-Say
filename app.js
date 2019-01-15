

  // Initialize Firebase
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

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + image + "&api_key=DOIPJ1030YI69wiQkcqGIvkzMaK4C0Jh&limit=1";

    $.ajax({
        url:queryURL,
        method: "GET"
    }).then(function (response){
        var results = response.data;
        console.log(response);
        $('#images').empty();

        for (var i = 0; i < results.length; i++) {

            if (results[i].rating !=='r' && results[i].rating !== 'pg-13') {
                var gifDiv = $('<div>');
                
            }
        }
    })
  }