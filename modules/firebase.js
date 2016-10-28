var firebase = require('firebase');

var config = {
    apiKey: "AIzaSyCMNnrLwBozPpfG8d4YzCi9W334FhcorEg",
    authDomain: "homegrown-65645.firebaseapp.com",
    databaseURL: "https://homegrown-65645.firebaseio.com",
    storageBucket: "homegrown-65645.appspot.com",
    messagingSenderId: "818910687408"
};

firebase.initializeApp(config);

// module.exports.FBApp = FBApp;

// Promise.all(console.log(FBApp.database().ref("items").ref.once('value', function(snapshot) {
//   	snapshot.forEach(function(childSnapshot) {
//     	console.log(childSnapshot.val().title);
// 		console.log(childSnapshot.val().seller);
// 		console.log(childSnapshot.val().price);
// 		console.log(childSnapshot.val().quantity);
// 		console.log(childSnapshot.val().metric);
//   	})
// })));

var db = firebase.database();
var ref = db.ref("items");

// Attach an asynchronous callback to read the data at our posts reference
ref.on("child_added", function(snapshot) {
  console.log(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});