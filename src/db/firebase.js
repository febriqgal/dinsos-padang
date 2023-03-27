// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCbXX6RyjsxKFggF-CnsomDmYqD109KQnE",
  authDomain: "dinsos-padang.firebaseapp.com",
  projectId: "dinsos-padang",
  storageBucket: "dinsos-padang.appspot.com",
  messagingSenderId: "850378338501",
  appId: "1:850378338501:web:b3784d911eb4e1f73780ac",
  measurementId: "G-6G10DNVPSX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const FirebaseStorage = getStorage(app);
const auth = getAuth(app);
export { db, FirebaseStorage, auth };
export const Authentication = () => {
  return auth;
};
export default app;
