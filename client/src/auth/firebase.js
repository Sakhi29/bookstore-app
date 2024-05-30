import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC09JV8wJRXTmplmPcP1jMAbJW3WFPu0qU",
  authDomain: "book-store-e90e8.firebaseapp.com",
  projectId: "book-store-e90e8",
  storageBucket: "book-store-e90e8.appspot.com",
  messagingSenderId: "524440707690",
  appId: "1:524440707690:web:8ce14b152346783af02013",
  measurementId: "G-F83RJQT14J",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
