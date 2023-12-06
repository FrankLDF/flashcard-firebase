import { getAuth } from "firebase/auth";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD0mcTB5G4EUF9WlaCzz7neTkPnpsYRE_Q",
  authDomain: "flashcards-native-20dc4.firebaseapp.com",
  projectId: "flashcards-native-20dc4",
  storageBucket: "flashcards-native-20dc4.appspot.com",
  messagingSenderId: "498195388838",
  appId: "1:498195388838:web:dd507cce364b71f0c61767",
};

export const app = firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
export const auth = getAuth(app);

export const categories = db.collection("categories");
export const cards = db.collection("cards");
