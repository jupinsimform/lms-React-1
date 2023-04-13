import React from "react";
import webpack from "../assets/webpack.svg";
import babel from "../assets/babel.png";
import react from "../assets/react.png";

function Images() {
  return (
    <div className="container">
      <a href="https://webpack.js.org/">
        <img src={webpack} alt="" />
      </a>
      <a href="https://babeljs.io/">
        <img src={babel} alt="" />
      </a>
      <a href="https://react.dev/">
        <img src={react} alt="" />
      </a>
    </div>
  );
}

export default Images;
