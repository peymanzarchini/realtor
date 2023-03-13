// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC57y7_r90eCEhxVvWnR3DxWXomhySLhc0",
  authDomain: "realtor-clone-react-82333.firebaseapp.com",
  projectId: "realtor-clone-react-82333",
  storageBucket: "realtor-clone-react-82333.appspot.com",
  messagingSenderId: "669600477461",
  appId: "1:669600477461:web:2c4f723a240bf1e103f91c",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
