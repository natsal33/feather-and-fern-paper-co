import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";

function CreatedBy() {
  const [isDesktop, setDesktop] = React.useState(window.innerWidth >= 650);

  const updateMedia = () => {
    setDesktop(window.innerWidth >= 650);
  };

  React.useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    <div id="Footer" className="background-main">
      {isDesktop ? (
        <nav id="footerNavBarSection">
          <NavLink to={"/privacy-policy"} className="footerNavBarItem">
            Privacy Policy
          </NavLink>
          <NavLink to={"/terms-and-conditions"} className="footerNavBarItem">
            Terms and Conditions
          </NavLink>
          <div id="footerSignature">
            <h4>Feather & Fern Paper Co.</h4>
            <p>All rights reserved.</p>
          </div>
          <NavLink to={"/faq"} className="footerNavBarItem">
            FAQ's
          </NavLink>
          <NavLink to={"/contact"} className="footerNavBarItem">
            Contact
          </NavLink>
        </nav>
      ) : (
        <nav id="footerNavBarSection">
          <div id="footerNavBox">
            <div className="footerNavSegment">
              <NavLink to={"/privacy-policy"} className="footerNavBarItem">
                Privacy Policy
              </NavLink>
              <NavLink
                to={"/terms-and-conditions"}
                className="footerNavBarItem"
              >
                Terms and Conditions
              </NavLink>
            </div>
            <div className="footerNavSegment">
              <NavLink to={"/faq"} className="footerNavBarItem">
                FAQ's
              </NavLink>
              <NavLink to={"/contact"} className="footerNavBarItem">
                Contact
              </NavLink>
            </div>
          </div>
          <div id="footerSignature">
            <h4>Feather & Fern Paper Co.</h4>
            <p>All rights reserved.</p>
          </div>
        </nav>
      )}
    </div>
  );
}

export default CreatedBy;
