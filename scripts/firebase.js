import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDScb0dDwF_6-tIgcppfvzp9mOHLd8uZxo",
  authDomain: "mindx-cinema.firebaseapp.com",
  databaseURL: "https://mindx-cinema-default-rtdb.firebaseio.com",
  projectId: "mindx-cinema",
  storageBucket: "mindx-cinema.appspot.com",
  messagingSenderId: "760608777412",
  appId: "1:760608777412:web:8b536ef214299597d75591",
  measurementId: "G-3PHX62HFQ9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

