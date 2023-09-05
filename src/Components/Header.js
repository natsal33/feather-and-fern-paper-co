import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div className="Header">
      <nav className="navBarSection">
        <NavLink to={"/gallery"} className="navBarItem">
          Gallery
        </NavLink>
        <NavLink to={"/about"} className="navBarItem">
          About
        </NavLink>
      </nav>
      <div id="business-logo">
        <NavLink to={"/"}>
          <h1>Hanna Chee Calligraphy</h1>
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
  );
}

export default Header;
