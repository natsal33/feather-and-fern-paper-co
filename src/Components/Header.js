import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div className="Header">
      <nav className="navBarSection">
        <NavLink to={"/"} className="navBarItem">
          Home
        </NavLink>
        <NavLink to={"/about"} className="navBarItem">
          About
        </NavLink>
      </nav>
      <h1 id="business-logo">Hanna Chee Calligraphy</h1>
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
