// Import the functions you need from the SDKs you need
import { initializeApp } from "@firebase/app";
import { getDatabase } from "@firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2qtko2laE82lZ1zmdfwGnarUhqv5her0",
  authDomain: "wifi-door-lock-42747.firebaseapp.com",
  databaseURL:
    "https://wifi-door-lock-42747-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "wifi-door-lock-42747",
  storageBucket: "wifi-door-lock-42747.firebasestorage.app",
  messagingSenderId: "512645395915",
  appId: "1:512645395915:web:eb259c7bcc3437da31b24e",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
export const database = getDatabase(app);