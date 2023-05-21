// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDoo8KDU7L8AhsiTlm7HofaKeWzToc0sLI",
  authDomain: "art-portfolio-68d0e.firebaseapp.com",
  projectId: "art-portfolio-68d0e",
  storageBucket: "art-portfolio-68d0e.appspot.com",
  messagingSenderId: "814090326678",
  appId: "1:814090326678:web:fc3ae0a7815120dbeaa8b7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();


// Initialize Firebase Authentication and get a reference to the service
export {auth, provider}
