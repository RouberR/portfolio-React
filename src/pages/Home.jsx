import React from "react";
import "./style/home.scss";
import { getAuth, GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import db from "../fb";
export const Home = () => {
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  console.log(auth)
  const onAuth = () => {
    
    signInWithRedirect(auth, provider);
    
  };
  return (
    <div className="home__container">
      <h1>Wellcome</h1>
      <div>
        <button onClick={onAuth}>Login</button>
        <button>Register</button>
      </div>
    </div>
  );
};
