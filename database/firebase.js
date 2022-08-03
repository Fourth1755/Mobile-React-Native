// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSZAndvkdokXo5ZVWws9SlaoJn2wXyeC0",
  authDomain: "react-native-crud-c543f.firebaseapp.com",
  projectId: "react-native-crud-c543f",
  storageBucket: "react-native-crud-c543f.appspot.com",
  messagingSenderId: "581731966121",
  appId: "1:581731966121:web:9e3a714371328cb45a5db8",
  measurementId: "G-JPH7HB2EBZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db =getFirestore(app);
