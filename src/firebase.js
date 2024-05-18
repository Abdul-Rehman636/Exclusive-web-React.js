import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyChvdQZjf4H8BsZDLoO3IAT_V8sUOCidcc",
  authDomain: "exclusive-auth.firebaseapp.com",
  projectId: "exclusive-auth",
  storageBucket: "exclusive-auth.appspot.com",
  messagingSenderId: "596949107083",
  appId: "1:596949107083:web:392354a8e5126165f6af8e",
  measurementId: "G-6XJWYRZ5Z8",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
