import React from "react";
import Footer from "../Components/Footer.js";
import Header from "../Components/Header.js";
import PageBody from "../Components/PageBody.js";
import MobileSidebar from "../Components/MobileSidebar.js";
import "../theme.css";
import "./root.css";

export default function Root() {
  const [isDesktop, setDesktop] = React.useState(window.innerWidth >= 650);

  const updateMedia = () => {
    setDesktop(window.innerWidth >= 650);
  };

  React.useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    <div>
      {isDesktop ? (
        <div id="root">
          <Header />
          <PageBody />
          <Footer />
        </div>
      ) : (
        <div id="root">
          <MobileSidebar />
          <PageBody />
          <Footer />
        </div>
      )}
    </div>
  );
}
