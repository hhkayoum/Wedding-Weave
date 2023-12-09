// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  //   apiKey: "AIzaSyBH5CgbmyLIKBq1fvmfu1hnhVOHhI1q82s",
  //   authDomain: "metromony-1ed94.firebaseapp.com",
  //   projectId: "metromony-1ed94",
  //   storageBucket: "metromony-1ed94.appspot.com",
  //   messagingSenderId: "1009708543302",
  //   appId: "1:1009708543302:web:27f6fb270fe3e143714947",

  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
