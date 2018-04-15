
// Initialize Firebase
var config = {
  apiKey: "AIzaSyD0qIG6bdfLnWKL_RTfLnbBRmXdwvNWlBU",
  authDomain: "resolvaja-2be0f.firebaseapp.com",
  databaseURL: "https://resolvaja-2be0f.firebaseio.com",
  projectId: "resolvaja-2be0f",
  storageBucket: "resolvaja-2be0f.appspot.com",
  messagingSenderId: "326853649628"
};

firebase.initializeApp(config);

// Assign the reference to the database to a variable named 'database'
var database = firebase.database();

selectedMake = false;
selectedYear = false;
var fitmentYear = "";
var fitmentMake = "";

$(document).ready(function() {

  // Whenever a user clicks the year input
  $("#typeproff").on("change", function() {

    var fitmentYear = $("#typeproff").find(":selected").text();
    selectedYear = true;
    console.log(fitmentYear);

  });

  // Whenever a user clicks the make input
  $("#make").on("change", function() {
    var fitmentYear = $("#typeproff").find(":selected").text();
    var fitmentMake = $("#make").find(":selected").text();
    selectedMake = true;
    console.log(fitmentMake);
    console.log("Tipo de profissional é " + selectedYear);
    console.log("Make Selected is " + selectedMake);

    if (selectedMake === true && selectedYear === true) {

      console.log('Ano = ' + fitmentYear + ' e FAbricante = ' + fitmentMake);

      var yearMakeModelTrim = firebase.database().ref("/users")
      yearMakeModelTrim.on('value', function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
          console.log("childSnapshot is below" + childSnapshot);
          console.log(childSnapshot);
          var childData = childSnapshot.val();
          console.log("childData is below");
          console.log(childData);
        });
      });
    }
  });

  if (fitmentYear === true && fitmentModel === true && fitmentMake === true) {
    //pull trim from firebase
  }

  if (fitmentYear === true && fitmentModel === true && fitmentMake === true && fitmentTrim === true) {
    //pull results from firebase
  }
});

