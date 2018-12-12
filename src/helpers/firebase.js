import firebase from 'firebase/app';
import 'firebase/database';

var config = {
    apiKey: "AIzaSyAOBLae-2XQubIjK8HA4_b2R_IHUn2MEjM",
    authDomain: "trivia-react-af48a.firebaseapp.com",
    databaseURL: "https://trivia-react-af48a.firebaseio.com",
    projectId: "trivia-react-af48a",
    storageBucket: "trivia-react-af48a.appspot.com",
    messagingSenderId: "856702787384"
  };


  firebase.initializeApp(config);

  export default firebase;