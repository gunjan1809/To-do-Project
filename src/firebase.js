import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCEfoOtWU-356CionBEne5IxHFlzGuRRyI",
  authDomain: "to-do-app-51eea.firebaseapp.com",
  projectId: "to-do-app-51eea",
  storageBucket: "to-do-app-51eea.appspot.com",
  messagingSenderId: "513485666213",
  appId: "1:513485666213:web:8ef04eb6dba8b615839a4c",
  measurementId: "G-3083KHM4DY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const analytics = getAnalytics(app);