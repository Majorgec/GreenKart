// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyBk8sr86fRlWimCwez2MxHzk-h48mjVHWI",
    authDomain: "greenkart-e0466.firebaseapp.com",
    projectId: "greenkart-e0466",
    storageBucket: "greenkart-e0466.appspot.com",
    messagingSenderId: "349392427469",
    appId: "1:349392427469:web:545af196c5ae5ebb008c84",
    measurementId: "G-GYL673F7G7"
  };
  const firebaseApp= firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  export {db, auth};