import * as firebase from 'firebase'

import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/auth'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB53rrQAOrnkRSoaylDOMOaAKRRcdYkbxA",
  authDomain: "auth-development-9284a.firebaseapp.com",
  projectId: "auth-development-9284a",
  storageBucket: "auth-development-9284a.appspot.com",
  messagingSenderId: "443773910752",
  appId: "1:443773910752:web:06eeaf39f446517b08da85"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

export { auth, db, storage }
