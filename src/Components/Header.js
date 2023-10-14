import React from "react";
import { NavLink } from "react-router-dom";
import "../theme.css";
import "./Header.css";

function Header() {
  return (
    <div className="Header-box">
      <h1 id="hidden-header">Feather & Fern Paper Co.</h1>
      <div className="Header background-main">
        <nav className="navBarSection">
          <NavLink to={"/gallery"} className="navBarItem subheader font-mian">
            Gallery
          </NavLink>
          <NavLink to={"/about"} className="navBarItem subheader font-main">
            About
          </NavLink>
        </nav>
        <div id="business-logo-space">
          <NavLink id="business-logo" className="font-main" to={"/"}>
            <h1>Feather & Fern Paper Co.</h1>
          </NavLink>
        </div>
        <nav className="navBarSection">
          <NavLink to={"/faq"} className="navBarItem subheader font-main">
            FAQ's
          </NavLink>
          <NavLink to={"/contact"} className="navBarItem subheader font-main">
            Contact
          </NavLink>
        </nav>
      </div>
    </div>
  );
}

export default Header;
