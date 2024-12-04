import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage"; // Import getStorage

const firebaseConfig = {
  apiKey: "AIzaSyCeSGf2xEyX-ggVWMxjpUa1CSFeWB9F97U",
  authDomain: "zager-website.firebaseapp.com",
  projectId: "zager-website",
  storageBucket: "zager-website.appspot.com",
  messagingSenderId: "309854595367",
  appId: "1:309854595367:web:7af42797b324afc11f6102"
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app); // Initialize Firebase Storage

export { app, firestore, auth, storage }; // Export storage
