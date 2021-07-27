import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
//optional
import "firebase/analytics";
import "firebase/performance";

const firebaseConfig = {
  apiKey: "AIzaSyAQCfM3vQBHgXX6BODJ9dYwsiaNccqdblg",
  authDomain: "chabbad-cyprus.firebaseapp.com",
  databaseURL: "https://chabbad-cyprus-default-rtdb.firebaseio.com",
  projectId: "chabbad-cyprus",
  storageBucket: "chabbad-cyprus.appspot.com",
  messagingSenderId: "989479064837",
  appId: "1:989479064837:web:8677fff3a0bc0d8432936c",
  measurementId: "G-B9GNZH7VRC"
};

function initFireBase(){
  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
    if(typeof window !== "undefined" && "measurementId" in firebaseConfig){
      firebase.analytics();
      firebase.performance();
    }
    console.log('Firebase init succefully');
  }
}

export default initFireBase;