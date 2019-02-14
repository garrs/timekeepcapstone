import firebase from 'firebase/app'
// import {firestoreExport} from 'node-firestore-import-export';
import 'firebase/firestore'
import 'firebase/auth'
import moment from 'moment'


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

  // var db = firebase.firestore();

  // db.collection("employees").add({
  //   createdAt: firebase.firestore.FieldValue.serverTimestamp(),
  //   firstName: "Ada",
  //   lastName: "Lovelace",
  //   presence: true
  // })
  export default firebase;