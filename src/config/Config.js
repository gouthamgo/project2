// import * as firebase from 'firebase'
import firebase from 'firebase/compat/app';

import  'firebase/compat/storage';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// import 'firebase/storage';
// import 'firebase/firestore';
// import 'firebase/auth'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyB53rrQAOrnkRSoaylDOMOaAKRRcdYkbxA",
//   authDomain: "auth-development-9284a.firebaseapp.com",
//   projectId: "auth-development-9284a",
//   storageBucket: "auth-development-9284a.appspot.com",
//   messagingSenderId: "443773910752",
//   appId: "1:443773910752:web:06eeaf39f446517b08da85"
// };

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA4JqFlsTjRN9mUWTtFPzElU6kVbkls48M",
  authDomain: "project2-47714.firebaseapp.com",
  projectId: "project2-47714",
  storageBucket: "project2-47714.appspot.com",
  messagingSenderId: "825763654830",
  appId: "1:825763654830:web:8ff3e0972fc64c237f513f",
  measurementId: "G-PP6Q8HS533"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

export { auth, db, storage }
