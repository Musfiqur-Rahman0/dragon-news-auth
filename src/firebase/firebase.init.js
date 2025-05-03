// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5CpHPSpzQO0z-oYi6XiY74a43gsOKg68",
  authDomain: "dragon-news-auth-monster.firebaseapp.com",
  projectId: "dragon-news-auth-monster",
  storageBucket: "dragon-news-auth-monster.firebasestorage.app",
  messagingSenderId: "362126054532",
  appId: "1:362126054532:web:540fecaa8fd6f1981e9ed1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const gitProvider = new GithubAuthProvider();
const googleProvider = new GoogleAuthProvider();

export { auth, gitProvider, googleProvider };
