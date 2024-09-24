import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCMzzOIm-75jAKtn264ZddNvmOrJhRhO2w",
  authDomain: "stylehive-f0fe9.firebaseapp.com",
  projectId: "stylehive-f0fe9",
  storageBucket: "stylehive-f0fe9.appspot.com",
  messagingSenderId: "783953625579",
  appId: "1:783953625579:web:6c1e8565ee555b38d4d9ae",
  measurementId: "G-8TFLETYR8S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
export {auth,provider};