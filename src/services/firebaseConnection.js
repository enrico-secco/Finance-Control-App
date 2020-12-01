import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

let firebaseConfig = {
    apiKey: "AIzaSyAqAx1D116nnlAKTsmBJ6O-LuEvBEFZJ6k",
    authDomain: "financaapp.firebaseapp.com",
    databaseURL: "https://financaapp.firebaseio.com",
    projectId: "financaapp",
    storageBucket: "financaapp.appspot.com",
    messagingSenderId: "1073911121062",
    appId: "1:1073911121062:web:387ab1ef3d28cb5387e067",
    measurementId: "G-LFML0Y2QEM"
  };
  // Initialize Firebase
  if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
  }

  export default firebase;