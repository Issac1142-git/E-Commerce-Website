import firebase from "firebase/app";

import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBngvVCh_3Vhl0L1X2HcE7uyoGKYVXpBgY",
  authDomain: "crown-cloth-ecommerce.firebaseapp.com",
  projectId: "crown-cloth-ecommerce",
  storageBucket: "crown-cloth-ecommerce.appspot.com",
  messagingSenderId: "350530268045",
  appId: "1:350530268045:web:8fbf850aaff300a5bcabc4",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);
