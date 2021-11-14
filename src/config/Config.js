import firebase from 'firebase/compat/app'

import 'firebase/compat/storage';
import 'firebase/compat/firestore';
import 'firebase/compat/auth'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCfVyx4n9jacY3E5vw-DJeekO3UItIs2JA",
  authDomain: "wear-this-f2eca.firebaseapp.com",
  projectId: "wear-this-f2eca",
  storageBucket: "wear-this-f2eca.appspot.com",
  messagingSenderId: "829399538409",
  appId: "1:829399538409:web:af3dba3584056b4b2dae78",
  measurementId: "G-LM2DQ2SKR9"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

export { auth, db, storage }
