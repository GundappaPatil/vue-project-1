// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0GpNcNcn6AJAqGCtrqcym8HGlABNNyzU",
  authDomain: "fruitshop-73bef.firebaseapp.com",
  projectId: "fruitshop-73bef",
  storageBucket: "fruitshop-73bef.appspot.com",
  messagingSenderId: "1086948501303",
  appId: "1:1086948501303:web:5d1b1aae2fc089b2139cb2",
  measurementId: "G-EKJLXFYTQF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);