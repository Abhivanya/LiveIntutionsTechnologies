import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDDTATv0YiM4tUTMW_am_sGPbArW4ZmUOk",
  authDomain: "wheatherapp-f9067.firebaseapp.com",
  projectId: "wheatherapp-f9067",
  storageBucket: "wheatherapp-f9067.appspot.com",
  messagingSenderId: "94377368384",
  appId: "1:94377368384:web:c1e40d4f1d767a8b0fb8a5",
  measurementId: "G-X079VY6WGW",
};

// initializing firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = initializeAuth(FIREBASE_APP, {
  persistence: getReactNativePersistence(AsyncStorage),
});
export const FIREBASE_DB = getFirestore(FIREBASE_APP);
