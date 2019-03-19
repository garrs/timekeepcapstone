import firebase from 'firebase/app'
// import {firestoreExport} from 'node-firestore-import-export';
import 'firebase/firestore'
import 'firebase/auth'
// import moment from 'moment'

//const functions = require('firebase-functions');



// Initialize Firebase
var config = {
    apiKey: "AIzaSyDCqKttRGg1taOjg5u7fngUSGqxtd3vKPM",
    authDomain: "anagram-c496e.firebaseapp.com",
    databaseURL: "https://anagram-c496e.firebaseio.com",
    projectId: "anagram-c496e",
    storageBucket: "",
    messagingSenderId: "653027370210"
  };

  firebase.initializeApp(config);
  firebase.firestore().settings({timestampsInSnapshots: true})

  // // anonymous auth
  // firebase.auth().signInAnonymously()
  // .then(function() {
  //  // You're signed in, reads will work
  // })
  // .catch(function(error) {
  // // Handle Errors here.
  // // ...
  // }); 
  //var exports = module.exports = {};

  // exports.updateUser = functions.firestore
  //   .document('employees')
  //   .onUpdate((change, context) => {
  //     // Get an object representing the document
  //     // e.g. {'name': 'Marie', 'age': 66}
  //     const newValue = change.after.data();

  //     // ...or the previous value before this update
  //     const previousValue = change.before.data();

  //     // access a particular field as you would any JS property
  //     const name = newValue.firstName;

  //     // perform desired operations ...
  //   });


  // var db = firebase.firestore();

  // db.collection("employees").add({
  //   createdAt: firebase.firestore.FieldValue.serverTimestamp(),
  //   firstName: "Ada",
  //   lastName: "Lovelace",
  //   presence: true
  // })
  export default firebase;