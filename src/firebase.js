import firebase from "firebase";
// import * as firebase from "firebase/app";
// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0x7LaLeUoNh0CGqxLHQaEPlmTHbYz2B4",
  authDomain: "urban-cart.firebaseapp.com",
  databaseURL: "https://urban-cart-default-rtdb.firebaseio.com",
  projectId: "urban-cart",
  storageBucket: "urban-cart.appspot.com",
  messagingSenderId: "531313327411",
  appId: "1:531313327411:web:a252eb47fec79349ad5246",
  measurementId: "G-HT5CX1GM87",
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
