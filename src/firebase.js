import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyAxfyKawcVQd7mLh9-dugsOJxzXzeVvehE",
  authDomain: "whatsappcosmos.firebaseapp.com",
  databaseURL: "https://whatsappcosmos.firebaseio.com",
  projectId: "whatsappcosmos",
  storageBucket: "whatsappcosmos.appspot.com",
  messagingSenderId: "104437889315",
  appId: "1:104437889315:web:6c4183ae4c8d96c009b496"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();