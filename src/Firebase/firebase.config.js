import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyD_Vom-Q8_x6GbfF2zuVyg3NuyocvLPT1s",
  authDomain: "thakurgaon-suger-mills-school.firebaseapp.com",
  projectId: "thakurgaon-suger-mills-school",
  storageBucket: "thakurgaon-suger-mills-school.appspot.com",
  messagingSenderId: "343742752358",
  appId: "1:343742752358:web:f53f286cf58d09d4c9efa7"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);