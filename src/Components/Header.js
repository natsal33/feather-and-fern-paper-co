import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div className="Header">
      <nav className="navBarSection">
        <NavLink to={"/gallery"} className="navBarItem subheader">
          Gallery
        </NavLink>
        <NavLink to={"/about"} className="navBarItem subheader">
          About
        </NavLink>
      </nav>
      <div id="business-logo-space">
        <NavLink id="business-logo" to={"/"}>
          <h1>Feather & Fern Paper Co.</h1>
        </NavLink>
      </div>
      <nav className="navBarSection">
        <NavLink to={"/faq"} className="navBarItem subheader">
          FAQ's
        </NavLink>
        <NavLink to={"/contact"} className="navBarItem subheader">
          Contact
        </NavLink>
      </nav>
    </div>
  );
}

export default Header;
