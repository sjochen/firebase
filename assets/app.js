


var firebaseConfig = {
    apiKey: "AIzaSyBJ96eW3etzF4m18OFq7h5mvvL_inthU8U",
    authDomain: "train-game-6a555.firebaseapp.com",
    databaseURL: "https://train-game-6a555.firebaseio.com",
    projectId: "train-game-6a555",
    storageBucket: "",
    messagingSenderId: "964097257062",
    appId: "1:964097257062:web:a88b3422428ea42a"
};

firebase.initializeApp(firebaseConfig);

var database = firebase.database();

var name = "";
var destination = "";
var first = "";
var freq = 0;


$("#submit").on("click", function (event) {
    event.preventDefault();
    
    name = $("#name").val();
    destination = $("#destination").val();
    first = $("#first").val();
    freq = $("#freq").val();
    
    database.ref().push({
        name: name,
        destination: destination,
        first: first,
        freq: freq,
      });
});
