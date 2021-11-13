import * as firebase from 'firebase'

import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/auth'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAe7i-f6UvRCkLOGR0_zE5lF88sETvshEI",
  authDomain: "trail1-13388.firebaseapp.com",
  projectId: "trail1-13388",
  storageBucket: "trail1-13388.appspot.com",
  messagingSenderId: "819010698881",
  appId: "1:819010698881:web:6452afbf9e900585bfd780",
  measurementId: "G-6T2KTJR6WR"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

export { auth, db, storage }
