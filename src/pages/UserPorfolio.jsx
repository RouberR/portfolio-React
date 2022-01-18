import React from "react";
import "./style/userPortfolio.scss";
import test from "../assets/test.jpg";
import { Link } from "react-router-dom";
export const UserPorfolio = () => {
  return (
    <div className="container">
      <div className="item__container">
        <a href="https://eloquent-sinoussi-9f1ab7.netlify.app/" target="_blank" rel="noreferrer">
          <div
            className="bg-image"
            style={{ backgroundImage: `url(${test})` }}
          />
          <div className="inforation">
            <p>
              <span>Title: </span>Food menu
            </p>
            <p>
              <span>Description: </span>Simple food project
            </p>
            <p>
              <span>Technologies: </span>React, scss
            </p>
          </div>
        </a>
      </div>
    </div>
  );
};
