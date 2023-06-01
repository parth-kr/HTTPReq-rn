import firebase from "firebase/compat/app"
import {getDatabase} from "firebase/database"

const firebaseConfig = {
    apiKey: "AIzaSyBtKNF3EG9CssQhLGLmlyumyvddfms4XWE",
    authDomain: "fir-reactnative-f4aed.firebaseapp.com",
    projectId: "fir-reactnative-f4aed",
    storageBucket: "fir-reactnative-f4aed.appspot.com",
    messagingSenderId: "363829337869",
    appId: "1:363829337869:web:8126c15a3c248ccfdd1a44"
  };

  if(firebase.apps.length === 0){
    firebase.initializeApp(firebaseConfig)
  }
  const db=getDatabase()
  export {db}