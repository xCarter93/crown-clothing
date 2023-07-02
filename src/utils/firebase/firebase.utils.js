// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUD2cZcV1rXcsnlpZEdJPc8moyg_Fh-90",
  authDomain: "crwn-clothing-db-b087c.firebaseapp.com",
  projectId: "crwn-clothing-db-b087c",
  storageBucket: "crwn-clothing-db-b087c.appspot.com",
  messagingSenderId: "843529730462",
  appId: "1:843529730462:web:713fb7e4d83a6679d57e8f",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
