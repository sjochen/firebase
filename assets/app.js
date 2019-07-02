


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




$("#submit").on("click", function (event) {
  event.preventDefault();

  var name = $("#name").val();
  var destination = $("#destination").val();
  var first = $("#first").val();
  var freq = $("#freq").val();

  database.ref().push({
    name: name,
    destination: destination,
    first: first,
    freq: freq,
  });
  
$('.form-control').val("");
});



function test(){
database.ref().on("child_added", function (childSnapshot) {


  var name = childSnapshot.val().name;
  var destination = childSnapshot.val().destination;
  var first = 0;
  var trainFreq = childSnapshot.val().freq;

  
 

  var firstConverted = moment(first, "HH:mm").subtract(1, "years");
  console.log(firstConverted);

  var currentTime = moment();
  console.log("CURRENT TIME: " + moment(currentTime).format("HH:mm"));

  var diffTime = moment().diff(moment(firstConverted), "minutes");
  console.log("DIFFERENCE IN TIME: " + diffTime);

  var tRemainder = diffTime % trainFreq;
  console.log(tRemainder);

  var tMinutesTillTrain = trainFreq - tRemainder;
  console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);

  var nextTrain = moment().add(tMinutesTillTrain, "minutes");
  console.log("ARRIVAL TIME: " + moment(nextTrain).format("HH:mm"));


  $("tbody").append("<tr><td>" + name + "</td><td>" + destination + "</td><td>" + trainFreq + 
	   "</td><td>" + moment(nextTrain).format("HH:mm") + "</td><td>" + tMinutesTillTrain + "</td></tr>");
});
};



function updateTime(){
$('tbody').empty();
test();
};

                                                                    

updateTime();
setInterval(function(){
 updateTime();
},60000);

