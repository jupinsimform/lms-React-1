import React, { Component } from "react";
import NavBar from "./components/NavBar";
import Images from "./components/Images";
import "./App.css";

class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        <h2 className="container">React from Scratch</h2>
        <Images />
      </>
    );
  }
}

export default App;
