import React, {useEffect, useState} from "react";

import "./style/home.scss";
import { getAuth, GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import db from "../fb";
import { useNavigate } from "react-router-dom";
export const Home = () => {
  const provider = new GoogleAuthProvider();
  const [user, setUser] = useState("")
  const navigate = useNavigate()
  const auth = getAuth();
 
  const onAuth = () => {
    if(auth.currentUser.email){
      setUser(auth.currentUser.email)
      navigate("/user")
    }else {
      signInWithRedirect(auth, provider);
    }
  };

  return (
    <div className="home__container">
    <div className="item__container">
    <h1>Welcome my friend</h1>
      <div className="information__home">
        <button onClick={onAuth}>Get Started</button>
      <p>Here you can combine your best projects into a small portfolio and show them to your friends :)
      Try it right now by clicking on the "Get Started" button</p>
      </div>
    </div>
    
    </div>
  );
};
