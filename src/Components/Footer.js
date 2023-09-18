import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";

function CreatedBy() {
  return (
    <div id="Footer">
      <nav id="footerNavBarSection">
        <NavLink to={"/privacy-policy"} className="footerNavBarItem">
          Privacy Policy
        </NavLink>
        <NavLink to={"/terms-and-conditions"} className="footerNavBarItem">
          Terms and Conditions
        </NavLink>
        <NavLink to={"/faq"} className="footerNavBarItem">
          FAQ's
        </NavLink>
        <NavLink to={"/contact"} className="footerNavBarItem">
          Contact
        </NavLink>
      </nav>
      <div id="footerSignature">
        <h4>Hanna Chee Calligraphy</h4>
        <p>All rights reserved.</p>
      </div>
    </div>
  );
}

export default CreatedBy;