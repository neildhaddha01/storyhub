import * as firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyDxGFr2S0CH-cEvq7VaraAuXX_1FvcIqtU",
    authDomain: "storyhub-bf2a2.firebaseapp.com",
    projectId: "storyhub-bf2a2",
    storageBucket: "storyhub-bf2a2.appspot.com",
    messagingSenderId: "1013039854546",
    appId: "1:1013039854546:web:45732a7844547e23f08e0b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();