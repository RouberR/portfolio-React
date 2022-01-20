
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { useEffect, useState } from 'react';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// const firebaseConfig = {
//     apiKey: import.meta.env.VITE_APP_API_KEY,
//     authDomain: import.meta.env.VITE_APP_AUTH_DOMAIN,
//     projectId: import.meta.env.VITE_APP_PROJECT_ID,
//     storageBucket: import.meta.env.VITE_APP_STORAGE_BUCKET,
//     messagingSenderId: import.meta.env.VITE_APP_MESSAGING_SENDER_ID,
//     appId: import.meta.env.VITE_APP_APP_ID
// }
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBbdWb6xhQPNmNR7v41R9gKNMo3qN1009A",
    authDomain: "rottfolio.firebaseapp.com",
    projectId: "rottfolio",
    storageBucket: "rottfolio.appspot.com",
    messagingSenderId: "780098803918",
    appId: "1:780098803918:web:67e4f454ca76c6db2d589f"
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
export default db;




export function useAuth() {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => setCurrentUser(user));
    return unsub;
  }, []);
  return currentUser;
}
