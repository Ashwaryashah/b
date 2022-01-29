import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBSXEFIXBDDCo9bVWykvaGMeucRKgJRjmg",
  authDomain: "movie-b2058.firebaseapp.com",
  projectId: "movie-b2058",
  storageBucket: "movie-b2058.appspot.com",
  messagingSenderId: "735028516866",
  appId: "1:735028516866:web:3b4e13de909d4d99162f1b",
  measurementId: "G-09R0RYMSWH"
};
firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;