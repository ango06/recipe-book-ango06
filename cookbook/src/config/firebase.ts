// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC20gYNJCrIc0wz3uNdUJ8X8AVs0G-Qo30",
  authDomain: "cookbook-a3020.firebaseapp.com",
  projectId: "cookbook-a3020",
  storageBucket: "cookbook-a3020.firebasestorage.app",
  messagingSenderId: "887582068549",
  appId: "1:887582068549:web:06bb36d537be66ae45782c",
  measurementId: "G-TL2FJBDSHN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// const analytics = getAnalytics(app);