import React from "react";
import { NavLink } from "react-router-dom";
import "../theme.css";
import "./Header.css";

function Header() {
  return (
    <div className="Header-box">
      <div className="Header">
        <nav className="navBarSection">
          <NavLink to={"/gallery"} className="navBarItem">
            Gallery
          </NavLink>
          <NavLink to={"/about"} className="navBarItem">
            About
          </NavLink>
        </nav>
        <div id="business-logo-space">
          <NavLink id="business-logo" to={"/"}>
            <h1>Feather & Fern Paper Co.</h1>
          </NavLink>
        </div>
        <nav className="navBarSection">
          <NavLink to={"/faq"} className="navBarItem">
            FAQ's
          </NavLink>
          <NavLink to={"/contact"} className="navBarItem">
            Contact
          </NavLink>
        </nav>
      </div>
    </div>
  );
}

export default Header;
