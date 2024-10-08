import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAHdnOL1zQtKo1PwGwribgyOvUPCllip0A",
  authDomain: "netflixgpt-8da11.firebaseapp.com",
  projectId: "netflixgpt-8da11",
  storageBucket: "netflixgpt-8da11.appspot.com",
  messagingSenderId: "206830330786",
  appId: "1:206830330786:web:f33b55e8d0f457442888fb",
  measurementId: "G-K73EPG3WMG",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
