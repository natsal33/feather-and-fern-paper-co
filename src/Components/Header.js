import React from "react";
import { NavLink } from "react-router-dom";
import "../theme.css";
import "./Header.css";

function Header() {
  const [headerElement, setHeaderElement] = React.useState();
  const [headerHeight, setHeaderHeight] = React.useState(null);
  const [windowSize, setWindowSize] = React.useState({
    width: undefined,
    height: undefined,
  });

  React.useEffect(() => {
    if (headerElement != null) {
      setHeaderHeight(headerElement.getBoundingClientRect().height);
    }
    setHeaderElement(document.getElementById("Header"));
    console.log("Header Height: " + headerHeight);

    // sets windowSize according to event handler that monitors window resizing
  }, [headerElement, headerHeight, windowSize]);

  React.useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const headerBoxStyle = {
    width: "100%",
    height: headerHeight,
  };

  return (
    <div id="header-box" style={headerBoxStyle}>
      <div id="Header">
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
            <h1>
              Feather & Fern <br /> Paper Co.
            </h1>
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
