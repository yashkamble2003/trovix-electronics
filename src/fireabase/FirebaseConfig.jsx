// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"; // Fixed import here

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYBMcPpEE_TI3-sQuLQFqIJYHkdXUuXo0",
  authDomain: "myfirstapp-c967e.firebaseapp.com",
  projectId: "myfirstapp-c967e",
  storageBucket: "myfirstapp-c967e.firebasestorage.app",
  messagingSenderId: "592330720861",
  appId: "1:592330720861:web:7b47f2b02709abe6172fb4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth };
