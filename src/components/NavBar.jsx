import React from "react";
import { FaReact } from "react-icons/fa";

function NavBar() {
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <FaReact />
          <span className="logo-title"> React</span>
        </div>
        <ul className="nav-links">
          <div className="list">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li className="services">
              <a href="/">Services</a>
            </li>

            <li>
              <a href="/">Contact Us</a>
            </li>
          </div>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
