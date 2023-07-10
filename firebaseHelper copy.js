// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

export const getFirebaseApp = () => {
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCRCLyECL-oWw-RnIYZGhtQl2zThs14MOs",
    authDomain: "whatapp-ff4a2.firebaseapp.com",
    databaseURL: "https://whatapp-ff4a2-default-rtdb.firebaseio.com",
    projectId: "whatapp-ff4a2",
    storageBucket: "whatapp-ff4a2.appspot.com",
    messagingSenderId: "962967276557",
    appId: "1:962967276557:web:45f9452c913c92c9609944",
    measurementId: "G-YEQY6WW405",
  };

  // Initialize Firebase
  return initializeApp(firebaseConfig);
};
