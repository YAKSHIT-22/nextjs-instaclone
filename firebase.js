// Import the functions you need from the SDKs you need
import { initializeApp,getApp,getApps } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "instaclone-a911e.firebaseapp.com",
  projectId: "instaclone-a911e",
  storageBucket: "instaclone-a911e.appspot.com",
  messagingSenderId: "465351445758",
  appId: "1:465351445758:web:5081a861f9eef7d3cce9af"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const storage = getStorage(app);

export {app,db,storage}