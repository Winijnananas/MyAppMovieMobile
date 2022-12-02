// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { createUserWithEmailAndPassword, auth} from "firebase/auth";
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwNppHMqqWFgbQIfK5k1x3eFI5n7w3QMQ",
  authDomain: "fir-auth-21a4b.firebaseapp.com",
  projectId: "fir-auth-21a4b",
  storageBucket: "fir-auth-21a4b.appspot.com",
  messagingSenderId: "634231072275",
  appId: "1:634231072275:web:a9e247bbfdffa9f37bc1e6"
};

// Initialize Firebase


let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth };




// const app = initializeApp(firebaseConfig);