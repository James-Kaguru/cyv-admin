//imports
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBats7o0oh7A2a-v2tHhf0JKzpzz8Y23z8",
  authDomain: "fir-react-edac4.firebaseapp.com",
  projectId: "fir-react-edac4",
  storageBucket: "fir-react-edac4.appspot.com",
  messagingSenderId: "334238108023",
  appId: "1:334238108023:web:f036d8f08d33d08cb53972"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Option 1: Access Firebase services via the app variable
export const db = getFirestore(app);
export const storage = getStorage(app);

//TODO reamove all snapshots and look for an effiecient way to fetch data
//TODO remove all session stored firebase objects
